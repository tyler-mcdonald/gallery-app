import Photo from "./Photo";
import { Route, Redirect } from "react-router-dom";

const Gallery = (props) => {
  const query = props.match.params.query || "cats";
  // const query = props.match.params.query;

  // props.performSearch(query); // change to random

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        <Redirect to={`/search/${query}`} />
        <Route path={`/search/${query}`}>
          <Photo />
          <Photo />
          <Photo />
        </Route>
      </ul>
    </div>
  );
};

export default Gallery;
