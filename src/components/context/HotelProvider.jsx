import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";

const HotelContext = createContext();

function HotelProvider({ children }) {
  const [SearchParams, SetSearchParams] = useSearchParams();
  const destination = SearchParams.get("destination");
  const room = JSON.parse(SearchParams.get("options"))?.room;
  //use q to search all fields
  const { isLoding, data:hotels } = useFetch(
    "http://localhost:5000/hotels",
    `q=${destination || ""}&accommodates_gte=${room || 1}`
  );

  return <HotelContext.Provider value={{isLoding , hotels}}>{children}</HotelContext.Provider>;
}

export default HotelProvider;

export function useHotels() {
  return useContext(HotelContext);
}
