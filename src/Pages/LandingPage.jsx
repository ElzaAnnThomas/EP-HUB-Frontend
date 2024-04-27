import ItemCards from "../Components/ItemCards"
import OfferCarousel from "../Components/OfferCarousel"
import SearchBar from "../Components/SearchBar"


const LandingPage = () => {
  return (
    <div>
        <SearchBar/>
        <OfferCarousel/>
        <ItemCards/>
    </div>
  )
}

export default LandingPage