import React from 'react'
import { useNavigate } from 'react-router-dom'

import { deleteRecord, setAsWatched } from '../firebase/db'

function MovieTile ({ movie }) {
  const { id, image, title, watched } = movie
  const navigate = useNavigate()

  const clickHandler = () => {
    setAsWatched(id)
  }

  const goTo = () => {
    navigate('/details/' + id)
  }

  return (
    <div key={id} className='movieGrid-item'>
      <img src={image}/>
      <div>
        <p onClick={goTo}>{title}</p>
        <div>
          {!watched && <button onClick={clickHandler}>Watched :)</button>}
          <button onClick={() => deleteRecord(id)}>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default MovieTile
