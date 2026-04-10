export function removeFalsyKeys(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => Boolean(v)));
}

export const StoreHelper = {
  get(key) {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(key);
  },
  set(key, value) {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(
        key,
        typeof value !== "string" ? JSON.stringify(value) : value,
      );
    } catch {
      /* ignore */
    }
  },
  delete(key) {
    if (typeof window !== "undefined") window.localStorage.removeItem(key);
  },

  sessionGet: (key) =>
    typeof window !== "undefined" ? window.sessionStorage.getItem(key) : null,
  sessionSet(key, value) {
    if (typeof window === "undefined") return;
    try {
      window.sessionStorage.setItem(
        key,
        typeof value !== "string" ? JSON.stringify(value) : value,
      );
    } catch {
      /* ignore */
    }
  },
  sessionDelete(key) {
    if (typeof window !== "undefined") window.sessionStorage.removeItem(key);
  },
};
