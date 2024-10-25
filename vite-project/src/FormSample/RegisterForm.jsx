import { useState } from "react"

import "./RegisterForm.css"

export const RegisterForm = () => 
{
    const [user , SetUser] = useState({
        
        name : "Harishanth",

        age : 24,

        gender : "Male",

        isMarried : false,


    });

    function changeHandler (e)
    {
        const name = e.target.name;
        
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value

        SetUser({...user, [name] : value})
    }

    return(

        <>

            <table>

                <tbody>

                    <tr>

                        <td>Name</td>

                        <td>{user.name}</td>

                    </tr>

                    <tr>

                        <td>Age</td>

                        <td>{user.age}</td>

                    </tr>

                    <tr>

                        <td>Gender</td>

                        <td>{user.gender}</td>

                    </tr>

                    <tr>

                        <td>Status</td>

                        <td>{user.isMarried ? "Married" : "Single"}</td>

                    </tr>

                </tbody>

            </table>


            <form >

                <input type="text" placeholder="fullName" value={user.name}   name="name" onChange={changeHandler}/>

                <input type="number" placeholder="age" value={user.age}  name="age" onChange={changeHandler}/>

                <div className="gender">

                    <label htmlFor="Male">

                        <input name="gender" type="radio" id="Male" checked = {user.gender == "Male"} value="Male" onChange={changeHandler}/> Male

                    </label>


                    <label htmlFor="Female">

                        <input name="gender" type="radio" checked =  {user.gender == "Female"} value="Female" id="Female" onChange={changeHandler}/> Female

                    </label>

                </div>

                <label htmlFor="isMarried">

                    <input type="checkbox" checked = {user.isMarried == true} value={user.isMarried} id="isMarried"  name="isMarried" onChange={changeHandler}/> is Married
                    
                </label>

            </form>
            
        </>

    )

}
