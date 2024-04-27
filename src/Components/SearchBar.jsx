import { useState, useRef } from "react";
import logo from '../assets/Ep-Hub.png';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLink, setActiveLink] = useState('Buy');
  const inputRef = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(inputRef.current.value);
    console.log(`Searching for ${searchTerm}`);
  };

  return (
    <div className="bg-[#92E3A9] h-20 rounded-b-2xl px-5 text-white flex items-center justify-between">
      <img src={logo} alt="" className="ml-4 h-5 w-28" />
      <form onSubmit={handleSearch} className="flex-grow mx-20">
        <div className="flex items-center border-b-2 border-white py-2">
          <input ref={inputRef} type="text" placeholder="Search for products" className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" />
          <button type="submit" className="flex-shrink-0 bg-green-400 text-white hover:bg-white hover:text-black py-1 px-2 rounded">Search</button>
        </div>
      </form>
      <div className="flex flex-row items-center justify-center">
        <div className="mr-12 flex flex-row items-center justify-center gap-5">
          <a href="" className={`mr-4 ${activeLink === 'Buy' ? 'font-semibold text-white underline' : ''}`} onClick={() => setActiveLink('Buy')}>Buy</a>
          <a href="" className={`mr-4 ${activeLink === 'Sell' ? 'font-semibold text-white underline' : ''}`} onClick={() => setActiveLink('Sell')}>Sell</a>
        </div>
        <button className="bg-white text-black hover:bg-green-400 hover:text-white py-1 px-2 rounded">Logout</button>
      </div>
    </div>
  );
};

export default SearchBar;