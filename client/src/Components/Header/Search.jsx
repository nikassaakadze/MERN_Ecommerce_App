  import React from 'react'
  import { Search } from './header.styled'
  import SearchIcon from '../../assets/icons/search.png'

  function SearchBox() {
    return (
        <Search className='search'>
          <div className="search-bar">
            <div className="search-inner">
            <input ut type="text" placeholder="ჩაწერეთ საძიებო სიტყვა" />
            <div className="search-icon">
              <img className='searchIcon' src={SearchIcon} alt="" />
            </div>
            </div>
          </div>
      </Search>
    )
  }

  export default SearchBox
