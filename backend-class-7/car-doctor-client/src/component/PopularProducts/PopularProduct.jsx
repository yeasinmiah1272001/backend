

const PopularProduct = ({ popular }) => {

       const { image, price, name } = popular;
 
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl w-80 h-32" />
      </figure>
      <div className="card-body items-center text-center">
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <p className="font-bold text-xl">{name}</p>
        <div className="card-actions">
          <h3 className="text-red-500 font-semibold text-xl">$ {price}</h3>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;