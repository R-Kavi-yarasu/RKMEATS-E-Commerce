import React from 'react'
import Main from '../Home/Main'
import Footer from '../Home/Footer/Footer'

export default function Delivery() {
  return (
    <div>
      <div className="D-header">
        <Main />
      </div>
      <div className="Delivery-summary " style={{height:"70vh"}}>

      </div>
      <div className="D-footer bg-dark">
        <Footer />
      </div>
    </div>
  )
}
