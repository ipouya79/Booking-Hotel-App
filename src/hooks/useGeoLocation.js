import { useState } from "react";

export default function useGeoLocation() {
  //Navigator read-only property

  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  function getPosition() {

if(!navigator.geolocation) return setError("Your browser does not support geolocation")

    //success callback - error callback
setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      setIsLoading(false)
      ,(error) => {
        setError(error.message);
        setIsLoading(false)
      }
    );
  }


return {isLoading , error ,position, getPosition }

}
