import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
      return (
            <div className='form-container'>
                  <div>
                    <h1 className='form-title'>Login</h1>
                        <form action="">
                           <div className="input-group">
                              <label htmlFor="email">Email</label>
                              <input type="email" name="" placeholder='Please hit your email' required />

                           </div>
                           <div className="input-group">
                              <label htmlFor="password">Password</label>
                              <input type="password" name="" placeholder='Please provide password' required/>
                          </div>
                          <input className='form-submit' type="submit" value="Login" />
                        </form>

                        <p>New to Ema-John? <Link className='form-link' to='/singup'>Create an Account</Link></p>
                  </div>
            </div>
      );
};

export default Login;