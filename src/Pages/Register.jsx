import demo from '../assets/homepage-image.png';
import Navbar from '../Components/Navbar';
import '../Styles/Register.css';

const Register = () => {
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
          <div className='inner-box'>
            <div className='abc'>
              <p>NAME</p>
              <input className='rt' type='text'></input>
              <p>EMAIL</p>
              <input className='rt' type='email'></input>
              <p>PH.NO</p>
              <input className='rt' type='text'></input>
              <p>DISTRICT</p>
              <input className='rt' type='text'></input>
              <p>CITY</p>
              <select className='rt-city'>
                <option>Select City</option>
                <option>Chengannur</option>
                <option>Kottayam</option>
                <option>Ernakulam</option>
                <option>Adoor</option>
                
              </select>
              <div>
              
                </div>
            </div>
        
            <div className='def'>
              <p>USERNAME</p>
              <input className='rt' type='text'></input>
              <p>PASSWORD</p>
              <input className='rt' type='password'></input>
              <p>RE-TYPE PASSWORD</p>
              <input className='rt' type='password'></input>
            </div>
          </div>
          <button className='submit' type="button">REGISTER</button>
        </div>
      </div>
        </div>
    </>
        
  );
};

export default Register;