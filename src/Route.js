import React, { Component } from "react";
import { Route, Router, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Home from "./Home";
import EditForm from "./EditForm";
import Form from "./Form";
import Detail from "./Detail";
import Search from './Search'
const history = createBrowserHistory();

class Routers extends Component {
  render() {
    return (
      <Router history={history}>
        <div className={"app-header"}>
          <Link to="/">
            <p className={"header-title"}>دارالافتاء اہلسنت </p>
          </Link>
          <Link to="/form">
            <p className={"header-title link"}>نیا داخلہ </p>
          </Link>
          <Link to="/search">
            <p className={"header-title link"}>Search </p>
          </Link>
        </div>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/edit/:id" component={EditForm} />
        </div>
      </Router>
    );
  }
}

export default Routers;
