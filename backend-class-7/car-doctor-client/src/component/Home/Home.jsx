import About from "../About/About";
import Banner from "../Banner/Banner";
import ChoiceUs from "../ChoiceUs/ChoiceUs";
import PopularProducts from "../PopularProducts/PopularProducts";

import Review from "../Review/Review";
import Services from "../Services/Services";
import Team from "../Team/Team";


const Home = () => {
       return (
              <div>
                     <Banner></Banner>
                     <About></About>
                     <Services></Services>
                     <Review></Review>
                     <PopularProducts></PopularProducts>
                     <Team></Team>
                     <ChoiceUs></ChoiceUs>
                     
              </div>
       );
};

export default Home;