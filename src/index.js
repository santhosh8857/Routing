import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import Users from "./components/Users";
import Employees from "./components/Employees";

const routing = (
  // Parent for the routes
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">Users</Link>
        </li>
        <li>
          <Link to="/employee">Employees</Link>
        </li>
      </ul>
    </div>
    {/* Select the desired */}
    <Switch>
      {/* use the parent as the last route here - '/'  */}
      {/* or we can use the exact keyword in the parent */}
      <Route exact path="/" component={App} />
      <Route path="/user" component={Users} />
      <Route path="/employee" component={Employees} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));
