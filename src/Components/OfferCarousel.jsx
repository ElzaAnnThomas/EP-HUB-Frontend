import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

//offers images import here
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
        { id: 1, image: offer4, title: 'Offer 1' },
        { id: 2, image: offer5, title: 'Offer 2' },
      ];

  return (
    <div>
      <Carousel autoPlay infiniteLoop>
        {offers.map(offer => (
          <div key={offer.id}>
            <img src={offer.image} alt={offer.title} />
            <p className="legend">{offer.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default OfferCarousel;