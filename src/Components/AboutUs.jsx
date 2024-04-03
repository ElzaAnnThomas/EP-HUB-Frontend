import '../Styles/AboutUs.css'
import image from '../assets/homepage-image.png'

const AboutUs = () => {
  return (
    <div className="about-us">
       <div className="content">
            <h4 className=''>Welcome to EP-HUB!</h4> <br /><br />
            <p>At EP-Hub, we are dedicated to revolutionizing the way plastic waste is managed, mitigating its environmental impact, and promoting a circular economy.<br/><br/> Our platform offers a user-friendly interface designed to streamline the process of plastic waste management for individuals, businesses, and organizations alike. Whether you are a small-scale recycler, a large corporation, or a concerned citizen looking to make a difference, EP-Hub provides the tools and resources you need to take meaningful action against plastic pollution. <br/><br/>Together, we can turn the tide against plastic pollution and build a more resilient, sustainable world.</p>
       </div>
       <div className="image-container">
        <img src={image} alt="" className='image'/>
       </div>
    </div>
  )
}

export default AboutUs