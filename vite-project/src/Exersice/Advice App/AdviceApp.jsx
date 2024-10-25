import React, { useEffect } from 'react'

import './AdviceApp.css'

import { useState } from 'react'

export const AdviceApp = () => {

    const[advice ,  setAdvice] = useState("Hello this is an advice app");

    async function getAdvice()
    {
        const response = await fetch("https://api.adviceslip.com/advice");

        const jsonResponse = await response.json();

        console.log(jsonResponse)

        setAdvice(jsonResponse.slip.advice)
    }

    useEffect(function(){
        getAdvice();
    }, []);

  return (

    <div>

        <h3>{advice}</h3>

        <button onClick={getAdvice}>Get Advice</button>

    </div>

  )

}
