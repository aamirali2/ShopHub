import React, { useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { CartState } from "../context/Context";





const Chackout = () => {
  const [cod, setCod] = useState(false)

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    country: "",
    state: "",
    zip: ""

  })
  const {
    state: { cart },
    dispatch

  } = CartState();
  const history = useHistory()
  const { total } = useParams();


  const datahandler = (e) => {
    const name = e.target.name
    const value = e.target.value

    setData({ ...data, [name]: value, total })

  }

  const formHandler = (e) => {
    e.preventDefault()
    history.push('/payment', { data }, total)
    

  }
  const handleChange = () => {
    setCod(true);
  }

  return (
    <div className='container' >Chackout
      <form >
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">{cart.length}</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Product name</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Second product</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$8</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Third item</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">-$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${total}</strong>
              </li>
            </ul>

            <div className="card p-2">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code" />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary" >Redeem</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <div className="needs-valnameation" noValnameate="">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label >First name</label>
                  <input type="text" value={data.first} onChange={datahandler} className="form-control" name="firstName" placeholder="" required="" />

                </div>
                <div className="col-md-6 mb-3">
                  <label >Last name</label>
                  <input type="text" value={data.last} onChange={datahandler} className="form-control" name="lastName" placeholder="" required="" />

                </div>
              </div>
            </div>
            <div className="mb-3">
              <label >Email </label>
              <input type="email" value={data.email} onChange={datahandler} className="form-control" name="email" placeholder="you@example.com" />

            </div>

            <div className="mb-3">
              <label >Address</label>
              <input type="text" value={data.address} onChange={datahandler} className="form-control" name="address" placeholder="1234 Main St" required="" />

            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label >Country</label>
                <input type="text" value={data.country} onChange={datahandler} className="form-control" name="country" placeholder="India" required="" />

              </div>
              <div className="col-md-4 mb-3">
                <label >State</label>
                <input type="text" value={data.state} onChange={datahandler} className="form-control" name="state" placeholder="" required="" />

              </div>
              <div className="col-md-3 mb-3">
                <label >Zip</label>
                <input type="text" value={data.zip} onChange={datahandler} className="form-control" name="zip" placeholder="" required="" />

              </div>
            </div>
            <h4 className="mb-3">Payment</h4>
              <div className="d-block my-3">
                
               <input type='radio' checked={cod} onClick={()=>setCod(true)}/> :cod
               <input type='radio'  onClick={()=>setCod(false)}/> :payment
              </div>
            {cod ?
              <button className="btn btn-primary btn-lg btn-block mb-5" placeholder='pyment' type="submit" onClick={formHandler}>
                complete your order
              </button>
              : <button className="btn btn-primary btn-lg btn-block mb-5" placeholder='pyment' type="submit" onClick={formHandler}>
                Go for payment
              </button>
            }
          </div>
        </div>
      </form>
    </div>

  )
}

export default Chackout