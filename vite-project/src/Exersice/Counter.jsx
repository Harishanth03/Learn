import React from 'react'

import './Counter.css'

import { useState } from 'react'

export const Counter = () => {

  const [count , setCount] = useState(0);

  return (

    <>
      <div className='container'>

        <button onClick={ () => alert("hi")}>Increase : {count} </button>
        <button onClick={ () => setCount(count - 1)}>Decrease : {count}</button>

      </div>
    </>
    
  )
}
