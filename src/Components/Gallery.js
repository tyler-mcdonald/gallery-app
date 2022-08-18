import NotFound from "./NotFound";
import Photo from "./Photo";
import { Component } from "react";
import axios from "axios";
import apiKey from "../config.js";

class Gallery extends Component {
  state = { photos: [], loaded: false };

  fetchPhotos = () => {
    const search = this.props.match.params.search;
    const perPage = "24";
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=${perPage}&format=json&nojsoncallback=1`;
    axios
      .get(url)
      .then((response) => response.data.photos.photo)
      .then((photos) => this.setState({ photos, loaded: true }));
    // return photos;
  };

  componentDidMount() {
    this.fetchPhotos();
  }

  // componentDidUpdate() {
  //   this.fetchPhotos();
  // }

  render() {
    const renderPhotos = () => {
      const photos = this.state.photos.map((photo) => {
        const size = "z";
        const url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;

        return (
          <li key={photo.id}>
            <Photo url={url} title={photo.title} />
          </li>
        );
      });
      return photos;
    };

    this.state.loaded
      ? console.log(this.state.photos)
      : console.log("loading...");
    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {this.state.loaded ? renderPhotos() : <li>Loading...</li>}

          <NotFound />
        </ul>
      </div>
    );
  }
}

export default Gallery;
