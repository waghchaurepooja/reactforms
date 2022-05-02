
import { useState, useEffect } from "react";

export let getData;

export const UserList = () => {

    const [UserData, setUserData] = useState([]);
    
    useEffect(() => {
        getData()
    },[]);
    
    getData = async () => {
        const data = await fetch("http://localhost:8080/users").then((element) =>
        element.json()
        )
        setUserData(data);
    }
    
    console.log('UserData:', UserData)
    return (
        <div>
            <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Department</th>
              <th>Salary</th>
              <th>marital_state</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {UserData.map((element) =>{
                
                return (

                    <tr className="row">
                        <td className="first_name">{element.Name}</td>
                        <td className="last_name">{element.Age}</td>
                        <td className="email">{element.Address}</td>
                        <td className="gender">{element.Department}</td>
                        <td className="age">{element.Salary}</td>
                        <td className="tenth_score">{element.marital_state}</td>
                    </tr>

                )
            })}
          </tbody>
        </table>
        </div>
    )
}