import Photo from "./Photo";
import { Route, Redirect } from "react-router-dom";

const Gallery = (props) => {
  const query = props.match.params.query || "cats";

  const renderPhotos = () => {
    const size = "z"; // https://www.flickr.com/services/api/misc.urls.html
    const photos = props.photos.map((photo) => {
      const url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
      return (
        <li key={photo.id}>
          <Photo src={url} alt={photo.title} />
        </li>
      );
    });
    return photos;
  };

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        <Redirect to={`/search/${query}`} />
        <Route path={`/search/${query}`}>{renderPhotos()}</Route>
      </ul>
    </div>
  );
};

export default Gallery;
