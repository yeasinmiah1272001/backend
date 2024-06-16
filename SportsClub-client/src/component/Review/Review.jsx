import React, { useEffect, useState } from "react";
import bg from "../../assets/acievement/counter_bg.png";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const Review = () => {
  const [review, setRiview] = useState([]);

  useEffect(() => {
    fetch("Acheive.json")
      .then((res) => res.json())
      .then((data) => setRiview(data));
  }, []);
  return (
    <div
      className="hero h-auto lg:h-[500px] bg-fixed bg-cover bg-center mt-9 p-6"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* 
      Uncomment this section if you want to include the title and subtitle

      <div className="text-white text-center mb-6 lg:mb-12">
        <h2 className="text-xl md:text-2xl">Our Services _____</h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          We Provide You Best Services
        </h1>
      </div>
      */}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white mb-24 lg:mb-0">
        {review.map((achieveItem) => (
          <div key={achieveItem.id}>
            <Card className="bg-slate-500 bg-opacity-45 text-white">
              <CardHeader
                floated={false}
                className="h-30 bg-slate-500 bg-opacity-45 text-white"
              >
                <img
                  className="h-20 justify-center items-center mx-auto w-20 rounded-full"
                  src="https://docs.material-tailwind.com/img/team-3.jpg"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="text-center text-white">
                <Typography variant="h4" color="" className="mb-2">
                  Natalie Paisley
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  CEO / Co-Founder
                </Typography>
              </CardBody>
              <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content="Like">
                  <Typography
                    as="a"
                    href="#facebook"
                    variant="lead"
                    color="blue"
                    textGradient
                  >
                    <i className="fab fa-facebook" />
                  </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href="#twitter"
                    variant="lead"
                    color="light-blue"
                    textGradient
                  >
                    <i className="fab fa-twitter" />
                  </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href="#instagram"
                    variant="lead"
                    color="purple"
                    textGradient
                  >
                    <i className="fab fa-instagram" />
                  </Typography>
                </Tooltip>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
