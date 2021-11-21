import React from 'react'
import { onAuthStateChanged } from "firebase/auth"

function App () {
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log('USER SIGNED IN')
  //     } else {
  //       console.log('USER SIGNED OUT')
  //     }
  //   })
  // }, [])  

  return (
    <div className="container" >
      <h1>Hello</h1>
    </div>
  )
}

export default App
