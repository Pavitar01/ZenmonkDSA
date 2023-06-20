import React from 'react'

const Head = ({title,des}) => {
  return (
    <div className='head'>
      <h1>{title}</h1>
      <p>{des}</p>
    </div>
  )
}

export default Head
