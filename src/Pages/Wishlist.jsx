import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Header from '../Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeWishlistItem } from '../redux/slices/wishListSlice';
import { addCart } from '../redux/slices/cartSlice'
import Swal from 'sweetalert2'



function Wishlist() {

  const userWishlist = useSelector(state => state.WishlistReducer);
  const userCart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()

  const handleCart = (product) => {

    // Check whether product already exists
    const existingItem = userCart?.find(
      item => item?.id == product?.id
    )
    dispatch(addCart(product))
    dispatch(removeWishlistItem(product.id))

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
      {
        userWishlist?.length > 0 ?
          <div className='container my-5'>
            <h1 className='pt-4 text-success fw-bolder'>Users Wishlist</h1>
            <div className='row pt-5'>

              {
                userWishlist.map((item) => (

                  <div className="col-3" key={item.id}>

                    <Card className='shadow p-2'>
                      <Card.Img
                        style={{ height: '250px' }}
                        variant="top"
                        src={item?.thumbnail} />

                      <Card.Body className='text-center'>
                        <Card.Title>{item?.title}</Card.Title>

                        <div className='d-flex justify-content-evenly'>
                          <button onClick={() => dispatch(removeWishlistItem(item?.id))} className='btn btn-warning'>
                            <FontAwesomeIcon icon={faHeartCircleXmark} />
                          </button>

                          <button onClick={() => handleCart(item)} className='btn btn-primary'>
                            <FontAwesomeIcon icon={faCartPlus} />
                          </button>
                        </div>
                      </Card.Body>
                    </Card>

                  </div>

                ))
              }

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
  );
}

export default Wishlist;
