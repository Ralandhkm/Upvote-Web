import React, { useState} from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
    // const [input, setInput] = useState(" ")

  return (
    <div className='input-wrapper mx-auto'>
        <FaSearch id='search-icon' className=''/>
        <input placeholder="Search Here..." />
    </div>
  )
}

export default SearchBar