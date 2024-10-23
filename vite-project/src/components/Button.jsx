import React from 'react'

export const Button = () => {

    let Shoot = (message) => {
        alert(message);
    }
  return (
    <>
        <button onClick={() => Shoot('hello')}>Click Here</button>
    </>
  )
}
