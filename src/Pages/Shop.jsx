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
      <div className="flex flex-col items-center mt-16">
        <img src={how} alt="" className="h-16 mb-4"/>
        <div className="flex space-x-4 mb-8">
          <button 
            onClick={handleSellerClick}
            className={`py-2 px-4 rounded-full ${sellerClicked ? 'bg-[#92E3A9] text-white' : 'bg-gray-200 text-gray-600'}`}
          >
            Seller
          </button>
          <button 
            onClick={handleBuyerClick}
            className={`py-2 px-4 rounded-full ${buyerClicked ? 'bg-[#92E3A9] text-white' : 'bg-gray-200 text-gray-600'}`}
          >
            Buyer
          </button>
        </div>
        
        {/* Conditional rendering based on button clicks */}
        {sellerClicked && (
          <div className=" bg-white p-4 rounded-lg shadow-xl">
            <img src={sellerdesc} alt="" className="mx-auto h-[350px]" />
          </div>
        )}
        {buyerClicked && (
          <div className=" bg-white p-4 rounded-lg shadow-xl">
            <img src={buyerdesc} alt="" className="mx-auto h-[350px] mr-14" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
