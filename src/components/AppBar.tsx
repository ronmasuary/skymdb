import React from 'react';
import './AppBar.css';
import SearchBar from './SearchBar';

const AppBar: React.FC = () => {
  return (
    <div className="app-bar">
      <h1 className="app-title">Movie Search App</h1>
      <SearchBar />
    </div>
  );
};

export default AppBar;