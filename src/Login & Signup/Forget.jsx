import React, { useState } from 'react'
import { API } from './APIcontext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Forget() {
  const api = API()
  const [email, setEmail] = useState('');
  const [newpass, setNewPass] = useState('');
  const navi = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();

    axios.get(`${api}?Email=${email}`)
      .then((id) => {
        console.log(id.data);
        localStorage.setItem('_id',id.data[0].id)
        const list = document.getElementById("incorrect").classList
        list.add("no-show")
        list.remove("show")
        const getpass = document.getElementById("get").classList
        getpass.add("no-show")
        getpass.remove("show")
        const updatepass = document.getElementById("update").classList
        updatepass.add("show")
        updatepass.remove("no-show")
      }).catch((error) => {
        console.log(error);
        const list = document.getElementById("incorrect").classList
        list.add("show")
        list.remove("no-show")
      })
  }

  function handleUpdate(e) {
    e.preventDefault();
    const id = localStorage.getItem('_id')
    axios.put(`${api}/${id}`, {Password:newpass})
      .then(() => {
        alert("updated")
        localStorage.clear();
        navi('./login')
      }).catch((error) => {
        console.log(error);
      })
  }
  return (
    <div className='' id='login-main'>
      <div className="forget px-5 py-4 show">
        <h1 className='text-center mb-4 display-5 fw-3 mb-5'>Forget Password</h1>
        <form action="" onSubmit={handleSubmit} id='get'>
          <p></p>
          <label htmlFor="forinp" className='form-label fs-5 mt-2 mb-3'>Please enter your email address to search for your account.</label>
          <input type="text" name="Password" className='form-control form-control-lg' value={email}
            onChange={(e) => { setEmail(e.target.value) }} placeholder='Email address' id="forpass" required/>
          <p className='text-danger mt-3 no-show' id='incorrect'>Your search did not return any results. Please try again with correct email address.</p>
          <div className='text-center mt-5'>
            <button className='btn btn-dark w-50 sig-btn' type="submit">Search</button>
          </div>
        </form>
        <div className="forgetpage2 no-show" id='update'>
          <form action="" onSubmit={handleUpdate}>
            <label htmlFor="forpass2" className='form-label fs-5 mt-2 mb-3'>Enter new Password</label>
            <input type="text" name="Password" className='form-control form-control-lg' value={newpass}
              onChange={(e) => { setNewPass(e.target.value) }} placeholder='password' id="forpass2" minLength={8} required />
            <div className='text-center mt-5'>
              <button className='btn btn-dark w-50 sig-btn' type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
