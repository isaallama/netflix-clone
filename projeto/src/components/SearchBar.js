import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'

const API_KEY = '6c424f783d6bd4db06274a9d062faddd'
const BASE_URL = 'https://api.themoviedb.org/3'

const SearchBar = ({ onSearchClick }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isActive, setIsActive] = useState(false)

  const searchMovies = async e => {
    const searchQuery = e.target.value
    setQuery(searchQuery)
    if (searchQuery) {
      try {
        const response = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
        )
        const data = await response.json()
        setResults(data.results)
      } catch (error) {
        console.error('Erro na busca de resultados:', error)
      }
    } else {
      setResults([])
    }
  }

  return (
    <div className='search-bar'>
      <div className={`search-bar--container ${isActive ? 'active' : ''}`}>
        <button
          onClick={() => setIsActive(!isActive)}
          className='search-bar--icon'
        >
          <SearchIcon className='custom-color' />
        </button>
        {isActive && (
          <input
            type='text'
            placeholder='Títulos, gente e gêneros'
            value={query}
            onChange={searchMovies}
          />
        )}
      </div>
      {results.length > 0 && isActive && (
        <ul className='search-bar--results'>
          {results.map(movie => (
            <li
              onClick={() => {
                setIsActive(!isActive)
                setQuery('')
                setResults([])
                onSearchClick(movie)
              }}
              key={movie.id}
            >
              {movie.title}{' '}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar
