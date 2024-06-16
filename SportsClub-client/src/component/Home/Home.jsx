import About from "../About/About";
import Acheivement from "../Acheivement/Acheivement";
import BlogNews from "../BlogNews/BlogNews";
import Carosouel from "../Carosouel/Carosouel";
import Discount from "../Discount/Discount";
import Gallary from "../Gallary/Gallary";
import Review from "../Review/Review";
import Services from "../Services/Services";
import SwiperReview from "../SwiperReview/SwiperReview";
import Timeheduel from "../Timeheduel/Timeheduel";



const Home = () => {
       return (
              <div>
                     <Carosouel></Carosouel>  
                     <About></About>
                     <Services></Services>
                     <Timeheduel></Timeheduel>
                     <Acheivement></Acheivement>
                     <Gallary></Gallary>
                     <Review></Review>
                     <SwiperReview></SwiperReview>
                     <Discount></Discount>
                     <BlogNews></BlogNews>
              </div>
       );
};

export default Home;