import { useState, useCallback, useEffect, useRef } from "react";
import { SearchIcon } from "../Icons";

const BASE_API_URL = "https://staging.mobiledirectonline.co.uk/api";

export const CheckoutPostCodeLookup = ({ onAddressSelected, formValues }) => {
  const { postCode, city } = formValues;

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debounceRef = useRef(null);
  const containerRef = useRef(null);

  const search = useCallback(async (q) => {
    if (!q || q.length < 2) {
      setSuggestions([]);
      return;
    }
    setIsSearching(true);
    try {
      const res = await fetch(
        `${BASE_API_URL}/address/autocomplete?query=${encodeURIComponent(q)}`,
      );
      const data = await res.json();
      setSuggestions(data?.data || []);
    } catch {
      setSuggestions([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  const handleChange = useCallback(
    (e) => {
      const val = e.target.value;
      setQuery(val);
      clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => search(val), 300);
    },
    [search],
  );

  const handleSelect = useCallback(
    async (item) => {
      const displayText = item.address || item.suggestion || "";
      try {
        const res = await fetch(
          `${BASE_API_URL}/address/details/${item.udprn}`,
        );
        const data = await res.json();
        if (data.success) {
          onAddressSelected({
            addressLineOne: displayText,
            city: data?.data?.post_town || "",
            postCode: data?.data?.postcode || "",
          });
        }
      } catch {
        onAddressSelected({
          addressLineOne: displayText,
          city: "",
          postCode: "",
        });
      }
      setSuggestions([]);
      setQuery(displayText);
    },
    [onAddressSelected],
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="postcode-autocomplete" ref={containerRef}>
      <div className="postcode-autocomplete__input-wrapper">
        <input
          type="text"
          className="postcode-autocomplete__input"
          value={query}
          onChange={handleChange}
          placeholder=" "
          autoComplete="off"
        />
        <label className="postcode-autocomplete__label">
          Enter your postcode or address
        </label>
        <span className="postcode-autocomplete__icon" aria-hidden="true">
          <SearchIcon width={20} height={20} />
        </span>
      </div>

      {suggestions.length > 0 && (
        <ul className="postcode-autocomplete__dropdown" role="listbox">
          {suggestions.map((item, i) => (
            <li key={item.id || i}>
              <button
                type="button"
                className="postcode-autocomplete__option"
                onClick={() => handleSelect(item)}
              >
                <span className="postcode-autocomplete__option-text">
                  {item.address || item.suggestion}
                </span>
                {item.post_town && (
                  <span className="postcode-autocomplete__option-subtitle">
                    {item.post_town}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}

      {isSearching && suggestions.length === 0 && (
        <div className="postcode-autocomplete__loading-message">
          <div className="postcode-autocomplete__spinner" />
          <span>Searching...</span>
        </div>
      )}

      {(postCode || city) && (
        <div className="postcode-autocomplete__readonly-grid">
          <div className="postcode-autocomplete__readonly-field">
            <input
              value={postCode || ""}
              readOnly
              className="postcode-autocomplete__readonly-input"
              placeholder=" "
            />
            <label className="postcode-autocomplete__label postcode-autocomplete__label--compact">
              Postcode
            </label>
          </div>
          <div className="postcode-autocomplete__readonly-field">
            <input
              value={city || ""}
              readOnly
              className="postcode-autocomplete__readonly-input"
              placeholder=" "
            />
            <label className="postcode-autocomplete__label postcode-autocomplete__label--compact">
              City
            </label>
          </div>
        </div>
      )}
    </div>
  );
};
