import { useState } from "react";

function SearchBox({ onSearch, onLocation }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) return;
    onSearch(city);
    setCity("");
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <div className="btn-group">
        <button type="submit">Search</button>

        <button
          type="button"
          className="location-btn"
          onClick={onLocation}
        >
          📍 Use My Location
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
