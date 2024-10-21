import React from 'react'

const studentDetails = 
    [
        { name: 'Osil', age: 24, isMarried: "False" },
        { name: 'Mathumitha', age: 23, isMarried: "Flase" },
        { name: 'Tharshihan', age: 30, isMarried: "True" },
        { name: 'Nimal', age: 28, isMarried: "True" }
    ];

export const Student = (props) => {

  return (
    <div className='css-student'>
       <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Is Married</th>
                </tr>
            </thead>
            <tbody>
                {studentDetails.map((student , index) => (
                    <tr key={index}>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.isMarried}</td>
                    </tr>
                ))}
            </tbody>
       </table>
    </div>
    

  )
}
