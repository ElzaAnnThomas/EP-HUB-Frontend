import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import offer1 from '../assets/offer1.jpg';
import offer2 from '../assets/offer2.jpeg';
import offer3 from '../assets/offer3.jpeg';
import offer4 from '../assets/offer4.jpg';
import offer5 from '../assets/offer5.webp';

const OfferCarousel = () => {
  const offers = [
    { id: 1, image: offer1, title: 'Offer 1' },
    { id: 2, image: offer2, title: 'Offer 2' },
    { id: 3, image: offer3, title: 'Offer 3' },
    { id: 4, image: offer4, title: 'Offer 4' },
    { id: 5, image: offer5, title: 'Offer 5' },
  ];

  return (
    <div className='w-full px-16 mt-10 flex flex-col items-center'>
      <Carousel 
        autoPlay 
        infiniteLoop 
        className="lg:block hidden"
        showArrows={false} // Hide navigation arrows
        showThumbs={false} // Hide thumbnail images
      >
        {offers.map(offer => (
          <div key={offer.id} className='relative'>
            <img src={offer.image} alt={offer.title} className='h-48 w-full object-cover'/>
            <p className="absolute bottom-0 bg-black bg-opacity-50 text-white text-lg px-4 py-2 w-full flex items-center justify-center">{offer.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default OfferCarousel;
