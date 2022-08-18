// Dependencies
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import Gallery from "./Gallery";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/" component={SearchForm} />
        <Nav />
        <Switch>
          {/* Home */}
          <Route exact path="/" component={Gallery} />
          {/* Search params */}
          <Route path="/:search" component={Gallery} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
