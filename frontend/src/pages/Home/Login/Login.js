import React, { useState  } from 'react'
import tituImage from '../../../assets/images/spidoImage.jpg'
import BlurOnIcon from '@mui/icons-material/BlurOn';
import {   useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Login.css';


export default function Login() {

    const [email ,setEmail]=useState('');
    const [password,setPassword]=useState('');
    // const [error,setError]=useState('');


    //-----------------------------------
  const [ 
    SignInWithEmailAndPassword,
    user,
    loading,
    error
    
]
=useSignInWithEmailAndPassword(auth);
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

    const handleSubmit = e=>
    {
e.preventDefault();
console.log(email , password);
SignInWithEmailAndPassword(email,password);
    }
    return (
        <>
            <div className="loginContainer">
              {/* g1 */}
                <div className="container">
                    <img clasName='mainImage'  src={tituImage} alt='/' />
                </div> 
                {/* g2 */}
                <div className="formContainer">
                    <BlurOnIcon />
                    <h4>Raju</h4>
                    <form onSubmit={handleSubmit}>
                        
                        <input type="email" 
                        className='email'
                        placeholder='Email address'
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                        
                        <input type="password" 
                        className="pasward"
                        placeholder='password'
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                        <div>
                            <button type="submit" className='btn'>login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
