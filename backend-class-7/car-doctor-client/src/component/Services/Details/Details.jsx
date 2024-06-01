import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div data-aos="flip-up" className="md:col-span-2 ">
        <div className="mx-auto">
          <figure>
            <img
              className="mx-auto h-96 w-[800px] rounded-md shadow-md"
              src={details.img}
              alt="Job Logo"
            />
          </figure>

          <div className="card card-side bg-white shadow-md p-6">
            <div className="card-body">
              <h2 className="text-3xl text-center font-semibold mb-4">
                {details.title}
              </h2>
              <p className="text-gray-700 mb-4">{details.description}</p>

              <div className="grid grid-cols-3">
                {/* Mapping over facility items */}
                {details.facility.map((facilityItem, index) => (
                  <div
                    key={index} // Make sure to add a unique key for each item
                    className="me-4 block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface"
                    style={{ width: "18rem" }}
                  >
                    <div className="p-6">
                      <h5 className="mb-2 text-xl font-medium leading-tight">
                        {facilityItem.name}
                      </h5>
                      <p className="mb-4 text-base">{facilityItem.details}</p>
                      <button
                        type="button"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                      >
                        Go somewhere
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <img src={details.img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1  bg-white">
        <div className="w-full  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-4 text-2xl font-medium text-black dark:text-gray-400">
            Services
          </h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">49</span>
            <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /month
            </span>
          </div>
          <ul role="list" className="space-y-5 my-7">
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                {details.title}
              </span>
            </li>
            <li className="flex">
              <svg
                className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                {details.title}
              </span>
            </li>
            <li className="flex">
              <svg
                className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                {details.title}
              </span>
            </li>
            {/* Add more list items here */}
          </ul>
        </div>

        <div className="w-full mt-3 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-4 text-2xl font-medium text-black dark:text-gray-400">
            Download
          </h5>

          <ul role="list" className="space-y-5 my-7">
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                {details.title}
              </span>
            </li>
            <li className="flex">
              <svg
                className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                {details.title}
              </span>
            </li>
            <li className="flex">
              <svg
                className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                {details.title}
              </span>
            </li>
            {/* Add more list items here */}
          </ul>
        </div>

        <div className="w-full mt-3 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
            Connect wallet
          </h5>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Connect with one of our available wallet providers or create a new
            one.
          </p>
          <ul className="my-4 space-y-3">
            <li>
              <a className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <svg
                  aria-hidden="true"
                  className="h-4"
                  viewBox="0 0 40 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z"
                    fill="#E17726"
                  />
                  {/* Add the rest of the SVG path elements */}
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">MetaMask</span>
                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                  Popular
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="h-5"
                  viewBox="0 0 292 292"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M145.7 291.66C226.146 291.66 291.36 226.446 291.36 146C291.36 65.5541 226.146 0.339844 145.7 0.339844C65.2542 0.339844 0.0400391 65.5541 0.0400391 146C0.0400391 226.446 65.2542 291.66 145.7 291.66Z"
                    fill="#3259A5"
                  />
                  {/* Add the rest of the SVG path elements */}
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Coinbase Wallet
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="h-5"
                  viewBox="0 0 75.591 75.591"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  {/* Add the SVG path elements */}
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Opera Wallet
                </span>
              </a>
            </li>
            <li>
              <a className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <svg
                  aria-hidden="true"
                  className="h-5"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  {/* Add the SVG path elements */}
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  WalletConnect
                </span>
              </a>
            </li>
            <li>
              <a className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <svg
                  aria-hidden="true"
                  className="h-4"
                  viewBox="0 0 96 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Add the SVG path elements */}
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Fortmatic</span>
              </a>
            </li>
          </ul>
          <div>
            <a className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
              <svg
                className="w-3 h-3 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                {/* Add the SVG path elements */}
              </svg>
              Why do I need to connect with my wallet?
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-red-600 mt-3">
            Price: {details.price}
          </h1>
          <Link to={`/booking/${details._id}`}>
            <button
              type="button"
              className="mb-2 mt-3 block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              Proceed Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
