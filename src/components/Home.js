import React from 'react'

import { Link } from 'react-router-dom'

const Home = () => { 
  return (
    <div className="hero text-center">
      <div className="hero-container bg-opacity-75 text-danger">
        {/* <h1 className='display-2'>Bobs Burgers</h1>
        <p className='lead'>Bring back your chilhood memories</p> */}
        <Link to='/animes' className='btn btn-danger'>Browse Characters</Link>
      </div>
    </div>
  )
}

export default Home 