import React from 'react';
import Main from './Main';
import Footer from './Footer/Footer';
import { Link } from 'react-router-dom';

export default function Contect() {
  return (
    <div>
      <div className="nav-contect">
        <Main />
      </div>
      <div className="contect-main mt-5">
        <h1 className="text-danger text-center fw-bold" style={{ letterSpacing: '3px' }}>
          CONTACT US
        </h1>
      </div>
      <div className="contect-content d-block d-lg-flex justify-content-evenly my-5 py-5">
        <div className="enqury  text-center mt-lg-2 ">
          <span className="call-icon display-1 text-secondary">
            <i class="bi bi-telephone"></i>
          </span>
          <h2 className='my-3 fw-bold' id="head">Franchise <br /> Enquiries</h2>
          <Link to={"tel:+919876543298"} className='text-decoration-none text-dark'>
            <h6>+91 9876543298</h6>
          </Link>
        </div>
        <div className="contect-number text-center mt-5 pt-5 mt-lg-0 pt-lg-0">
          <span className="call-icon display-1 text-secondary">
            <i class="bi bi-telephone-fill"></i>
          </span>
          <h2 className='my-3 fw-bold' id="head">Customer <br /> Care</h2>
          <Link to={"tel:+918796543279"} className='text-decoration-none text-dark'>
            <h6>+91 8796543279</h6>
          </Link>
        </div>
        <div className="Email text-center mt-5 pt-5 mt-lg-0 pt-lg-0">
          <span className="call-icon display-1 text-secondary">
            <i class="bi bi-envelope"></i>
          </span>
          <h2 className='my-3 fw-bold' id="head">Mail your <br />queries</h2>
          <Link to={"mailto:rkmeats@kavigroup.in"} className='text-decoration-none text-dark'>
            <h6>rkmeats@kavigroup.in</h6>
          </Link>
        </div>
      </div>
      <div className="cont-footer bg-dark">
        <Footer />
      </div>
    </div>
  )
}
