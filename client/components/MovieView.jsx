import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

import { getDeets } from '../api/imdb'

function MovieView () {
  const { id } = useParams()
  const navigate = useNavigate()

  const [details, setDetails] = useState(null)

  useEffect(() => {
    getDeets(id)
      .then(setDetails)
  }, [])

  return (
    <>
      <button onClick={() => navigate('/')}>Home</button>
      <h3>{details?.title}</h3>
      <div className='details-container'>
        <img className='details-image' src={details?.image}/>
        <div className='details-deets'>
          <p>{details?.fullTitle}</p>
          <p>{details?.tagline}</p>
          <p>{details?.stars}</p>
          <p>{details?.plot}</p>
        </div>
      </div>
      <div className='similars-container'>
        <h3>Similar Titles</h3>
        <div className='similars-row'>
          {details?.similars?.map(title => (
            <div key={title.id} className='similars-tile'>
              <img className='results-img' src={title?.image}/>
              <p>{title?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}   

export default MovieView

