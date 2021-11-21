import React, { useState } from 'react'

import { searchForMovie, searchForSeries } from '../api/imdb'
import { saveMovie } from '../firebase/db'

function AddMovie () {

  const [formIsVisible, setFormVisible] = useState(false)
  const [media, setMedia] = useState('movie')
  const [searchTerm, setSearch] = useState('')
  const [searchResults, setResults] = useState([])

  const toggleForm = () => {
    setFormVisible(!formIsVisible)
  }

  const handleTyping = (evt) => {
    setSearch(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const search = media === 'movie' ? searchForMovie : searchForSeries
    search(searchTerm)
      .then(results => {
        setResults(results)
      })
  }

  const save = (movie) => {
    const { id, image, title } = movie 

    const data = {
      id, image, title,
      type: media,
      watched: false
    }
    saveMovie(id, data)
  }

  const renderList = () => {
    return <div>
      {searchResults.map(movie => <div key={movie.id}>
        <img className='results-img' src={movie.image} />
        <p>{movie.title} {movie.description}<button onClick={() => save(movie)}>Add</button></p>
      </div>)}
    </div>
  }

  const renderForm = () => {
    return <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='mediaType'>Search for a:</label>
        <select id="mediaType" onChange={evt => setMedia(evt.target.value)} value={media}>
          <option value="movie">movie</option>
          <option value="tv show">tv show</option>
        </select>
      </div>
      <div>
        <label htmlFor='title'>Looking for:</label>
        <input type='text' id='title' onChange={handleTyping} />
        <button>Search</button>
      </div>
    </form>
  } 

  return (
    <>
      {
        formIsVisible ? (
        <>
          {renderForm()}
          <button onClick={toggleForm}>Close</button>
          {renderList()}
        </>
        ) : <button onClick={toggleForm}>Add new</button>
      }

    </>
  )
}

export default AddMovie