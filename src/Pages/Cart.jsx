import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCart, removeCartItem, decrementCart, emptyCart } from '../redux/slices/cartSlice'
import Swal from 'sweetalert2'

function Cart() {

  const userCart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()

  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    setCartTotal(userCart?.reduce((acc, curr) => acc + curr.totalprice, 0))
  }, [userCart])

  const handleDecrementCart = (product) => {
    if (product.quantity > 1) {
      dispatch(decrementCart(product.id))
    } else {
      dispatch(removeCartItem(product.id))
    }
  }

  const naviaget = useNavigate()

  const  handleCheckout = () => {
    dispatch(emptyCart())
    Swal.fire({
      title: "Order placed successfully",
      text: "Thankyou for purchasing",
      icon: "success",
      confirmButtonText: "ok"
    })
    navigate('/')
  }

  return (
    <>
      <Header />
      {userCart.length > 0 ?
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
                  {
                    userCart.map((item, index) => (

                      <tr key={item?.id}>
                        <td>{index + 1}</td>
                        <td>{item?.title}</td>
                        <td>
                          <img style={{ height: "50px", width: "50px" }} src={item?.thumbnail} alt="" />
                        </td>
                        <td>
                          <div className='d-flex'>
                            <button onClick={() => handleDecrementCart(item)} className='btn fs-1'>-</button>
                            <input style={{ width: "45px" }} value={item?.quantity} type="text" className='form-control' />
                            <button onClick={() => dispatch(incrementCart(item?.id))} className='btn fs-1'>+</button>
                          </div>
                        </td>
                        <td>{item?.totalprice}</td>
                        <td onClick={() => dispatch(removeCartItem(item?.id))} className='text-primary fw-bold fs-1'>x</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>

              <div className='float-end p-3'>
                <button onClick={() => dispatch(emptyCart())} className='btn btn-primary'>Empty Cart</button>
                <Link to={"/"} className="btn btn-info ms-5">Shop More</Link>
              </div>

            </div>

            <div className="col-lg-4">
              <div className='border shadow rounded p-5 text-center'>
                <h3>Total Amunt : <span className='text-primary'>${cartTotal}</span></h3>
                <hr />
                <button onClick={handleCheckout} className='btn btn-success w-75'>Checkout</button>

              </div>
            </div>

          </div>
        </div>
        :
        <div className='d-flex justify-content-center align-items-center flex-column my-5 p-4'>
          <img className='img-fluid' src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-svg-download-png-6024626.png" alt="" />
          <h1>Your Wishlist is empty</h1>
          <Link to={'/'} className='btn btn-info'>ADD MORE</Link>
        </div>
      }
    </>
  )
}

export default Cart