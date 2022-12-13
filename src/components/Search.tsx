import React from 'react'
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="search-bar">
      <FaSearch/>
      <input type="text" placeholder="Search"/>
    </div>
  )
}

export default Search