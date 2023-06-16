import React from 'react'
import "../Css/all.css"
import Products from './Products'
import About from './About'
const Profile = () => {
  return (
    <div className='profilemain'>
        <Products/>
        <About/>
    </div>
  )
}

export default Profile
