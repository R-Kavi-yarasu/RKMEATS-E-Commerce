import React, { useState } from 'react';
import './Login-Signup.css';
import { useNavigate } from 'react-router-dom';
import { API } from './APIcontext';
import axios from 'axios';
import Main from '../Home/Main';

export default function Login() {
  const navi = useNavigate();
  const loginApi = API();
  const [inpData, setInpData] = useState({
    Name: '',
    Password: ''
  })
  function handleInpChange(e) {
    const { name, value } = e.target;

    setInpData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios.get(`${loginApi}?Email=${inpData.Name}&Password=${inpData.Password}`)
    .then((id)=>{
      console.log(inpData);
      console.log(id.data);
    if(id.data[0].Email === inpData.Name && id.data[0].Password === inpData.Password){
      alert("Login")
      // navi()
      const list = document.getElementById("incorrect").classList
      list.add("no-show")
      list.remove("show")
    }
    else{
      alert("user name or password incorrect")  
      
    }
    }).catch((error) => {
      console.log(error);
      const list = document.getElementById("incorrect").classList
      list.add("show")
      list.remove("no-show")
    })
    
  }

  return (
    <div>
      <div className="nav-log mb-5">
      <Main />
      </div>
    <div id='login-main'>
      <div className="login p-5 mt-3 mb-5">
        <form action="" onSubmit={handleSubmit}>
          <h1 className='text-center mb-5 display-5 fw-3'>Login</h1>

          <label htmlFor="username" className='form-label mb-3 log-lab'>UserName</label>
          <input className='form-control form-control-lg' type="email" name="Name" id="username" value={inpData.Name} onChange={handleInpChange} placeholder='Enter your email' required />
          <br />
          <label htmlFor="password" className='form-label mb-3 log-lab'>Password</label>
          <input className='form-control form-control-lg w-100' type="password" minLength={8} name="Password" id="password" value={inpData.Password} onChange={handleInpChange} placeholder='password' required />
          <br />
          <p className="text-danger no-show" id='incorrect'>Username or Password is Incorrect.</p>
          <div className="d-flex mt-3 justify-content-between log-fs">
            <p className=' text-decoration-none text-secondary' onClick={()=>{navi('/forgetpassword')}}>Forgotten a password ?</p>
            <p className=" text-decoration-none text-secondary" onClick={() => { navi('/signup') }} > Sign up a new account</p>
          </div>
          <div className='text-center mt-3'>
            <button className='btn btn-dark w-50  log-btn' type="submit">Login</button>
          </div>

        </form>

      </div>
    </div>
    </div>
  )
}
