import React from 'react'
import '../Styles/Navbar.css'
import Logo from '../assets/Ep-Hub.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="menu">
        <li>
          <ul><a href="">Home</a></ul>
          <ul><a href="">Shop</a></ul>
          <ul><a href="">My Orders</a></ul>
          <div className="login-register">
            <ul><a href="">Login</a></ul>
            <ul><a href="">Register</a></ul>
          </div>
        </li>
      </div>
    </nav>
  )
}

export default Navbar