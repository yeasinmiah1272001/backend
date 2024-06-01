import React from "react";
import img1 from "../../assets/images/about_us/person.jpg";
import img2 from "../../assets/images/team/1.jpg";
import img3 from "../../assets/images/team/2.jpg";
import img4 from "../../assets/images/team/3.jpg";


const Team = () => {
  return (
    <div className="my-7">
      <div className="">
        <h1 className="text-3xl text-red-500 text-center font-bold">
          Our Team Member
        </h1>
        <div>
          <p className="text-center">
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which don't look even slightly
            believable.
          </p>
        </div>
      </div>
      <section
        className="container max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="team-section">
          <div className="team-header-section text-center text-white pt-10 py-3">
            <h1 className="team-heading text-5xl py-3 font-bold">
              Meet the team section
            </h1>
            <p className="text-sm">
              Contrary to popular belief, is not simply random text. It has
              roots in a piece of classical <br />
              Latin literature from 45 BC, making it over 2000 years old.
            </p>
          </div>
          <div className="container text-center grid lg:grid-cols-4 sm:grid-cols-1 my-10 px-10 pb-10">
            <div>
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={img2} alt="Awlad Hossain" />
                </div>
              </div>
              <h1 className="text-center text-white">Awlad Hossain</h1>
              <p className="text-center text-white">Fruits Expert</p>
              <div>
                <i className="fa-brands fa-facebook text-white"></i>
                <i className="fa-brands fa-twitter text-white"></i>
                <i className="fa-brands fa-linkedin text-white"></i>
              </div>
            </div>
            <div>
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={img3} alt="Chaity" />
                </div>
              </div>
              <h1 className="text-center text-white">Chaity</h1>
              <p className="text-center text-white">Fruits Expert</p>
              <div>
                <i className="fa-brands fa-facebook text-white"></i>
                <i className="fa-brands fa-twitter text-white"></i>
                <i className="fa-brands fa-linkedin text-white"></i>
              </div>
            </div>
            <div>
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={img4} alt="Safia Chowdhury" />
                </div>
              </div>
              <h1 className="text-center text-white">Safia Chowdhury</h1>
              <p className="text-center text-white">Fruits Expert</p>
              <div>
                <i className="fa-brands fa-facebook text-white"></i>
                <i className="fa-brands fa-twitter text-white"></i>
                <i className="fa-brands fa-linkedin text-white"></i>
              </div>
            </div>
            <div>
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={img2} alt="Rokib Hossain" />
                </div>
              </div>
              <h1 className="text-center text-white">Rokib Hossain</h1>
              <p className="text-center text-white">Fruits Expert</p>
              <div>
                <i className="fa-brands fa-facebook text-white"></i>
                <i className="fa-brands fa-twitter text-white"></i>
                <i className="fa-brands fa-linkedin text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
