import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import auth from './../../firebase.init';


const SingUp = () => {
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const [confirmPassword,setConfirmPassword]=useState('');
   const [error,setError]=useState('');
   const navigate =useNavigate();

   const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth);

   const handleEmailBlur =event=>{
         setEmail(event.target.value);
   }
   const handlePasswordBlur =event=>{
         setPassword(event.target.value);
   }
   const handleConPassBlur =event=>{
         setConfirmPassword(event.target.value);
   }
   
   if(user){
     navigate('/login');
   }
   
   const handleCreateUser=event=>{
         event.preventDefault();
         if(password !== confirmPassword){
               setError('Your Password did not Match');
               return;
         }
         if(password.length<6){
                setError('Password contain atleast six digit');
                return;
         }

         createUserWithEmailAndPassword(email,password);
        
   }
   
      
      return (
            <div>
                  <div className='form-container'>
                  <div>
                    <h1 className='form-title'>Singup</h1>
                        <form onSubmit={handleCreateUser}>
                           <div className="input-group">
                              <label htmlFor="email">Email</label>
                              <input onBlur={handleEmailBlur} type="email" name="" placeholder='Please hit your email' required />
                           </div>

                           <div className="input-group">
                              <label htmlFor="password">Password</label>
                              <input onBlur={handlePasswordBlur} type="password" name="" placeholder='Please provide password' required />
                          </div>

                           <div className="input-group">
                              <label htmlFor="password">Conform Password</label>
                              <input onBlur={handleConPassBlur} type="password" name="" placeholder='Please provide password' required />
                          </div>
                              <p style={{color:'red'}}>{error}</p>
                          <input className='form-submit' type="submit" value="SingUp" />
                        </form>

                        <p>Already have an account? <Link className='form-link' to='/login'>Login</Link></p>
                  </div>
            </div>
            </div>
      );
};

export default SingUp;