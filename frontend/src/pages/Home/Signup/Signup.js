import React, { useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import auth from '../../../firebase.init';
import GoogleButton from 'react-google-button';
// import Login from '../Login/Login';
import { Link } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
  const navigate=useNavigate();
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //------------------------------------
  const [
    createSignUpWithEmailAndPassword,
    user,
    loading,
    error
  ] = useCreateUserWithEmailAndPassword(auth);
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }
  //----------------------------------------------

  const handleSubmit = async(e) => {
    if (!email || !password) {
      // Display error message or prevent sign-in action
      return;
    }
    e.preventDefault();
    console.log(fullName, userName, email, password);
      createSignUpWithEmailAndPassword(email, password);
     navigate('/');
     

  }

  return (
    <>
      <div className="signupConatiner">
        <div className="container">
            <div className="logoContainer">
              <img className='logo' src='https://png.pngtree.com/png-clipart/20230823/original/pngtree-spider-logo-template-vector-icon-illustration-design-picture-image_8298508.png' alt="" />
            </div>
          <div className="formContainer">
            <form className="form" onSubmit={handleSubmit}>
            <h1>Welcome To Spido-World</h1>
              <input type='text'
                className='@userName'
                placeholder='userName'
                onChange={(e) => setUserName(e.target.value)}
              />
              <input type='text'
                className='fullName'
                placeholder='fullName'
                onChange={(e) => setFullName(e.target.value)}
              />
              <input type='email'
                className='email'
                placeholder='Email id'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input type='password'
                className='password'
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <button className='login' type='submit'>Signup</button>
              </div>
              <hr />
                            <div className='google-button'>
                <GoogleButton className='g-btn'
                  type='light' />
              </div>
              <div className='another'>
            already have an account?
            <Link
              to='/' style={{
                textDecoration: 'none',
                color: 'skybule'
              }}><b className='ln'>Login</b></Link>
          </div>
          </form>

          </div>
          
        </div>

      </div>

    </>
  )
}
