import useFetch from "../../hooks/useFetch";

function LocationList() {
  const { data, isLoading } = useFetch(" http://localhost:5000/hotels", "");
  console.log(data);
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="nearbyLocation">
      <h2>Nearby Locations</h2>
      <div className="locationList">
        {data.map((item) => {
          console.log(item.picture_url.url);
          return (
            <div className="locationItem" key={item.id}>
              <img src={item.picture_url.url} alt={item.name} />
              <div className="locationItemDesc">
                <p className="location">{item.smart_location}</p>
                <p className="name">
                  {item.name}€ &nbsp; {item.price} &nbsp;
                  <span>night</span>
                </p>
                <p className="price"></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LocationList;
