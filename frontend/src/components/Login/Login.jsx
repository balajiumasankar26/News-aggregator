import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { MdOutlinePassword, MdEmail } from "react-icons/md";
import { validateRegister } from './validlog';

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [action, setAction] = useState('Signup');

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/home')
    let response;
    try {
      response = await validateRegister({values,action});
      if (response.data.error) {
        console.error("Error:", response.message);
      } else if(response.status==200){
        alert(response.data.message);
      }
      else{
        alert(response.data.message);
        navigate("/home");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className='LoginPage w-100'>
      <div className='container w-50 h-100'>
        <div className='Header'>
          <h4 className='fw-bold'>{action}</h4>
          <div className='Underline'></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='inputs'>
            {action === "Signup" && (
              <div className='Name input'>
                <div className='w-100 d-flex align-items-center p-5 pt-0 pb-0'>
                  <FaUser size={20} />
                  <input type='text' name="username" placeholder='Name' required onChange={handleInput} />
                </div>
              </div>
            )}
            <div className='Email input'>
              <div className=' w-100 d-flex align-items-center p-5 pt-0 pb-0'>
                <MdEmail size={20} />
                <input type='email' placeholder='Email@gmail.com' onChange={handleInput} name='email' required />
              </div>
            </div>
            <div className='Password input'>
              <div className='w-100 d-flex align-items-center p-5 pt-0 pb-0'>
                <MdOutlinePassword />
                <input type='password' placeholder='Password' onChange={handleInput} name='password' required />
              </div>
            </div>
          </div>

          <div className='forgot' onClick={() => setAction(action === 'Signup' ? 'Login' : 'Signup')}>
            <p>
              {action === 'Login' ? "Don't have an account? " : 'Already have an account? '}
              <span>{action === 'Login' ? 'Create Account' : 'Login'}</span>
            </p>
          </div>

          <button type="submit" className='Signup fw-bold bu'>
            {action === 'Signup' ? 'Sign up' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
