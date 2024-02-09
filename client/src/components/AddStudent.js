import React, {useState} from "react";
import axios from "axios";

function AddStudents() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [status, setStatus] = useState(false);



    
    const handleForm = (e) => {
        e.preventDefault()
        axios.post('http://localhost:2700/add', {id, name, age, status})
        .then(result => {
            alert('Student registered successful')  
        }) 
        .catch(err => console.log(err))
    }
    return (
        <div className='d-flex bg-primary justify-content-center align-items-center vh-100'>
            <div className='bg-white w-50 rounded p-4 border-2 '>
                <h2>Register Student</h2>
                <form onSubmit={handleForm}>
                    <div className="mb-3">
                        <strong>
                            <label htmlFor='id' className="form-label float-sm-start">id</label>
                        </strong>
                        <input type="text" className="form-control bg-light-subtle" placeholder="ex: 01"
                        onChange={(e) => setId(e.target.value)} value={id} />
                    </div>
                    <div className="mb-3">
                        <strong>
                            <label htmlFor="" className="form-label float-sm-start">Name</label>
                        </strong>
                        <input type="text" className="form-control" placeholder="M.S Amila"
                        onChange={(e) => setName(e.target.value)} value={name}/>
                    </div>
                    <div className="mb-3">
                        <strong>
                            <label htmlFor="" className="form-label float-sm-start">Age</label>
                        </strong>
                        <input type="text" className="form-control" id="inpConfirmPassword" placeholder="Age"
                        onChange={(e) => setAge(e.target.value)} value={age} />
                    </div>

                    <div className="mb-3 form-check form-switch col-12">
                        <strong>
                            <label htmlFor="" className="form-label" >Status: Active or Inactive</label>
                        </strong>
                        <input type="checkbox" className="form-check-input float-end" role="switch" 
                        onChange={(e) => setStatus(e.target.checked)} value={status}/> 
                    </div>

                    <div className='d-grid gap-2'>
                        <button className='btn btn-outline-success btn-lg' type='submit'>Add</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default AddStudents;