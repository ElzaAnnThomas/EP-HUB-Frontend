import HomePage from "./Pages/HomePage"
import Shop from "./Pages/Shop"
import MyOrders from "./Pages/MyOrders"
import Login from "./Pages/Login"
import Register from "./Pages/Register"

import { Routes, Route } from "react-router-dom"


const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/shop" element={<Shop/>}/>\
      <Route path="/my-orders" element={<MyOrders/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  )
}

export default Layout