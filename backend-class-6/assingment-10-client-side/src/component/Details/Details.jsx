import { Link, useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  const { category } = useParams();
  console.log(category)

  const filterData = details.filter((data) => data.category == category)
  console.log(filterData)

  return (
    <div className="grid sm:grid-cols-1  lg:grid-cols-2 mt-8 gap-10">
      {filterData.map((item) => (
        <div
          key={item._id}
          className="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row"
        >
          <img
            className="w-48 rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
            src={item.cover}
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-xl font-medium">Brand: {item.category}</h5>
            <h5 className="mb-2 text-sm font-medium">Price: {item.price}</h5>
            <h5 className="mb-2 text-sm font-medium">Rating: {item.rating}</h5>

            <p className="text-xs text-surface/75 mb-2 dark:text-neutral-300">
              Last updated 3 mins ago
            </p>

            <div className="flex mt-auto gap-3">
              <Link to={`/detailsCart/${item.price}`}>
                <button
                  type="button"
                  className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong md:w-32 md:pt-3 md:pb-3 lg:w-40 lg:pt-4 lg:pb-4"
                >
                  Details
                </button>
              </Link>
             
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
