
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddStudents from './components/AddStudent';
import Signup from './components/Signup';
import Login from './components/Login';
import StudentList from './components/Dashboard';
import UpdateStudent from './components/UpdateStudent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<StudentList />} />    
        <Route path='/add' element={<AddStudents />} />
        <Route path='/update/:ids' element={<UpdateStudent />} />
      </Routes>
    </BrowserRouter>
    
      
        
  
    
  );
}

export default App;
