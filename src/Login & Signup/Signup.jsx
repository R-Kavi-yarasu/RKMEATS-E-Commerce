import axios from 'axios';
import React, { useState } from 'react'
// import Login from './Login'
import { useNavigate } from 'react-router-dom'
import { API } from './APIcontext';
import Main from '../Home/Main';


export default function Signup() {

  const [inpData, setInpData] = useState({
    Name: '',
    Email: '',
    Password: ''
  })
  const navi = useNavigate();
  const signApi = API();

  function handleInpChange(e) {
    const { name, value } = e.target;

    setInpData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    axios.post(signApi, inpData)
      .then(() => {
        alert('data Stored')
        setInpData({
          Name: '',
          Email: '',
          Password: ''
        })
        navi('/login')
      }).catch((error) => {
        console.log(error);
      })
  }


  return (
    <div>
      <Main />
      <div id='login-main'>
        <div className="signup px-5 py-4 mt-5 mb-5">
          <form action="" onSubmit={handleSubmit}>
            <h1 className='text-center mb-4 display-5 fw-3'>Sign Up</h1>

            <label htmlFor="name" className='form-label mb-3 sig-lab'>Full Name</label>
            <input className='form-control' type="text" value={inpData.Name} onChange={handleInpChange} name="Name" id="username" placeholder='Name' required />
            <br />
            <label htmlFor="email" className='form-label mb-3 sig-lab'>E-mail</label>
            <input className='form-control' type="email" value={inpData.Email} onChange={handleInpChange} name="Email" id="email" placeholder='Email' required />
            <br />
            <label htmlFor="password" className='form-label mb-3 sig-lab'>Password</label>
            <input className='form-control' type="password" value={inpData.Password} onChange={handleInpChange} name="Password" id="password" minLength={8} placeholder='Password' required />
            <br />
            <div className='text-center mt-3'>
              <button className='btn btn-dark w-50 sig-btn' type="submit">Sign Up</button>
            </div>
            <div className="text-center">
              <p className='text-secondary mt-2'>Already have an account ? <span className="text-primary log-cur" onClick={() => { navi('/login') }}> Log In.</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
