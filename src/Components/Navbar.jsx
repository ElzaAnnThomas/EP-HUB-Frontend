import React from 'react'
import Logo from '../assets/Ep-Hub.png'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="menu">
        <li>
          <ul>Home</ul>
          <ul>Shop</ul>
          <ul>My Orders</ul>
          <div className="login-register">
            <ul>Login</ul>
            <ul>Register</ul>
          </div>
        </li>
      </div>
    </nav>
  )
}

export default Navbar