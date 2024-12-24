import React from 'react'
import { Link } from 'react-router-dom'
import footerimg from './footerpic.png'
export default function Footer() {
  return (
    <div>
      <div className='Footer mt-5 pt-3 bg-dark d-block d-md-flex justify-content-evenly'>
        <div className="mt-5" id="our-brand">
          <h4 className="footer-head text-danger ms-4 fw-bold">OUR BRAND</h4>
          <ul className="text-light mt-3" style={{ listStyle: "none", textDecoration: 'none' }}>
            <Link className='text-decoration-none text-white-50'>
              <li>
                <img src={footerimg} alt="" height={"100px"} width={"120px"} />
              </li>
            </Link>
          </ul>
        </div>
        <div className="mt-5" id="company">
          <h4 className="footer-head text-danger ms-4 fw-bold">COMPANY</h4>
          <ul className="text-light mt-3" style={{ listStyle: "none", textDecoration: 'none' }}>
            <Link className='text-decoration-none text-white-50' to={'/privacypolicy'}><li>Privacy Policy</li></Link>
            <Link className='text-decoration-none text-white-50'to={'/termsandcondition'}><li>Terms And Conditions</li></Link>
            <Link className='text-decoration-none text-white-50'><li>Help & Support</li></Link>
          </ul>
        </div>
        <div className="mt-5" id="links">
          <h4 className="footer-head text-danger ms-4 fw-bold">LINKS</h4>
          <ul className="text-light mt-3" style={{ listStyle: "none", textDecoration: 'none' }}>
            <Link className='text-decoration-none text-white-50' to={"/"}><li>Home</li></Link>
            <Link className='text-decoration-none text-white-50' to={"/about"}><li>About</li></Link>
            <Link className='text-decoration-none text-white-50' to={"/meats"}><li>Our Category
              {/* <ul className="text-light" style={{ listStyle: "none", textDecoration: 'none' }}>
                <Link className='text-decoration-none text-white-50'><li><i class="bi bi-chevron-right"></i>Chicken</li></Link>
                <Link className='text-decoration-none text-white-50'><li><i class="bi bi-chevron-right"></i>Mutton</li></Link>
                <Link className='text-decoration-none text-white-50'><li><i class="bi bi-chevron-right"></i>Sea Food</li></Link>
                <Link className='text-decoration-none text-white-50'><li><i class="bi bi-chevron-right"></i>Dry Fish</li></Link>
                <Link className='text-decoration-none text-white-50'><li><i class="bi bi-chevron-right"></i>Egg</li></Link>
                <Link className='text-decoration-none text-white-50'><li><i class="bi bi-chevron-right"></i>Pickle</li></Link>
              </ul> */}
            </li></Link>
            <Link className='text-decoration-none text-white-50' to={"/contect"}><li>Contact Us</li></Link>
            <Link className='text-decoration-none text-white-50'><li>Feedback</li></Link>
          </ul>
        </div>
        <div className="mt-5" id="getintouch">
          <h4 className="footer-head text-danger ms-4 fw-bold">GET IN TOUCH</h4>
          <ul className="justify-content-lg-start justify-content-center text-light d-flex flex-wrap gap-lg-3" style={{ listStyle: "none", textDecoration: 'none' }}>
            <Link className='col-5 col-md-3 col-lg-2 text-decoration-none text-white-50'>
              <li className='footer-git'>
                <i class="bi bi-facebook"></i>
              </li></Link>
            <Link className='col-5 col-md-3 col-lg-2 text-decoration-none text-white-50'>
              <li className='footer-git'>
                <i class="bi bi-twitter-x"></i>
              </li></Link>
            <Link className='col-5 col-md-3 col-lg-2 text-decoration-none text-white-50'>
              <li className='footer-git'>
                <i class="bi bi-instagram"></i>
              </li></Link>
            <Link className='col-5 col-md-3 col-lg-2 text-decoration-none text-white-50'>
              <li className='footer-git'>
                <i class="bi bi-envelope"></i>
              </li></Link>
          </ul>
        </div>
      </div>
      <hr className='text-secondary' />
      <div className="copy-rights  text-center">
        <span className='text-secondary'>
          All rights reserved |
          <span className="text-danger"> Kavi Group </span>
          <span className='fs-5'>&copy; </span>
          2024 | Developed by
          <span className="text-danger"> Kaviyarasu </span>
        </span>
      </div>
    </div>
  )
}
