import React from 'react'
import Main from '../Home/Main'
import Footer from '../Home/Footer/Footer'
import { useCart } from 'react-use-cart'

export default function Cart() {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <div>
      <div className="nav-cart">
        <Main />
      </div>
      {isEmpty ? <h1 className='fw-bold align-items-center d-flex justify-content-center m-5 p-5' style={{ height: "70vh" }}>Your cart is empty.</h1> :
        <div className="cart container">
          <div className="conform-order">
            <table className="table table-light table-hover mt-5">
              <tbody>
                <tr className='fs-5 text-uppercase'>
                  <th></th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Remove</th>
                </tr>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img src={item.img} style={{ height: '6rem' ,width: '8rem' }} alt='itemImg' className='rounded' />
                      </td>
                      <td className='pt-5'>{item.name}</td>
                      <td className='pt-5 fw-bold'>&#8377; {item.price}</td>
                      <td className='pt-5'>
                        <div className="btn-group" role="group">
                          <button type='button' className='btn btn-secondary px-3'
                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                          >-</button>
                          <button type='button' className='btn btn-outline-secondary px-3'>{item.quantity}</button>
                          <button type='button' className='btn btn-secondary px-3'
                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                      </td>
                      <td className='pt-5'>
                        <button className='btn btn-outline-dark ms-2'
                          onClick={() => removeItem(item.id)}
                        ><i class="bi bi-trash3"></i></button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="col-auto mx-auto d-flex justify-content-end">
            <h4>Total Price : &#8377; {cartTotal} </h4>
          </div>
          <div className="col-auto">
            <div className='d-flex justify-content-end'>
              <button className='btn btn-outline-secondary'
                onClick={() => emptyCart()}
              >Clear Cart <i class="bi bi-trash"></i></button>
              <button className='btn btn-outline-danger mx-3'><i className="bi bi-cart-fill "></i> Proceed to Delivery</button>
            </div>
          </div>
        </div>
      }
      <div className="nav-footer bg-dark">
        <Footer />
      </div>
    </div >
  )
}
