import discount from "../../assets/service/service_bg.png";

const Discount = () => {
  return (
    <div
      className="hero min-h-screen bg-fixed bg-cover bg-center p-6"
      style={{
        backgroundImage: `url(${discount})`,
      }}
    >
      <div className="text-center flex flex-col justify-center items-center h-full bg-black bg-opacity-50">
        <h2 className="text-red-600 text-2xl md:text-3xl lg:text-4xl mb-4">
          Become a member
        </h2>
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl mb-8">
          Register and get 30% discount
          <br className="hidden md:block" />
          on membership
        </h1>
        <button className="bg-red-600 text-white px-6 py-3 text-lg md:text-xl lg:text-2xl rounded hover:bg-red-700 transition duration-300">
          Register
        </button>
      </div>
    </div>
  );
};

export default Discount;
