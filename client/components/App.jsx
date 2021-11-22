import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth"

import Home from './Home'
import SignIn from './SignIn'
import MovieView from './MovieView'

import auth from '../firebase/auth'
import { startDbListening } from '../firebase/db'
import { saveAllMovies, saveLogin, removeLogin } from '../actions'

function App () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(saveLogin(user))
        startDbListening(movies => dispatch(saveAllMovies(movies)))
      } else {
        dispatch(removeLogin())
      }
    })
  }, [])

  return (
    <div className="container" >
      <h1 onClick={() => navigate('/')}>Movies</h1>
      <SignIn />
      <Routes>
        <Route path= '/' element={<Home />}/>
        <Route path='/details/:id' element={<MovieView />}/>
      </Routes>
    </div>
  )
}

export default App
