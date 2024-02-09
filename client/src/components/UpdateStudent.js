import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function UpdateStudent() {

    const {ids} = useParams()
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [status, setStatus] = useState();

    // Fetch student information from the server
    useEffect(() => {
        axios.get('http://localhost:2700/update/'+ids)
        .then(result => {
            // Set state with the fetched data
            setId(result.data.id)
            setName(result.data.name)
            setAge(result.data.age)
            setStatus(result.data.status)
        })
        .catch(err => alert(err))
    }, [])

// Function for update student information
    const update = (e) => {
        e.preventDefault()
        axios.put("http://localhost:2700/update/"+ids, {id, name, age, status})
        .then(result => {
            alert('Udpate Success') 
        }) 
        .catch(err => console.log(err))
    }

    return (
        <div className='d-flex bg-primary justify-content-center align-items-center vh-100'>

            
            <div className='bg-white w-50 rounded p-4 border-2 '>
                <h2>Update Student</h2>
                <form onSubmit={update}>

                    {/* Input field for student ID */}
                    <div className="mb-3">
                        <strong>
                            <label htmlFor='id' className="form-label float-sm-start">id</label>
                        </strong>
                        <input type="text" className="form-control bg-light-subtle" placeholder="ex: 01"
                        value={id} onChange={(e) => setId(e.target.value)} />
                    </div>

                    {/* Input field for student name */}
                    <div className="mb-3">
                        <strong>
                            <label htmlFor="" className="form-label float-sm-start">Name</label>
                        </strong>
                        <input type="text" className="form-control" placeholder="M.S Amila"
                         value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>

                    {/* Input field for student age */}
                    <div className="mb-3">
                        <strong>
                            <label htmlFor="" className="form-label float-sm-start">Age</label>
                        </strong>
                        <input type="text" className="form-control" id="inpConfirmPassword" placeholder="Confirm Password"
                         value={age} onChange={(e) => setAge(e.target.value)}/>
                    </div>

                    {/* Input field for student status */}
                    <div className="mb-3 form-check form-switch col-12">
                        <strong>
                            <label htmlFor="" className="form-label" >Status: Active or Inactive</label>
                        </strong>
                        <input type="checkbox" className="form-check-input float-end" role="switch" 
                         value={status} onChange={(e) => setStatus(e.target.checked)}/> 
                    </div>
                    
                    {/* Button to submit the form */}
                    <div className='d-grid gap-2'>
                        <button className='btn btn-outline-success btn-lg' type='submit'>Update</button>
                    </div>
                    
                </form>
            </div>
        </div>

    )
}

export default UpdateStudent;