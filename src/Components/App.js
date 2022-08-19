// Dependencies
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import Gallery from "./Gallery";
import Error from "./Error";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="title">React Gallery</h1>
        <Route path="/" component={SearchForm} />
        <Nav />
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route exact path="/:search" component={Gallery} />
          <Route path="/:search" component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
