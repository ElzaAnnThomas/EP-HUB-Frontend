import { useState } from 'react';
import axios from 'axios';
import demo from '../assets/login-page-image.png';
import Navbar from '../Components/Navbar';
import '../Styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    district: '',
    city: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_DJANGO_API_URL}/api/v1/auth/register`, formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar/>
      <div className='container'>
        <div className='content'>
          <div className='img-box'>
            <img src={demo} alt="" />
          </div>
          <div className='box'>
            <div>
              <h2 className='texty'><u>REGISTER</u></h2>
            </div>
            <form className='inner-box' onSubmit={handleSubmit}>
              <div className='abc'>
                <p>NAME</p>
                <input className='rt' type='text' name='name' onChange={handleChange} />
                <p>EMAIL</p>
                <input className='rt' type='email' name='email' onChange={handleChange} />
                <p>PH.NO</p>
                <input className='rt' type='text' name='phone' onChange={handleChange} />
                <p>DISTRICT</p>
                <input className='rt' type='text' name='district' onChange={handleChange} />
                <p>CITY</p>
                <select className='rt-city' name='city' onChange={handleChange}>
                  <option>Select City</option>
                  <option>Chengannur</option>
                  <option>Kottayam</option>
                  <option>Ernakulam</option>
                  <option>Adoor</option>
                </select>
                <button type='submit'>Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;