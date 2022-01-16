import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import MovieTile from './MovieTile'
import AddMovie from './AddMovie'

function Home () {
  let movies = useSelector(redux => Object.values(redux.movies))
  const [sortBy, setSortBy] = useState('a-z')

  const sortingFuncs = {
    new: (x, y) => x.released < y.released ? 1 : -1,
    old: (x, y) => x.released < y.released ? -1 : 1,
    'a-z': (x, y) => x.title.toLowerCase() < y.title.toLowerCase() ? -1 : 1,
    'z-a': (x, y) => x.title.toLowerCase() < y.title.toLowerCase() ? 1 : -1,
  }

  movies = movies.sort(sortingFuncs[sortBy])
  const toWatch = movies.filter(movie => !movie.watched)
  const watched = movies.filter(movie => movie.watched)

  return (
    <>
      <AddMovie/>
      <p>Order:</p>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value='new'>Newest first</option>
        <option value='old'>Oldest first</option>
        <option value='a-z'>A-Z</option>
        <option value='z-a'>Z-A</option>
      </select>
      <p>To watch:</p>
      <div className='movieGrid-container'>
        {toWatch.map(movie => <MovieTile key={movie.id} movie={movie} />)}
      </div>
      <p>Watched:</p>
      <div className='movieGrid-container'>
        {watched.map(movie => <MovieTile key={movie.id} movie={movie} />)}
      </div>
    </>
  )
}

export default Home
