
import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Signup from "./components/pages/Signup";
import Navbar from "./components/layout/Navbar";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
// import Main from "./comp1/Main";
import {Link, Route, Routes} from 'react-router-dom';
//import Main from "./comp1/Main";

function App(props) {
  return (
    <div className='main-siri'>
      <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/users/:id' element={<User/>}/>
        <Route path='/users/AddUser' element={<AddUser/>}/>
        <Route path='/users/edit/:id' element={<EditUser/>}/>
        <Route path='/users/AddUser' element={<AddUser/>}/>
       
        <Route path='/users/User' element={<User/>}/>
      </Routes>
     
  </div>
  );
}

export default App;