import {React,  useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleLogin =  (e) => {
        e.preventDefault()
        axios.post('http://localhost:2700/login', {email, password})
        .then(result => {
            console.log(result)
            if(result.data === 'Success') {
                navigate('/dashboard')
            }
        }) 
        .catch(err => console.log(err))
    }
    return(
        <div className='d-flex bg-primary justify-content-center align-items-center vh-100'>

            {/* Signup form */}
            <div className='bg-white w-50 rounded p-4 border-2 '>
                <h2>Sign In</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <strong>
                            <label htmlFor='email' className="form-label float-sm-start">Email</label>
                        </strong>
                        <input type="text" className="form-control bg-light-subtle" id="inpEmail" placeholder="example@gmail.com"
                        onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div className="mb-3">
                        <strong>
                            <label htmlFor="" className="form-label float-sm-start">Password</label>
                        </strong>
                        <input type="text" className="form-control" id="inpPassword" placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </div>
                    <div className='d-grid gap-2'>
                        <button className='btn btn-outline-success btn-lg' type='submit'>Sign In</button>
                    </div> 
                    <p className=" text-center mt-2"> Or </p>
                    <div className='d-grid gap-2'>
                        <button className='btn btn-outline-primary btn-lg' type='submit'>Sign In with google</button>
                    </div>
                </form>

                <div className='container'>
                    <div className='row'>
                        <p className='col-6 mt-4'>Don't you have a account?</p>
                        <p className='col-2 mt-4'><Link to="/" className='icon-link-hover'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;