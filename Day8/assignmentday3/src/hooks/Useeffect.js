import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [count,setcount]=useState(0);
     useEffect(()=>{
     const counter =setTimeout(() => {
        setcount(count+1);
     }, 1000);
     return ()=>clearTimeout(counter)
    },[])
  return (
    <div>
    <h1>Hey, I m UseEffect</h1> 
      <p>For Performing action after rendering</p>
      {count}
    </div>
  )
}

export default Useeffect
