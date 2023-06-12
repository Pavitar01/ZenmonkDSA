import React from 'react'
import "./css/main.css"
import Product from './Product'
import Hello from './Hello'
const Main = () => {
    return (

    <div className='commerce'>
    <div className='head'> 
     <h1>Products</h1>
     </div>
      
      <Product/>
      {/* <Hello/> */}
    </div>
  )
}

export default Main
