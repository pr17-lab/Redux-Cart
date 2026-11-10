import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import PageNotFound from './Pages/PageNotFound'
import Products from './Pages/Products'
import View from './Pages/View'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'

function App() {

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/products/:id' element={<View/>} />
        <Route path='/*' element={<PageNotFound/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Wishlist' element={<Wishlist/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
