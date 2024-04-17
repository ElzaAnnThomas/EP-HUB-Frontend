import Navbar from "../Components/Navbar"
import sellerdesc from "../assets/seller-desc.png"
import buyerdesc from "../assets/buyer-desc.png"
import how from "../assets/how-it-works.png"



const Shop = () => {
  return (
    <div>
      {/* importing Navbar */}

      <Navbar/>

      {/* shoping page options */}

      <div>
        <img src={how} alt="" />
        <div>
          <button>Seller</button>
          <button>Buyer</button>
        </div>
        <img src={sellerdesc} alt="" />
        <img src={buyerdesc} alt="" />
      </div>

      

    </div>
  )
}

export default Shop