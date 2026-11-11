import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { addToWishlist } from '../redux/slices/wishListSlice'
import { addCart } from '../redux/slices/cartSlice'


function View() {

  const { id } = useParams()
  console.log(id);
  const { allProducts } = useSelector(state => state.productReducer)
  console.log(allProducts);

  const [product, setProduct] = useState({})

  const userWishlist = useSelector(state => state.WishlistReducer)
  console.log(userWishlist);
  const dispatch = useDispatch()

  useEffect(() => {
    setProduct(allProducts?.find(item => item.id == id))
  }, [])

  console.log(product);

  const handleWishlist = () => {

    // Check whether product already exists
    const existingItem = userWishlist?.find(
      item => item?.id == product?.id
    )

    if (existingItem) {
      Swal.fire({
        title: "Sorry",
        text: "Product already in wishlist",
        icon: "error",
        confirmButtonText: "OK"
      })
    }
    else {
      dispatch(addToWishlist(product))

      Swal.fire({
        title: "Success",
        text: "Product added to wishlist",
        icon: "success",
        confirmButtonText: "OK"
      })
    }
  }

  const userCart = useSelector(state => state.cartReducer)

  const handleCart = () => {

    // Check whether product already exists
    const existingItem = userCart?.find(
      item => item?.id == product?.id
    )
    dispatch(addCart(product))

    Swal.fire({
      title: "Success",
      text: existingItem ? `${existingItem.title} quantity is incremented` : `Product added to your cart`,
      icon: "success",
      confirmButtonText: "OK"
    })

  }

  return (
    <>
      <Header />
      <div className='container my-5 pt-5'>

        <div className="row align-items-center" >

          <div className="col-lg-6 text-center" >

            <img className='img-fluid  h-75' src={product?.thumbnail} alt="perfume" />

            <div className='d-flex justify-content-evenly mt-5' >
              <button onClick={handleWishlist} className='btn btn-warning'>ADD TO WISHLIST</button>
              <button onClick={handleCart} className='btn btn-primary'>ADD TO CART</button>
            </div>


          </div>

          <div className="col-lg-6">
            <h3 className='fw-bold'>{product?.title}</h3>
            <h2 className='fw-bold'>${product?.price}</h2>
            <h4 className='fw-bold'>{product?.brand}:</h4>
            <h4 className='fw-bold'>{product?.category}:</h4>
            <h4 className='fw-bold'>{product?.description}</h4>
            <h5 className='fw-bold'>Client Review</h5>
            {
              product?.reviews?.map((item, index) => (
                <div key={index} className='border rounded shadow p-2 shadow my-5'>
                  <p><span className='fw-bolder'>Name : {item?.reviewerName} </span>{item?.comment}</p>
                  <p>Rating : {item?.rating} <FontAwesomeIcon icon={faStar} className='text-danger' /></p>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </>
  )
}

export default View
