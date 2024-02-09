import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import './Signup.css';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');
    const navigate = useNavigate();
 

   
    const handleForm = (e) => {
        e.preventDefault()
        if(password.length >= 8 && conPassword === password) {
            axios.post('http://localhost:2700/register', {email, password, conPassword})
            .then(result => {
                console.log(result)
                navigate('/login')
            }) 
            .catch(err => console.log(err))
        }    
        else {
            alert('Error Occurred')
        }
    }
        
    
    
    return(
        <div className='d-flex bg-primary justify-content-center align-items-center vh-100'>
            <div className='bg-white w-50 rounded p-4 border-2 '>
                <h2>Signup Form</h2>
                <form onSubmit={handleForm}>
                    <div className="mb-3">
                        <strong>
                            <label htmlFor='email' className="form-label float-sm-start">Email</label>
                        </strong>
                        <input type="email" className="form-control bg-light-subtle" placeholder="example@gmail.com"
                        onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className="mb-3">
                        <strong>
                            <label htmlFor="" className="form-label float-sm-start">Password</label>
                        </strong>
                        <input type="password" className="form-control" id="inpPassword" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </div>
                    <div className="mb-3">
                        <strong>
                            <label htmlFor="" className="form-label float-sm-start">Confirm Password</label>
                        </strong>
                        <input type="password" className="form-control" id="inpConfirmPassword" placeholder="Confirm Password"
                        onChange={(e) => setConPassword(e.target.value)} value={conPassword} />
                    </div>
                    <div className='d-grid gap-2'>
                        <button className='btn btn-outline-success btn-lg' type='submit'>Sign Up</button>
                    </div>
                    <p className="text-center mt-2"> Or </p>
                    <div className='d-grid gap-2'>
                        <button className='btn btn-outline-primary btn-lg' type='submit'>Sign Up with google</button>
                    </div>
                </form>
                <div className='container'>
                    <div className='row'>
                        <p className='col-6 mt-4'>Do you have a account already?</p>
                        <p className='col-1 mt-4'><Link to="/login" className='icon-link-hover'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;