import React from 'react'
import Main from './Main'
import Footer from './Footer/Footer'
// import aboutPic1 from '../assests/AboutPics/farm-fresh.png'
import aboutPic2 from '../assests/AboutPics/U-should-know.png'
import cock from '../assests/AboutPics/a5.jpg'
import goat from '../assests/AboutPics/a2.gif'
import fish from '../assests/AboutPics/a3.jpg'
import seaFood from '../assests/AboutPics/a4.webp'

export default function About() {
  return (
    <div>
      <div className="nav-about">
        <Main />
      </div>
      <div className="about-main container mt-5">
        <h1 className="text-danger text-center fw-bold" style={{ letterSpacing: '3px' }}>
          ABOUT US
        </h1>
        <div className="about-content mt-5 pt-3 container">
          <div className="para1 d-block d-lg-flex justify-content-between">
            <img src={fish} alt="Nothing" className='d-none d-lg-block' height={"250px"} width={"250px"} />
            <p className='' id='para-about'>At RK Meats, established in 2024 by the KAVI Group of Companies,
              we are redefining the standards of meat sourcing and delivery.
              With a steadfast commitment to quality, hygiene, and customer
              satisfaction, we bring you a wide range of premium meats including chicken,
              mutton, seafood, dry fish, pickles, and eggs. Rooted in a farm-to-fork philosophy,
              we prioritize freshness, ensuring every product reaches you at its peak quality.
              Our emphasis on organic sourcing and ethical farming practices reflects our dedication
              to health-conscious customers who value nutrition and sustainability.</p>
          </div>
          <br /> <br />

          <div className="para2 d-flex justify-content-between">
            <p className='  ' id='para-about'>
              RK Meats is designed to meet the needs of families and businesses alike,
              delivering trust and exceptional taste in every bite. Our operations are
              guided by best management practices that emphasize efficiency, consistency,
              and reliability. From carefully selecting our sources to maintaining the highest
              standards of hygiene, we go above and beyond to guarantee an unparalleled experience
              for our customers.
            </p>
            <img src={cock} alt="Goat" height={'250px'} width={'300px'} className='d-none d-lg-block'/>
          </div>
          <br /> <br />

          <div className="para3 d-flex justify-content-between">
            <img src={goat} alt="fish" className='d-none d-lg-block' height={'250px'} width={'250px'}/>
            <p className='  ' id='para-about'>
              With quick delivery services tailored to your convenience, RK Meats is more than
              just a supplier—we are your partner in providing the best for your table. Whether it’s a
              family gathering or a restaurant’s menu, our products ensure your meals are packed
              with flavor and nutrition. Trust RK Meats to deliver not only the finest quality meats
              but also the promise of excellence, making every purchase a step toward healthier and happier living.
            </p>
          </div>
          <br /> <br />

          <div className="para4 d-flex justify-content-between">
            <p className='  ' id='para-about'>
              Choose RK Meats for freshness, organic options, quick delivery, and the assurance of best management
              practices. Experience the difference of a company committed to your well-being, one order at a time.
            </p>
            <img src={seaFood} alt="seafood" className='d-none d-lg-block' height={'250px'} width={'300px'}/>
          </div>
          <br /> <br />

        </div>
        <div className="bc-img mt-3 ">
          <img src={aboutPic2} alt="BackgroundImage" />
        </div>
      </div>
      <div className="footer bg-dark">
        <Footer />
      </div>
    </div>
  )
}
