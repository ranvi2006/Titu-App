import React, { useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import tituImage from '../../../assets/images/spidoImage.jpg';
import auth from '../../../firebase.init';
import GoogleButton from 'react-google-button';
import Login from '../Login/Login';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [userName,setUserName]=useState('');
    const [fullName,setFullName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    //------------------------------------
    const [
        createSignUpWithEmailAndPassword,
        user,
        loading,
        error
    ]=useCreateUserWithEmailAndPassword(auth);
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

    const handleSubmit=(e)=>
    {
e.preventDefault();
console.log(fullName,userName,email,password);
createSignUpWithEmailAndPassword(email,password);
    }

  return (
   <>
   <div className="signupConatiner">
    <div className="container">
        <img src={tituImage} alt='image'/>
    </div>
    <div className="formContainer">
              <BlurOnIcon/>
              <form onSubmit={handleSubmit}>
                <input type='text'
                className='userName'
                placeholder='userName'
                onChange={(e)=>setUserName(e.target.value)}
                />
                <input type='text'
                className='fullName'
                placeholder='fullName'
                onChange={(e)=>setFullName(e.target.value)}
                />
                <input type='email'
                className='email'
                placeholder='Email id'
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input type='password'
                className='password'
                placeholder='password'
                onChange={(e)=>setPassword(e.target.value)}
                />
                <div>
                    <button className='btn' type='submit'>submit</button>
                </div>
                <br />
                <div className='google-button'>
                     <GoogleButton  className='g-btn'
                     type='light'/>
                </div>
                <div className='another'>
                    already have an account..
                <Link 
                to='/login' style={{
                    textDecoration:'none',
                    color:'skybule'}}>login</Link>
                </div>
                 
              </form>
    </div>
   </div>
   
   </>
  )
}
