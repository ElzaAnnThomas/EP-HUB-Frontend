import React from 'react'

// Components 
import Navbar from './Components/Navbar'

//Pages
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