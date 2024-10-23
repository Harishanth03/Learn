import React from 'react'

export const MapMethod = () => {

    const arrayList = ['Home' , 'About me', 'Contact Us', 'Login' , 'fun'];
    
  return (
    <>
        <ul>
            {arrayList.map((array, index) => (<li key={index}>{array}</li>))}
        </ul>
    </>
  )
}
