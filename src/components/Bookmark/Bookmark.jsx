import Map from "../Map/Map";

function Bookmark() {
  return (
    <div className="appLayout">
      <div className="sidebar">
        <div>Bookmark List</div>
      </div>
      <Map markerLocations={[]} />
    </div>
  );
}

export default Bookmark;
