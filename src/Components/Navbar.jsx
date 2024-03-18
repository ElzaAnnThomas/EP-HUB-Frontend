import '../Styles/Navbar.css'
import Logo from '../assets/Ep-Hub.png' 

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={Logo} alt="ep-hub"  className='logo'/>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/">Shop</a>
        <a href="/">My Orders</a>
        <div className="login-register">
          <a href="">Login</a>
          <a href="">Resgister</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar