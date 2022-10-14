// import { useState } from 'react';
// import './signup.css'
// export default function Signup() {

// // States for registration
// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// // States for checking the errors
// const [submitted, setSubmitted] = useState(false);
// const [error, setError] = useState(false);

// // Handling the name change
// const handleName = (e) => {
// setName(e.target.value);
// setSubmitted(false);
// };

// // Handling the email change
// const handleEmail = (e) => {
// setEmail(e.target.value);
// setSubmitted(false);
// };

// // Handling the password change
// const handlePassword = (e) => {
// setPassword(e.target.value);
// setSubmitted(false);
// };

// // Handling the form submission
// const handleSubmit = (e) => {
// e.preventDefault();
// if (name === '' || email === '' || password === '') {
// setError(true);
// } else {
// setSubmitted(true);
// setError(false);
// }
// };

// // Showing success message
// const successMessage = () => {
// return (
// <div
// className="success"
// style={{
// display: submitted ? '' : 'none',
// }}>
// <h1>User {name} successfully registered!!</h1>
// </div>
// );
// };

// // Showing error message if error is true
// const errorMessage = () => {
// return (
// <div
// className="error"
// style={{
// display: error ? '' : 'none',
// }}>
// <h1>Please enter all the fields</h1>
// </div>
// );
// };

// return (
// <div className="form">
// <div>
// <h1>User Registration</h1>
// </div>

// {/* Calling to the methods */}
// <div className="messages">
// {errorMessage()}
// {successMessage()}
// </div>

// <form>
// {/* Labels and inputs for form data */}
// <label className="label">Name</label>
// <input onChange={handleName} className="input"
// value={name} type="text" />

// <label className="label">Email</label>
// <input onChange={handleEmail} className="input"
// value={email} type="email" />

// <label className="label">Password</label>
// <input onChange={handlePassword} className="input"
// value={password} type="password" />

// <button onClick={handleSubmit} className="btn" type="submit">
// Submit
// </button>
// </form>
// </div>
// );
// }

import React from "react";

const Signup = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Signup Page</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          {/* <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
             {/* <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>  */}
          {/* </div> */} 
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;