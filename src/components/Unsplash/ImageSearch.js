import axios from 'axios';
import './unsplash.css'
import React, { useState } from 'react'


function ImageSearch({ setImageResults }) {
    const [search , setSearch]= useState('')
        console.log('MY_ACCESS_KEY', process.env.REACT_APP_MY_ACCESS_KEY);

    function handleSearch(e){
        e.preventDefault();
        //  const Access=process.env.REACT_APP_MY_ACCESS_KEY
        if(search){
            axios.get(`https://api.unsplash.com/search/photos?query=${search}`,{
                headers:{'Authorization': `Client-ID ${process.env.REACT_APP_MY_ACCESS_KEY}`}
            }
        ).then(response => setImageResults(response.data.results))
        }
    }
  return (
    <div className='form-container'>
      
        <form onSubmit={handleSearch} className='form'> 
             <h2 style={{margin:'20px', fontFamily:'cursive' , fontSize:'bolder', color:'#db2c89ff'}}>Hello!  Inspire Your Creativity</h2>
                <input 
                className="search-input"
                placeholder='Search for images' value={search} onChange={(e) => setSearch(e.target.value)} style={{height: '30px', width: '600px', borderRadius: '5px',marginLeft:'300px'}} />
                <button 
                className="search-btn" type='submit'>Search</button>
            </form></div>
  )
}

export default ImageSearch