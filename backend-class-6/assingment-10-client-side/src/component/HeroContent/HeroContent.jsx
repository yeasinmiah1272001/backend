import hero from "../../assets/hero.jpg"

const HeroContent = () => {
       return (
         <div className="mt-10">
           <div className="hero min-h-screen shadow-lg">
             <div className="hero-content flex-col lg:flex-row-reverse">
               <img
                 src={hero}
                 className="max-w-sm rounded-lg shadow-2xl"
               />
               <div>
                 <h1 className="text-5xl font-bold">Sonny TV Office News!</h1>
                 <p className="py-6">
                   Provident cupiditate voluptatem et in. Quaerat fugiat ut
                   assumenda excepturi exercitationem quasi. In deleniti eaque
                   aut repudiandae et a id nisi.
                 </p>
                 <button className="btn btn-primary">Get Started</button>
               </div>
             </div>
           </div>
         </div>
       );
};

export default HeroContent;