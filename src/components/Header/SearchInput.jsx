import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const ProductSearch = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [cache, setCache] = useState({});
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 2) {
        setSuggestions([]);
        return;
      }

      if (cache[query]) {
        setSuggestions(cache[query]);
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/products`);
        const data = response.data;
        const filteredSuggestions = data.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filteredSuggestions.map((product) => product.name));
        setCache((prevCache) => ({
          ...prevCache,
          [query]: filteredSuggestions.map((product) => product.name),
        }));
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      } finally {
        setLoading(false);
      }
    };

    const timerId = setTimeout(() => {
      fetchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timerId);
    };
  }, [query, cache]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="w-full py-2 pl-10 pr-4 text-black border border-slate-300 rounded-full shadow-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
        placeholder="Search..."
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0zM8 16a8 8 0 1 1 4.57-7.155l5.387 5.387a1 1 0 1 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 8 16z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {loading && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="animate-spin h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm12-9.238A7.962 7.962 0 0120 12h4c0-6.627-5.373-12-12-12v4zm-3.938 9L21 15.938A7.962 7.962 0 0120 20h-4c-2.667 0-5.063-1.081-6.791-2.809l3.853-3.853zM4 10V6.062A7.96 7.96 0 018.062 4H12v6H4z"
            ></path>
          </svg>
        </div>
      )}
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-slate-300 rounded-b-lg shadow-md max-h-60 overflow-y-auto mt-1">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => setQuery(suggestion)}
              className="px-4 py-2 cursor-pointer hover:bg-slate-200"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductSearch;
