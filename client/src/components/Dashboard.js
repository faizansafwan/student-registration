import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function StudentList() {

    const [students, setStudents] = useState([
        {
            id: "01", name: 'Faizan', age: "23", status: "Active"
        }
    ])

    useEffect(() => {
        axios.get('http://localhost:2700/dashboard/')
        .then(result => setStudents(result.data))
        .catch(err => alert(err))
    }, []) 

    const deleteStudent = (id) => {
        axios.delete('http://localhost:2700/delete/'+id)
        .then(res => alert('Successfully deleted'))
        .catch(err => alert(err))
    }

    return (
        <div className="d-flex bg-body-secondary vh-100 justify-content-center align-item-center">
            <div className="w-50 p-2 mt-5 rounded bg-body">
                <Link to='/add' className="btn btn-outline-primary mb-1 float-end" >Add Student</Link>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Status</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student) => {
                                return (
                                    <tr>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.age}</td>
                                        <td>{student.status}</td>
                                        <td>
                                            <Link to={`/update/${student._id}`} className="btn btn-primary m-1">Update</Link>
                                            <button onClick={(e) => deleteStudent(student._id)} className="btn btn-success">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    
                    </tbody>
                </table>
            </div>
            
        </div>
        
    )
}

export default StudentList;