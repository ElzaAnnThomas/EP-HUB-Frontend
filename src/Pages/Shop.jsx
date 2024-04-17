import Navbar from "../Components/Navbar";
import sellerdesc from "../assets/seller-desc.png";
import buyerdesc from "../assets/buyer-desc.png";
import how from "../assets/how-it-works.png";
import { useState } from "react";

const Shop = () => {

  // toggle useState to manage the state of the buttons
  const [sellerClicked, setSellerClicked] = useState(true);
  const [buyerClicked, setBuyerClicked] = useState(false);

  const handleSellerClick = () => {
    setSellerClicked(true);
    setBuyerClicked(false);
  };

  const handleBuyerClick = () => {
    setBuyerClicked(true);
    setSellerClicked(false);
  };

  return (
    <div>
      {/* importing Navbar */}
      <Navbar />

      {/* shoping page options */}
      <div className="flex flex-col items-center mt-16">
        <img src={how} alt="" className="h-16"/>
        <div>
          <button onClick={handleSellerClick}>Seller</button>
          <button onClick={handleBuyerClick}>Buyer</button>
        </div>
        
        {/* Conditional rendering based on button clicks */}
        {sellerClicked && <img src={sellerdesc} alt="" />}
        {buyerClicked && <img src={buyerdesc} alt="" />}
      </div>
    </div>
  );
};

export default Shop;
