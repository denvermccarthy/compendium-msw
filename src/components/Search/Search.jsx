import React, { useState } from 'react';

export default function Search({ handler }) {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
    handler(e.target.value);
  };
  return (
    <label>
      Search
      <input
        value={search}
        onChange={handleSearch}
        type="text"
        placeholder="enter a name here"
      />
    </label>
  );
}
