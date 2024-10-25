import { useState } from "react"

export const UserForm = () => {

    const [userDetails , setUserDetails] = useState({name : "Harishanth" , age : 24});

    // const onChangeHandler = (e) => 
    // {
    
    //     const userDetailsObj = {...userDetails};

    //     userDetailsObj.name = e.target.value;

    //     setUserDetails(userDetailsObj);

    // }

    // const onChangeAge = (e) => 
    // {
        
    //     const userDetailsObj = {...userDetails};

    //     userDetailsObj.age = e.target.value;

    //     setUserDetails(userDetailsObj);
    
    // }

    function changeHandler(e)
    {
        setUserDetails({...userDetails,[e.target.name]:e.target.value})
    }

  return (

    <>
        <form>

            <h1>{userDetails.name}</h1>

            <h2>{userDetails.age}</h2>

            <input type="text" placeholder="Enter User Name" name="name" onChange={changeHandler}/>

            <input type="text" placeholder="Enter Age" name="age" onChange={changeHandler}/>

        </form>
    </>

  )

}


