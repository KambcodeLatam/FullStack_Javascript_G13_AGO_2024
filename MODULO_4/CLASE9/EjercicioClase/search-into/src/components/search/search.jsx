import React from 'react'
import './search.css'

const Search = ({setNameSearch}) => {
  return (
    <div>
        <div className='box'>
            <div className='container-1'>
                <span className='icon'>
                    <i className='fa fa-search'></i>
                </span>
                <input type='search' id='search' onChange={((e) => setNameSearch(e.target.value) )}  placeholder='Search...' />
            </div>
        </div>
    </div>
  )
}

export default Search