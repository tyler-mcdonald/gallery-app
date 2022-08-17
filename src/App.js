import React, { Component } from "react";
import axios from "axios";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
// api key
import apiKey from "./config.js";
// components
import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";
import Gallery from "./Components/Gallery";

class App extends Component {
  state = { photos: [], defaultSearch: ["cats", "dogs", "birds"] };

  // // change this to also accept url params "/search/:param"
  performSearch = (query) => {
    console.log(query);
    this.setState({ search: query });

    // const perPage = "24";
    // const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${perPage}&format=json&nojsoncallback=1`;
    // this.setState({ search: query });
    // axios.get(url).then((response) => {
    //   const data = response.data.photos.photo;
    //   this.setState({ photos: data });
    // });
  };

  render() {
    const randomDefaultSeach = () => {
      const defaults = this.state.defaultSearch;
      const random = Math.floor(Math.random() * defaults.length);
      return defaults[random];
    };

    return (
      <BrowserRouter>
        <div className="container">
          {/* <SearchForm performSearch={this.performSearch} />
          <Nav
            topics={this.state.defaultSearch}
            performSearch={this.performSearch}
          /> */}

          <Switch>
            <Route
              exact
              path={`/search/${this.state.search}`}
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
                  <Gallery {...matchProps} performSearch={this.performSearch} />
                </>
              )}
            />

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
                  <Gallery {...matchProps} performSearch={this.performSearch} />
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
                  <Gallery {...matchProps} performSearch={this.performSearch} />
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
