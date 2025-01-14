import React, { useState, useContext, useEffect, useRef } from 'react';
import './SearchBar.css';
import SearchContext from '../context/searchContext';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const context = useContext(SearchContext);

  const inputRef = useRef<HTMLInputElement | null>(null);

  if (!context) {
    throw new Error('SearchBar must be used within a SearchProvider');
  }

  useEffect(() => {
    if(inputRef.current){
        inputRef.current.focus()
    }
  })

  const { setSearchResults } = context;

  const handleSearch = async () => {
    console.log('clicked');
    
    if (query.length >= 5) {
      const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=YOUR_API_KEY&query=${query}`);
      const data = await response.json();
      setSearchResults(data.results);
    }
  };

  return (
    <div className="search-bar">
      <input 
        type="text"
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        placeholder="Search for movies, TV shows, or actors..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;