import React,{useState} from 'react';
import { useLocation } from "react-router-dom";
import './payment.css';
import { CartState } from "../context/Context";




const Payment = () => {
    const {
        state: { cart },
        dispatch,
      } = CartState();
      console.log(cart)
      const [cod, setCod] = useState(true)
      
 
  const location = useLocation()
  console.log(location)
  
  
  return (
    <>
    <div className="container">
        <div className="brand-section">
            <div className="row">
                <div className="col-6">
                    <h1 className="text-white">ShopHub</h1>
                </div>
                <div className="col-6">
                    <div className="company-details">
                        <p className="text-white">ShopHub Pvt Ltd</p>
                        <p className="text-white">One Indiabulls Center,Tower 1</p>
                        <p className="text-white">18th Floor,Jupiter mill Compound 841</p>
                        <p className="text-white">Mumbai 400 013</p>
                        <p className="text-white">GSTIN : 27ABC5FD5JKSK7</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="body-section">
            <div className="row">
                <div className="col-6">
                    <h2 className="heading">Bill details</h2>
                    <p className="sub-heading">Invoice No.: 001</p>
                    <p className="sub-heading">Tracking No. fabcart2025 </p>
                    <p className="sub-heading">Order Date: 20-20-2021 </p>
                    
                </div>
                <div className="col-6">
                    <h2 className="heading">Bill to,</h2>
                    <p className="sub-heading"> {location.state.data.firstName} </p>
                    <p className="sub-heading">state: {location.state.data.state}  </p>
                    <p className="sub-heading">Address: {location.state.data.address}  </p>
                    <p className="sub-heading">Phone Number:{location.state.data.country}  </p>
                    <p className="sub-heading">City,State,Pincode:  </p>
                </div>
            </div>
        </div>

        <div className="body-section">
            <h3 className="heading">Ordered Items</h3>
            <br/>
            <table className="table-bordered">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th className="w-20">Price</th>
                        <th className="w-20">Quantity</th>
                        <th className="w-20">Grandtotal</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                    {
                            cart.map((item)=>{
                                return(
                                    <div key={item.id}>
                                      <td className="w-20">{item.name}</td>                     
                                      <td className="w-20">{item.price}</td>
                                      <td className="w-20">{item.qty}</td>
                                      <td className="w-20">{item.price}</td>
                                    </div>
                                )
                            })
                      
}
                    </tr>
                    <tr>
                        <td colSpan="3" className="text-right"></td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td colSpan="3" className="text-right">Total</td>
                        <td>{location.state.data.total} </td>
                    </tr>
                   
                   
                </tbody>
            </table>
            <br/>
            {
                !cod ? 
            <h3 className="heading">Payment Status: Paid</h3>:
            <h3 className="heading">Payment Mode: Cash on Delivery</h3>
}
        </div>

        <div className="body-section">
            <p>&copy; Copyright 2021 - ShopHub. All rights reserved. 
                <a href="https://www.fundaofwebit.com/" className="float-right">www.fundaofwebit.com</a>
            </p>
        </div>      
    </div>    

    </>
    
  )
}

export default Payment