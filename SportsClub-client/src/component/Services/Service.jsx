

const Service = ({service}) => {
       const {name, image, button, description} = service;
       return (
         <div className="block max-w-[18rem] rounded-lg bg-slate-800 bg-opacity-35 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
           <div className="relative overflow-hidden bg-cover bg-no-repeat">
             <img
               className="rounded-t-lg"
               src={image}
               alt="Nature"
             />
           </div>
           <div className="p-6">
              <h1>{name}</h1>
             <p className="text-base">
              {description}
             </p>
             <p className="my-2 text-red-600">{button}</p>
           </div>
         </div>
       );
};

export default Service;