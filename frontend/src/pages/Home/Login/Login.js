import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Login.css';import GoogleButton from 'react-google-button';
// import Login from '../Login/Login';
import { Link } from 'react-router-dom';


export default function Login() {
  const navigate=useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error,setError]=useState('');


  //-----------------------------------
  const [
    SignInWithEmailAndPassword,
    user,
    loading,
    error

  ]
    = useSignInWithEmailAndPassword(auth);
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
  //---------------------------------

  const handleSubmit =async (e) => {
    if (!email || !password) {
      // Display error message or prevent sign-in action
      return;
    }
    e.preventDefault();
    console.log(email, password);
     await SignInWithEmailAndPassword(email, password);
     navigate('/home');

  }
  return (
    <>
      <div className="loginContainer">
        {/* g1 */}
        <div className="container">
          <div className="logoContainer">
            <img className='logo' src='https://png.pngtree.com/png-clipart/20230823/original/pngtree-spider-logo-template-vector-icon-illustration-design-picture-image_8298508.png' alt="" />
          </div>
          {/* <img className='mainImage'  src={tituImage} alt='/' /> */}

          <div className="formContainer">

            <form className='form' onSubmit={handleSubmit}>
              <h1>Welcome Spido-Family</h1>

              <input type="email"
                className='email'
                placeholder='Email address'
                onChange={(e) => setEmail(e.target.value)}
              />

              <input type="password"
                className="pasward"
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
              />
             <button  type="submit" className='login'>login</button>
             
              <div className='google-button'>
                <GoogleButton className='g-btn'
                  type='light' />
              </div>
              <div className='another'>
             Donn't have an account?
            <Link
              to='/Signup' style={{
                textDecoration: 'none',
                color: 'skybule'
              }}><b className='ln'>Signup</b></Link>
          </div>

            </form>
          </div>
        </div>
        {/* g2 */}
      </div>
    </>
  )
}
