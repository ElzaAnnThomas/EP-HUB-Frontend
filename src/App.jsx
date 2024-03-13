import React from 'react'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import Shop from './Pages/Shop'
import MyOrders from './Pages/MyOrders'
import LoginRegister from './Pages/LoginRegister'

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <HomePage />
        <Shop />
        <MyOrders />
        <LoginRegister />
      </div>
    </>
  )
}

export default App