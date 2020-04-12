import React from 'react';
import './search-box.css';

export const SearchBox = ({placeholder , handlechange}) => (

    <input 
    className='search' 
    onChange={handlechange}    
    type='text' 
    placeholder={placeholder} />
)


