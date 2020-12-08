import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path={["/", "/signup"]}>
            <SignUp />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          {/* <Route>
            <NoMatch />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}
export default App; 