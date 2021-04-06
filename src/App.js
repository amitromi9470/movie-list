import MovieList from "./Components/MovieList/MovieList";
import Favourite from "./Components/Favourite/Favourite";
import Nav from "./Components/Nav/Nav";
import {Router, Switch, Route } from "react-router-dom";
import history from "./History";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import Reducers from "./Components/Reducers";
import "./App.css";

//const store = createStore(Reducers);

function App() {
  return (
    <div className="App">
      <Nav />
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/Favourite" component={Favourite} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
