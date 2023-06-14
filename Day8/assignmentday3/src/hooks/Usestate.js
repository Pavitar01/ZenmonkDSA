import React, { useState } from 'react'

const Usestate = () => {
    const [value,setvalue]=useState("Intitiale value")
  return (
    <div>
      <h1 className="text-center">Hey, I am UseState</h1>
      <p>for state management</p>
      {value}

    </div>
  )
}

export default Usestate
