import { useState } from "react";

export function SearchBox({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        placeholder="Enter city name..."
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBox;   // 👈 make sure this line exists
