import React, { Component } from "react";
import axios from "axios";
import { Switch, Route, BrowserRouter } from "react-router-dom";
// api key
import apiKey from "./config.js";
// components
import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";
import Gallery from "./Components/Gallery";

class App extends Component {
  state = { photos: [], defaultSearch: ["cats", "dogs", "birds"] };

  // fetches data and updates this.state.photos
  performSearch = (query) => {
    const perPage = "3";
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${perPage}&format=json&nojsoncallback=1`;
    axios.get(url).then((response) => {
      const data = response.data.photos.photo;
      this.setState({ photos: data });
    });
  };

  // creates a random search parameter from this.state.defaultSearch
  randomDefaultSeach = () => {
    const defaults = this.state.defaultSearch;
    const random = Math.floor(Math.random() * defaults.length);
    return defaults[random];
  };

  // generates random search
  // componentDidMount() {
  //   // this.performSearch(this.randomDefaultSeach());
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            {/* Home */}
            <Route
              exact
              path="/"
              render={(matchProps) => (
                <>
                  <SearchForm
                    {...matchProps}
                    performSearch={this.performSearch}
                  />
                  <Nav
                    topics={this.state.defaultSearch}
                    performSearch={this.performSearch}
                  />
                  <Gallery
                    {...matchProps}
                    performSearch={this.performSearch}
                    photos={this.state.photos}
                  />
                </>
              )}
            />

            {/* Search query routes */}
            <Route
              path={`/search/:query`}
              render={(matchProps) => (
                <>
                  <SearchForm
                    {...matchProps}
                    performSearch={this.performSearch}
                  />
                  <Nav
                    topics={this.state.defaultSearch}
                    performSearch={this.performSearch}
                  />
                  <Gallery
                    {...matchProps}
                    performSearch={this.performSearch}
                    photos={this.state.photos}
                  />
                </>
              )}
            />
          </Switch>

          {/* <Gallery /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
