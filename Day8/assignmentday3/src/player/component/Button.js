import React from 'react'

const Button = ({text}) => {
  return (
    <div>
      <button className='btn'><span class={text}></span></button>
    </div>
  )
}

export default Button
