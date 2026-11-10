
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Header from '../Components/Header';
import { useSelector } from 'react-redux';

function Wishlist() {

  const userWishlist = useSelector(state => state.WishlistReducer);

  return (
    <>
      <Header />

      {
        userWishlist?.length > 0 ?

          <div className='container my-5'>
            <div className='row pt-5'>

              {
                userWishlist.map((item) => (

                  <div className="col-3" key={item.id}>

                    <Card className='shadow p-2'>
                      <Card.Img
                        style={{ height: '250px' }}
                        variant="top"
                        src={item?.thumbnail}
                      />

                      <Card.Body className='text-center'>
                        <Card.Title>{item?.title}</Card.Title>

                        <div className='d-flex justify-content-evenly'>
                          <button className='btn btn-warning'>
                            <FontAwesomeIcon icon={faHeartCircleXmark} />
                          </button>

                          <button className='btn btn-primary'>
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

          <div className='d-flex justify-content-center align-items-center flex-column my-5'>
            <h1>Your wishlist is empty</h1>
          </div>
      }

    </>
  );
}

export default Wishlist;
