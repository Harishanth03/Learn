import { useState } from "react"

export const UserDetails = () => {

    const [userName , setUserName] = useState("Ram");

    const [age , setAge] = useState(22);

    const updateUserName = () =>{userName == "Ram" ? setUserName("Hari") : setUserName("Ram")};

    const updateUserAge = () => {setAge(24)};
  return (

    <>
        <h1>User Details: {userName} </h1>

        <h1>Age: {age} </h1>

        <button onClick={updateUserName}>Update User Name</button>

        <button onClick={updateUserAge}>Update User Age</button>
    </>
  )
}
