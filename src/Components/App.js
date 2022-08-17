// Dependencies
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import Gallery from "./Gallery";

// import apiKey from "../config.js";

const App = () => {
  // const navButtons = ["cats", "dogs", "computers"];

  //   const navButtonRoutes = () => {
  //     const routes = navButtons.map((btn) => (
  //       <Route path={`/${btn}`} component={Gallery} key={btn} />
  //     ));
  //     return routes;
  //   };

  return (
    <BrowserRouter>
      <div className="container">
        <SearchForm />
        <Nav />

        <Switch>
          {/* Home */}
          <Route exact path="/" component={Gallery} />
          {/* Search params */}
          <Route path="/:search" component={Gallery} />
          {/* Nav buttons */}
          {/* <Route path="/cats" component={Gallery} />
          <Route path="/dogs" component={Gallery} />
          <Route path="/computers" component={Gallery} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
