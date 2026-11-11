import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Badge from 'react-bootstrap/Badge';
import { searchProduct } from '../redux/slices/productSlice'
import { useDispatch,useSelector } from 'react-redux'

function Header({ InsideProduct }) {
  const userWishlist = useSelector(state => state.WishlistReducer)
  const userCart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  return (

    <Navbar expand="lg" className="bg-danger fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-light text-decoration-none">
          <FontAwesomeIcon icon={faTruckFast} style={{ color: 'rgb(229, 234, 237)' }} />{' '}
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Item className="ms-auto">
            {InsideProduct && <input onChange={e=>dispatch(searchProduct(e.target.value))}  type="text" className="form-control" placeholder="search your products" />}
          </Nav.Item>

          <Link to={'/wishlist'} className='text-light text-decoration-none fw-bold ms-5'>
            <FontAwesomeIcon icon={faHeart} className='btn btn-warning me-2' />
            Wishlist
            <Badge pill bg="secondary ms-2">{userWishlist?.length}</Badge>
          </Link>

          <Link to={'/cart'} className='text-light text-decoration-none fw-bold ms-5'>
            <FontAwesomeIcon icon={faCartShopping} className='btn btn-primary me-2' />
            Cart 
            <Badge pill bg="secondary ms-2">{userCart?.length}</Badge>
          </Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header