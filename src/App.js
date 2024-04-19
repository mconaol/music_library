import React, { useEffect, useState } from 'react'
import Gallery from './Gallery.js'
import SearchBar from './SearchBar.js'
import './App.css';

function App() {
let [search, setSearch] = useState('')
let [message, setMessage] = useState('Search for Music')
let [data, setData] = useState([])

  return (
    <div className="App">
      <header className="App-header">
       <SearchBar/>
       {message}
       <Gallery/>
       </header>
    </div>
  );
}

export default App;
