import { useState } from "react"

import "./RegisterForm.css"

export const RegisterForm = () => 
{
    const [user , SetUser] = useState({
        
        name : "Harishanth",

        age : 24,

        gender : "Male",

        isMarried : false,


    })

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

                    <tr>

                        <td>Name</td>

                        <td>Harishanth</td>

                    </tr>

                </tbody>

            </table>


            <form >

                <input type="text" placeholder="fullName" value={user.name} />

                <input type="number" placeholder="age" value={user.age}  />

                <div className="gender">

                    <label htmlFor="male">

                        <input name="gender" type="radio" id="Male" checked = {user.gender == "Male"} value={user.gender} /> Male

                    </label>


                    <label htmlFor="female">

                        <input name="gender" type="radio" checked =  {user.gender == "Female"} value={user.gender} id="Female" /> Female

                    </label>

                </div>

                <label htmlFor="isMarried">

                    <input type="checkbox" checked = {user.isMarried == true} value={user.isMarried} id="isMarried"/> is Married
                    
                </label>

            </form>
            
        </>

    )

}
