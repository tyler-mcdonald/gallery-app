import { Component } from "react";
import axios from "axios";
import apiKey from "../config.js";
import NotFound from "./NotFound";
import Photo from "./Photo";

class Gallery extends Component {
  state = { photos: [], loaded: false, search: this.props.match.params.search };

  fetchPhotos = () => {
    const search = this.props.match.params.search;
    const perPage = "24";
    const safeSearch = "1";
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&safe_search=${safeSearch}&per_page=${perPage}&format=json&nojsoncallback=1`;
    this.setState({ search, loaded: false });
    axios
      .get(url)
      .then((response) => response.data.photos.photo)
      .then((photos) => this.setState({ photos, loaded: true }));
  };

  componentDidMount() {
    this.fetchPhotos();
  }

  // Fetch new photos if search params change
  componentDidUpdate() {
    const search = this.props.match.params.search;
    if (search !== this.state.search) {
      this.fetchPhotos();
    }
  }

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

    // Loading indicator
    const handleLoading = () => {
      if (this.state.loaded) {
        return !this.props.match.params.search
          ? "Search for Photos"
          : `Results for ${this.props.match.params.search}`;
      } else {
        return "Loading...";
      }
    };

    return (
      <div className="photo-container">
        <h2>{handleLoading()}</h2>
        <ul>
          {renderPhotos()}
          {this.state.photos.length === 0 ? <NotFound /> : null}
        </ul>
      </div>
    );
  }
}

export default Gallery;
