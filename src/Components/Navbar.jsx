import Logo from '../assets/Ep-Hub.png' 
import menuButton from '../assets/menu-button.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex flex-row items-center justify-between bg-[#92E3A9] h-20 rounded-b-2xl'>
      <img src={Logo} alt="ep-hub"  className='h-5 w-28 ml-5'/>
      <div className="max-sm:hidden flex flex-row mr-12 gap-10">
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/my-orders'>My Orders</Link>
        <div className="flex flex-row gap-1">
          <Link to='/login'>Login</Link>
          <p>|</p>
          <Link to='/register'>Register</Link>
        </div>
      </div>
      <button className='sm:hidden'>
        <img src={menuButton} alt="" className='h-20' />
      </button>
    </nav>
  )
}

export default Navbar