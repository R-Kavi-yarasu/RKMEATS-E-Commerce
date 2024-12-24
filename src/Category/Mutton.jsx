import React from 'react'
import { Data } from './Data'
import { useCart } from 'react-use-cart'

export default function Muttton() {
  const {addItem} = useCart();
  return (
    <div >
      <div className="d-flex flex-wrap gap-5 mt-5 justify-content-center container">
      {
        Data.MuttonData.map((m) => (
          <div className=''>
            <div className="card" style={{width:"20rem"}}>
              <img src={m.img} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{m.name}</h5>
                  <p className="fw-light ">{m.pieces}</p>
                  <p className="text-secondary">{m.gms}</p>
                  <div className="d-flex justify-content-between align-items-center">
                  <p className="card-text fw-semibold">
                  &#8377; {m.price}
                  </p>
                  <button className='btn btn-danger w-50 rounded-pill' onClick={()=>addItem(m)}>Add</button>
                  </div>
                </div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}
