


import { useState } from "react";

import { getData } from "./UserList";

export const UserForm = () => {

    const [ Formdata, setFormdata ] = useState({
        Name : "",
        Age : "",
        Address : "",
        Department : "",
        Salary : "",
        marital_state : "",
    })



    const handleChange = (e) =>{
        const { name , value } = e.target;
        console.log('value:', value)
        console.log('name:', name)
        setFormdata({
            ...Formdata,
            [name] : value,
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Hello");

        console.log('Formdata:', Formdata)
        fetch("http://localhost:8080/users",{
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(Formdata)
        }).then(() =>{
            getData();
        })
    }

    return (
        <div>

            <form onSubmit={handleSubmit} action="">
                <input placeholder="Enter Name" onChange={handleChange} name = "Name" type="text" id="" />
                <input placeholder="Enter Age" onChange={handleChange} name = "Age" type="number" id="" />
                <input placeholder="Enter Address" onChange={handleChange} name = "Address" type="text" id="" />
                <select onChange={handleChange} value={""}  name="Department" id="">
                    <option value="">Department</option>
                    <option value="HR">HR</option>
                    <option value="SDE">SDE</option>
                    <option value="SDE2">SDE2</option>
                    <option value="Manager">Manager</option>
                </select>
                <input placeholder="Enter Salary" onChange={handleChange} name="Salary" type="text" id="" />
                <div>
                    <div>
                        Single
                        <input onChange={handleChange} value={"Single"} name="marital_state" type="radio" id="" />
                    </div>
                    <div>
                        Married
                        <input onChange={handleChange} value={"Married"} name="marital_state" type="radio" id="" />
                    </div>
                </div>
                <input type="submit" value="Submit Form" />
            </form>
        </div>
    )

}