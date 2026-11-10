import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


function View() {

  const {id} = useParams()
  console.log(id);
  const {allProducts} = useSelector(state=>state.productReducer)
  console.log(allProducts);
  

  return (
    <>
    <Header/>
    <div className='container my-5 pt-5'>

      <div className="row align-items-center" style={{height:"80vh"}}>

        <div className="col-lg-6 text-center" >

          <img className='img-fluid  h-75' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJvcslSfySM9fFL0NMcjRZvRVFjka8GASg1nlbBWM4kw&s=10" alt="perfume" />

          <div className='d-flex justify-content-evenly mt-5' >
            <button className='btn btn-warning'>ADD TO WISHLIST</button>
            <button className='btn btn-primary'>ADD TO CART</button>
          </div>


        </div>

        <div className="col-lg-6">
          <h3 className='fw-bold'>Title</h3>
          <h2 className='fw-bold'>$30</h2>
          <h4 className='fw-bold'>Brand:</h4>
          <h4 className='fw-bold'>Category:</h4>
          <h4 className='fw-bold'>Description:</h4>
          <h5 className='fw-bold'>Client Review</h5>
          <div className='border rounded shadow p-2 shadow my-5'>
            <p><span className='fw-bolder'>Name : </span>Message</p>
            <p>Rating : 5 <FontAwesomeIcon icon={faStar} className='text-danger' /></p>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default View
