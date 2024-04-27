import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const OfferCarousel = () => {
  

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