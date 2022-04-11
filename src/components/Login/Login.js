import React from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import auth from './../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
      const [email,setEmail]=useState('');
      const [password,setPassword]=useState('');
      const [error,setError]=useState('');
      const navigate =useNavigate();
      const [signInWithEmailAndPassword,
    user,loading]=useSignInWithEmailAndPassword(auth);

      const handleEmailBlur =event=>{
         setEmail(event.target.value);
           }
      const handlePasswordBlur =event=>{
         setPassword(event.target.value);
         }
         if(user){
               navigate('/shop')
         }
      const handleUser=event=>{
         event.preventDefault();
         signInWithEmailAndPassword(email,password)
        
   }


      return (
            <div className='form-container'>
                  <div>
                    <h1 className='form-title'>Login</h1>
                        <form onSubmit={handleUser} >
                           <div className="input-group">
                              <label htmlFor="email">Email</label>
                              <input onBlur={handleEmailBlur} type="email" name="" placeholder='Please hit your email' required />

                           </div>
                           <div className="input-group">
                              <label htmlFor="password">Password</label>
                              <input onBlur={handlePasswordBlur} type="password" name="" placeholder='Please provide password' required/>
                          </div>
                          <p>{error?.massage}</p>
                          {
                                loading && <p>Loading.....</p>
                          }
                          <input className='form-submit' type="submit" value="Login" />
                        </form>

                        <p>New to Ema-John? <Link className='form-link' to='/singup'>Create an Account</Link></p>
                  </div>
            </div>
      );
};

export default Login;