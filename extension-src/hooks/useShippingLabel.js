import { useCallback, useRef, useState } from "react";
import { API_BASE } from "../utils/constants";

function createPdfUrlFromArrayBuffer(arrayBuffer) {
  const bytes = new Uint8Array(arrayBuffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return `data:application/pdf;base64,${btoa(binary)}`;
}

function downloadPdfFromArrayBuffer(arrayBuffer, fileName) {
  const blob = new Blob([arrayBuffer], { type: "application/pdf" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

export default function useShippingLabel() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const arrayBufferRef = useRef(null);
  const urlRef = useRef(null);

  const downloadShippingLabel = useCallback(async (orderId) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${API_BASE}/orders/getlabel/${orderId}`,
        {
          method: "GET",
          headers: { Accept: "application/pdf" },
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      arrayBufferRef.current = arrayBuffer;

      const url = createPdfUrlFromArrayBuffer(arrayBuffer);

      urlRef.current = url;

      return {
        url,
        success: true,
        size: arrayBuffer.byteLength,
        timestamp: Date.now(),
      };
    } catch (err) {
      console.error("Failed to download shipping label:", err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const downloadLabel = useCallback((fileName = "shipping-label.pdf") => {
    if (!arrayBufferRef.current) return;
    downloadPdfFromArrayBuffer(arrayBufferRef.current, fileName);
  }, []);

  const getUrl = useCallback(() => {
    return urlRef.current || "";
  }, []);

  const cleanup = useCallback(() => {
    urlRef.current = null;
    arrayBufferRef.current = null;
  }, []);

  return {
    downloadShippingLabel,
    downloadLabel,
    getUrl,
    cleanup,
    isLoading,
    error,
  };
}
