import AboutUs from "../Components/AboutUs"
import Navbar from "../Components/Navbar"

import '../Styles/HomePage.css'


const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar className='Navbar'/>
      <AboutUs className='AboutUs'/>
    </div>
  )
}

export default HomePage