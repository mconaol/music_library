import React, { useEffect, useState } from 'react'
import Gallery from './Gallery.js'
import SearchBar from './SearchBar.js'
import './App.css';

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music')
  let [data, setData] = useState([])

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
    if(search) {
    const fetchData = async () => {
      document.title = `${search} Music`
      const response = await fetch(API_URL + search)
      const resData = await response.json()
        if (resData.results.length >0) {
          setData(resData.results)
        } else {
          setMessage('Not Found')
        }
    }
    fetchData()
  }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
}


  return (
    <div className="App">
      <header className="App-header">
        <SearchBar handleSearch={handleSearch}/>
        {message}
        <Gallery data={data}/>
      </header>
    </div>
  )

  
}

export default App;
