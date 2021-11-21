import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { getDeets } from '../api/imdb'

function MovieView () {
  const { id } = useParams()
  const [details, setDetails] = useState(null)

  useEffect(() => {
    getDeets(id)
      .then(setDetails)
  }, [])

  return (
    <>
      <h3>{details?.title}</h3>
      <div className='details-container'>
        <img className='details-image' src={details?.image}/>
        <div>
          <p>{details?.fullTitle}</p>
          <p>{details?.tagline}</p>
          <p>{details?.stars}</p>
          <p>{details?.plot}</p>
        </div>
      </div>
      <div className='similars-container'>
        {details?.similars.map(title => (
          <>
            <h3>{title?.title}</h3>
            <img className='results-img' src={title?.image}/>
          </>
        ))}
      </div>
    </>
  )
}   

export default MovieView

