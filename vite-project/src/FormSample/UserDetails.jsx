import { useState } from "react"

export const UserDetails = () => {

    const [userName , setUserName] = useState({name : "Ram" , age : 22});

    const [age , setAge] = useState(22);

    const updateUserName = () =>{setUserName({...userName, name : "Harishanth"})};

    const updateUserAge = () => {setUserName({...userName, age : 24})};
  return (

    <>
        <h1>User Details: {userName.name} </h1>

        <h1>Age: {userName.age} </h1>

        <button onClick={updateUserName}>Update User Name</button>

        <button onClick={updateUserAge}>Update User Age</button>
    </>
  )
}
