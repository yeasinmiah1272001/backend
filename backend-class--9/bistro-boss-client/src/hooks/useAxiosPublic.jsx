import axios from "axios";

const axiousPublic = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosPublic = () => {
       return axiousPublic;
};

export default useAxiosPublic;