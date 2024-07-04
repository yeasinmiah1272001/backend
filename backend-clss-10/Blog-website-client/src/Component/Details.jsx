import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  const [detail, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const findDetails = details.find((item) => item.id == id);
    setDetails(findDetails);
  }, [id, details]);

  return (
    <div
      href="#"
      className="justify-between items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4 md:p-8 mx-auto my-12"
    >
      <img
        className="rounded-t-lg md:rounded-none md:rounded-l-lg w-full md:w-1/2"
        src={detail.imageURL}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 md:p-8 leading-normal w-full md:w-1/2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {detail.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {detail.location}
        </p>
        <p>{detail.description}</p>
      </div>
    </div>
  );
};

export default Details;
