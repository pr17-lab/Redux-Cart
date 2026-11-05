import {  faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
function Wishlist() {
  return (
    <div className='container my-5'>
      <h1 className='pt-5 text-success fw-semibold'>Users Wishlist</h1>

      <div className='row pt-5'>
        {/* Duplicate column according to the products */}
        <div className="col-3">

          {/* Cards */}
          <Card className='shadow p-2'>
            <Card.Img style={{height:'250px'}} variant="top" src="perfume.png" />
            <Card.Body className='text-center'>
              <Card.Title>Perfume</Card.Title>
              <div className='d-flex justify-content-evenly'>
                <button className='btn btn-warning'><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
                <button className='btn btn-primary'><FontAwesomeIcon icon={faCartPlus} /></button>
              </div>
            </Card.Body>
          </Card>

        </div>

      </div>
        
    </div>
  )
}

export default Wishlist
