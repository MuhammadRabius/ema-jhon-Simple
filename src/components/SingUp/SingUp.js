import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const SingUp = () => {
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const [confirmPassword,setCconfirmPassword]=useState('');
   const [error,setError]=useState('');

   const handleEmailBlur =event=>{
         setEmail(event.target.value);
   }
   const handlePasswordBlur =event=>{
         setPassword(event.target.value);
   }
   const handleConPassBlur =event=>{
         setCconfirmPassword(event.target.value);
   }
   
   
   const handleCreateUser=event=>{
         event.preventDefault();
         if(password !== confirmPassword){
               setError('Your Password did not Match')
         }
        
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