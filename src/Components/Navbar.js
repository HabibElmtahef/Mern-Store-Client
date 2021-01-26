import axios from 'axios'
import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../GlobalState'

const Navbar = () => {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart

    const logoutUser = async () => {
      await axios.get('/user/logout')
      localStorage.removeItem('firstLogin')
      window.location.href = "/"
    }

    const adminRouter = () => {
      return (
        <>
          <li className="nav-item">
               <Link to="/create_product"> <a className="nav-link" href="#">Create Product</a> </Link>
              </li>
              <li className="nav-item">
               <Link to="/category"> <a className="nav-link" href="#">Categories</a> </Link>
              </li>
        </>
      )
    }

    const loggedRouter = () => {
      return(
        <>
          <li className="nav-item">
               <Link to="/history"> <a className="nav-link" href="#">History</a> </Link>
              </li>
              <li className="nav-item">
               <Link to="/"> <a className="nav-link" href="#" onClick={logoutUser}>Logout</a> </Link>
              </li>
        </>
      )
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/"><a className="navbar-brand" href="#">{isAdmin ? 'Admin' : 'HbShop'}</a> </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
               <Link to="/"> <a className="nav-link " aria-current="page" href="#"> {isAdmin ? 'Products' : 'Shop'} </a> </Link>
              </li>

              {isAdmin && adminRouter()}
              {
                isLogged ? loggedRouter() : <li className="nav-item">
               <Link to="/login"> <a className="nav-link" href="#">Login</a> </Link>
              </li>
              }
              
              {
                isAdmin ? '' :
                <div className="cart-icon">
                  <span> {cart.length} </span>
                  <li className="nav-item">
               <Link to="/cart"> <a className="nav-link" href="#"><i style={{fontSize: "23px", color: "black"}} className='bx bxs-cart-alt'></i></a> </Link>
              </li>
              </div>
              }
              

            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
