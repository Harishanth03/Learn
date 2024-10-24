import React from 'react'

import './Event.css'

export const Events = () => {

  return (

    <button onClick={(event) => ClickHere("Say Hello", event)} className='click-btn'>Click Here</button>

  )
}

function ClickHere(message)
{
    alert(`The Message is: ${message}`);
}