import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import PageNotFound from "./components/PageNotFound/PageNotFound.js";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Footer from "./components/Footer/Footer";
import "./App.scss";


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
          <div className="container">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/movie/:imdbID" exact component={MovieDetail} />
                {/* <Route component={PageNotFound} /> */}
            </Switch>
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
