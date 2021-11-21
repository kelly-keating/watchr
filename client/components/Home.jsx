import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import AddMovie from './AddMovie'

import { setAsWatched } from '../firebase/db'

function Home () {
  const navigate = useNavigate()
  const movies = useSelector(redux => Object.values(redux.movies))

  const toWatch = movies.filter(movie => !movie.watched)
  const watched = movies.filter(movie => movie.watched)

  const clickHandler = (id) => {
    setAsWatched(id)
  }

  const goTo = (id) => {
    navigate('/details/' + id)
  }

  return (
    <>
      <AddMovie/>
      <p>To watch:</p>
      <ul>
        {toWatch.map(movie => (
          <li key={movie.id}>
            {movie.title}
            <button onClick={() => goTo(movie.id)}>Details</button>
            <button onClick={() => clickHandler(movie.id)}>Watched :)</button>
          </li>
        ))}
      </ul>
      <p>Watched:</p>
      <ul>
        {watched.map(movie => <li key={movie.id}>
          {movie.title}
          <button onClick={() => goTo(movie.id)}>Details</button>
        </li>)}
      </ul>
    </>
  )
}

export default Home
