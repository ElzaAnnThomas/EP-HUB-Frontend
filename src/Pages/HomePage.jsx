import AboutUs from "../Components/AboutUs"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Roles from "../Components/Roles"
// import bgImage from '../assets/bg-image.webp'

import '../Styles/HomePage.css'
import LandingPage from "./LandingPage"

const HomePage = () => {
  return (
    <div className="">
      <Navbar/>
      <AboutUs/>
      <Roles/>
      <Footer/>
      <LandingPage/>
    </div>
  )
}

export default HomePage