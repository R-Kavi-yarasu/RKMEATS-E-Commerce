import React from 'react'
import { Data } from './Data'
import { useCart } from 'react-use-cart'

export default function DryFish() {
  const {addItem} = useCart();
  return (
    <div>
            <div className="d-flex flex-wrap gap-5 mt-5 justify-content-center container">
      {
        Data.DryFishData.map((d) => (
          <div className=''>
            <div className="card" style={{width:"20rem"}}>
              <img src={d.img} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{d.name}</h5>
                  <p className="fw-light ">{d.pieces}</p>
                  <p className="text-secondary">{d.gms}</p>
                  <div className="d-flex justify-content-between align-items-center">
                  <p className="card-text fw-semibold">
                  &#8377; {d.price}
                  </p>
                  <button className='btn btn-danger w-50 rounded-pill' onClick={()=>addItem(d)}>Add</button>
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
