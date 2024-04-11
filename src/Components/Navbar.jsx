import Logo from '../assets/Ep-Hub.png' 
import menuButton from '../assets/menu-button.png'

const Navbar = () => {
  return (
    <nav className='flex flex-row items-center justify-between bg-[#92E3A9] h-20 rounded-b-2xl'>
      <img src={Logo} alt="ep-hub"  className='h-5 w-28 ml-5'/>
      <div className="max-sm:hidden">
        <a href="/">Home</a>
        <a href="/">Shop</a>
        <a href="/">My Orders</a>
        <div className="">
          <a href="">Login</a>
          <p>|</p>
          <a href="">Resgister</a>
        </div>
      </div>
      <button className='sm:hidden'>
        <img src={menuButton} alt="" className='h-20' />
      </button>
    </nav>
  )
}

export default Navbar