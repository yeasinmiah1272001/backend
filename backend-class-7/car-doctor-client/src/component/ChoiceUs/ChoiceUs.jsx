
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import img1 from "../../assets/icons/deliveryt.svg";
import img2 from "../../assets/icons/Wrench.svg";
import img3 from "../../assets/icons/group.svg";
 
const ChoiceUs = () => {
       return (
         <div>
           <div className="">
             <h1 className="text-3xl text-red-500 text-center font-bold">
               Why Choose Us
             </h1>
             <div>
               <p className="text-center">
                 the majority have suffered alteration in some form, by injected
                 humour, or randomised <br /> words which don't look even
                 slightly believable.
               </p>
             </div>

             <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
               <Card className=" w-96">
                 <CardBody>
                   <img className="" src={img1} alt="" />
                   <Typography variant="h5" color="blue-gray" className="mb-2">
                     UI/UX Review Check
                   </Typography>
                   <Typography>
                     Because it&apos;s about motivating the doers. Because
                     I&apos;m here to follow my dreams and inspire others.
                   </Typography>
                 </CardBody>
                 <CardFooter className="pt-0">
                   <a href="#" className="inline-block">
                     <Button
                       size="sm"
                       variant="text"
                       className="flex items-center gap-2"
                     >
                       Learn More
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         strokeWidth={2}
                         stroke="currentColor"
                         className="h-4 w-4"
                       >
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                         />
                       </svg>
                     </Button>
                   </a>
                 </CardFooter>
               </Card>
               <Card className="mt-6 w-96">
                 <CardBody>
                   <img className="" src={img2} alt="" />
                   <Typography variant="h5" color="blue-gray" className="mb-2">
                     UI/UX Review Check
                   </Typography>
                   <Typography>
                     Because it&apos;s about motivating the doers. Because
                     I&apos;m here to follow my dreams and inspire others.
                   </Typography>
                 </CardBody>
                 <CardFooter className="pt-0">
                   <a href="#" className="inline-block">
                     <Button
                       size="sm"
                       variant="text"
                       className="flex items-center gap-2"
                     >
                       Learn More
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         strokeWidth={2}
                         stroke="currentColor"
                         className="h-4 w-4"
                       >
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                         />
                       </svg>
                     </Button>
                   </a>
                 </CardFooter>
               </Card>
               <Card className="mt-6 w-96">
                 <CardBody>
                   <img className="" src={img3} alt="" />
                   <Typography variant="h5" color="blue-gray" className="mb-2">
                     UI/UX Review Check
                   </Typography>
                   <Typography>
                     Because it&apos;s about motivating the doers. Because
                     I&apos;m here to follow my dreams and inspire others.
                   </Typography>
                 </CardBody>
                 <CardFooter className="pt-0">
                   <a href="#" className="inline-block">
                     <Button
                       size="sm"
                       variant="text"
                       className="flex items-center gap-2"
                     >
                       Learn More
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         strokeWidth={2}
                         stroke="currentColor"
                         className="h-4 w-4"
                       >
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                         />
                       </svg>
                     </Button>
                   </a>
                 </CardFooter>
               </Card>
             </div>
           </div>
         </div>
       );
};

export default ChoiceUs;