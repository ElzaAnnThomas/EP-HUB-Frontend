
import logo from '../assets/Ep-Hub.png'; // replace with the path to your logo

const Footer = () => {
  return (
    <footer className="bg-[#92E3A9] h-10 overflow-hidden bottom-0 mt-20 mb-0 text-white p-4 flex flex-row items-center justify-center gap-10 rounded-t-2xl">
      <img src={logo} alt="Company Logo" className="h-4 inline-block" />
      <p className='text-sm font-semibold'>&copy; 2024 All rights reserved.</p>
    </footer>
  );
};

export default Footer;