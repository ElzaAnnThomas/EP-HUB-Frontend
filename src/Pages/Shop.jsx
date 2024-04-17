import Navbar from "../Components/Navbar";
import sellerdesc from "../assets/seller-desc.png";
import buyerdesc from "../assets/buyer-desc.png";
import how from "../assets/how-it-works.png";
import { useState } from "react";

const Shop = () => {
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
      <div>
        <img src={how} alt="" />
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
