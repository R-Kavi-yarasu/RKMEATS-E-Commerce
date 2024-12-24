import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Main from './Main';
import Footer from './Footer/Footer';

//Images
import Himg1 from '../assests/HomePics/Chiken.jpg'
import Himg2 from '../assests/HomePics/fresh-meat.jpg'
import CatChicken from '../assests/HomePics/Chiken-category.webp'
import CatMutton from '../assests/HomePics/Mutton.webp'
import CatFish from '../assests/HomePics/Fish-category.jpg'
import CatEgg from '../assests/HomePics/eggs-category.jpg'
import CatDryfish from '../assests/HomePics/DryFish-category.jpg'
import CatPickle from '../assests/HomePics/Pickle-category.webp'


export default function Home() {
  const videoRef = useRef();
  const buttonRef = useRef();

  const handleControl = () =>
    videoRef.current.paused
      ? (videoRef.current.play(), (buttonRef.current.innerHTML = "Pause"))
      : (videoRef.current.pause(), (buttonRef.current.innerHTML = "Play"));

  return (
    <div>
      <div className="home-main">
        <Main />
      </div>
      <div className='home-1'>
        <video autoPlay muted loop id="myVideo" ref={videoRef}>
          <source src="v-1.mp4" type="video/mp4" />
        </video>
        <div className="content">
          <h1 className='content-head fw-bold'>Clever cuts and flavors that'll make you say, <span className='fw-bolder text-danger'>"Brilliant!"</span> </h1>
          <p className='ps-2 content-subhead my-4'>
            Welcome to RK Meats, where every cut tells a story of quality, flavor, and care. Our premium selection of meats is handpicked to bring the best to your table—whether you're grilling, roasting, or cooking up a family favorite. From succulent steaks to tender poultry and specialty cuts, we take pride in delivering freshness and excellence in every bite. Experience meats that inspire your culinary creations and make every meal a masterpiece. Discover why our customers call us the home of "clever cuts and brilliant flavors."
          </p>
          <button ref={buttonRef} id="myBtn" className='btn' onClick={handleControl}>
            Pause
          </button>
        </div>
      </div>
      <div id="home-3 row container">
        <div className="d-block d-sm-flex align-items-center flex-wrap">
          <ul className='col-lg-3 col-md-6 col-12 text-center' style={{ listStyle: "none" }}>
            <li className='text-danger fs-2 '><i class="bi bi-flag"></i></li>
            <li className='fw-bold'><p className='fw-bold fs-4'>Farm to <br /> Fork</p></li>
          </ul>
          <ul className='col-lg-3 col-md-6 col-12 text-center' style={{ listStyle: "none" }}>
            <li className='text-danger fs-2 '><i class="bi bi-gem"></i></li>
            <li className='fw-bold'><p className='fw-bold fs-4'>Best Management <br /> Practices</p></li>
          </ul>
          <ul className='col-lg-3 col-md-6 col-12 text-center' style={{ listStyle: "none" }}>
            <li className='text-danger fs-2 '><i class="bi bi-shield-shaded"></i></li>
            <li className='fw-bold'><p className='fw-bold fs-4'>Best & Healthy <br /> Chicken</p></li>
          </ul>
          <ul className='col-lg-3 col-md-6 col-12 text-center' style={{ listStyle: "none" }}>
            <li className='text-danger fs-2 '><i class="bi bi-truck"></i></li>
            <li className='fw-bold'><p className='fw-bold fs-4'>Home<br />Delivery</p></li>
          </ul>
        </div>
      </div>
      <div className="home-2 container-lg">
        <div className="home2-img">
          <img src={Himg1} alt="Img" />
          <img src={Himg2} alt="Img" />
        </div>
        <div className="home2-content">
          <h5 id="os" className='text-danger mb-3'>OUR STORY</h5>
          <h2 className="home2-content-head fw-bold text-uppercase">
            RK Meats is the brand of Kavi Group
          </h2>
          <p className="home2-sub-head my-3 text-secondary">
            RK Meats, established in 2024 by the KAVI Group of Companies, is committed to providing high-quality,
            healthy meats for retail and wholesale customers. With a farm-to-fork approach, we ensure freshness,
            hygiene, and exceptional taste in every product. Our streamlined processes guarantee consistency and
            reliability in every order. Whether for families or businesses, RK Meats delivers trust, nutrition,
            and unmatched quality to meet all your meat needs.
          </p>
          <Link to={"/about"} >
            <button className='btn btn-danger mt-2 col-6 col-sm-4 col-md-4 p-2'>View More</button>
          </Link>
        </div>
      </div>
      <div className="home-3 mt-5 container">
        <div className="home3-head text-center mt-2">
          <h2 className='fs-3  text-danger'>Our Category</h2>
          <p className='fs-2'>Discover Premium Choices for Every Taste</p>
        </div>
        <div className="categorys my-5">
          <div className="row">
            <Link className=" text-decoration-none text-dark col-lg-4 col-sm-6 text-center mt-lg-5" id="home3-img" to={'/meats'}>
              <img src={CatChicken} alt="" id="home3-cat-img" />
              <p className="fs-6 fs-lg-5 fw-bold mx-2 ">Chicken</p>
            </Link>
            <Link className="text-decoration-none text-dark col-lg-4 col-sm-6 text-center mt-lg-5" id="home3-img" to={'/meats'}>
              <img src={CatMutton} alt="" id="home3-cat-img" />
              <p className="fs-6 fs-lg-5 fw-bold mx-2 ">Mutton</p>
            </Link>
            <Link className="text-decoration-none text-dark col-lg-4 col-sm-6 text-center mt-lg-5" id="home3-img" to={'/meats'}>
              <img src={CatFish} alt="" id="home3-cat-img" />
              <p className="fs-6 fs-lg-5 fw-bold mx-2 ">Sea Food</p>
            </Link>
            <Link className="text-decoration-none text-dark col-lg-4 col-sm-6 text-center mt-lg-5" id="home3-img" to={'/meats'}>
              <img src={CatDryfish} alt="" id="home3-cat-img" />
              <p className="fs-6 fs-lg-5 fw-bold mx-2 ">Dry Fish</p>
            </Link>
            <Link className="text-decoration-none text-dark col-lg-4 col-sm-6 text-center mt-lg-5" id="home3-img" to={'/meats'}>
              <img src={CatEgg} alt="" id="home3-cat-img" />
              <p className="fs-6 fs-lg-5 fw-bold mx-2 ">Egg</p>
            </Link>
            <Link className="text-decoration-none text-dark col-lg-4 col-sm-6 text-center mt-lg-5" id="home3-img" to={'/meats'}>
              <img src={CatPickle} alt="" id="home3-cat-img" />
              <p className="fs-6 fs-lg-5 fw-bold mx-2 ">Pickle</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-dark">
        <Footer />
      </div>
    </div>
  )
}
