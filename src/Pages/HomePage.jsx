import AboutUs from "../Components/AboutUs"
import Navbar from "../Components/Navbar"
// import Roles from "../Components/Roles"

import '../Styles/HomePage.css'


const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar className='Navbar'/>
      <AboutUs className='AboutUs'/>
      {/* <Roles className='Roles'/> */}
    </div>
  )
}

export default HomePage