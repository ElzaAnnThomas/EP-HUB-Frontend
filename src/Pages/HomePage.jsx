import AboutUs from "../Components/AboutUs"
import Navbar from "../Components/Navbar"
import Roles from "../Components/Roles"
// import bgImage from '../assets/bg-image.webp'

import '../Styles/HomePage.css'

const HomePage = () => {
  return (
    <div className="">
      <Navbar/>
      <AboutUs/>
      <Roles/>
    </div>
  )
}

export default HomePage