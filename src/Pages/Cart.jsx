import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
function Cart() {
  return (
    <>
      <Header/>
      <div className='container my-5'>
        <h1 className='pt-5 text-success fw-bold'>Cart</h1>
  
        <div className='row'>
  
          <div className="col-lg-8 border shadow">
  
            <table className='table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>...</th>
                </tr>
              </thead>
  
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Perfume</td>
                  <td><img style={{ height: "50px", width: "50px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_-8JRcyc5Hf9jzrXfsjSvWVNxXcpbOfA5wR8tkrbfeA&s=10" alt="" /></td>
                  <td>
                    <div className='d-flex'>
                      <button className='btn fs-1'>-</button>
                      <input style={{ width: "45px" }} type="text" className='form-control' />
                      <button className='btn fs-1'>+</button>
  
                    </div>
                  </td>
                  <td>$30</td>
                </tr>
              </tbody>
            </table>
  
            <div className='float-end p-3'>
              <button className='btn btn-primary'>Empty Cart</button>
              <Link to={"/"} className="btn btn-info ms-5">Shop More</Link>
            </div>
  
          </div>
  
          <div className="col-lg-4">
            <div className='border shadow rounded p-5 text-center'>
              <h3>Total Amunt : <span className='text-primary'>$300</span></h3>
              <hr />
              <button className='btn btn-success w-75'>Checkout</button>
  
            </div>
          </div>
  
        </div>
  
  
      </div>
    </>
  )
}

export default Cart
