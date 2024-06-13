import React from 'react';

const Search = ({ searchTerm, setSearchTerm, filteredSongs }) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search songs..."
        value={searchTerm}
        onChange={handleChange}
        className='input-search'
      />
      
    </div>
  );
};

export default Search;