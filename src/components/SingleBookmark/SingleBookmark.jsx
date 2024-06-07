import { useNavigate, useParams } from "react-router-dom";
import { useBookmark } from "../context/BookmarkListContext";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import ReactCountryFlag from "react-country-flag";

function SingleBookmark() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getBookmark, isLoadingCurrentBookmark, currentBookmark } =
    useBookmark();

  useEffect(() => {
    getBookmark(id);
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  if (isLoadingCurrentBookmark || !currentBookmark) return <Loader></Loader>;

  return (
    <div>
      <button onClick={handleBack} className="btn btn--back">
        &larr; Back
      </button>
      <h2 className="mt-2">{currentBookmark.cityName}</h2>


      <div className="bookmarkItem mt-2">
                <ReactCountryFlag svg countryCode={currentBookmark.countryCode} />
                &nbsp; <strong>{currentBookmark.cityName}</strong> &nbsp;
                <span>{currentBookmark.country}</span>
              </div>
      {/* <p>
        {currentBookmark.cityName} - {currentBookmark.country}
      </p> */}
    </div>
  );
}

export default SingleBookmark;
