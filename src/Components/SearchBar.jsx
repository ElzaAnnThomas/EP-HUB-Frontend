import React, { useState, useRef } from "react";
import logo from '../assets/Ep-Hub.png';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(inputRef.current.value);
    console.log(`Searching for ${searchTerm}`);
  };

  return (
    <div className="bg-blue-500 p-4 text-white flex items-center justify-between">
      <img src={logo} alt="" className="h-10" />
      <form onSubmit={handleSearch} className="flex-grow mr-4">
        <div className="flex items-center border-b-2 border-white py-2">
          <input ref={inputRef} type="text" placeholder="Search for products" className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" />
          <button type="submit" className="flex-shrink-0 bg-white text-blue-500 py-1 px-2 rounded">Search</button>
        </div>
      </form>
      <div className="flex">
        <a href="" className="mr-4">Buy</a>
        <a href="" className="mr-4">Sell</a>
        <button className="bg-white text-blue-500 py-1 px-2 rounded">Logout</button>
      </div>
    </div>
  );
};

export default SearchBar;