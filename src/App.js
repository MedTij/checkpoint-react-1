import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";


function App() {
  return (<Router>
    <div className="App" >
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28.92' height='29.258' viewBox='0 0 28.92 29.258'%3E %3Cpath id='Tracé_4120' data-name='Tracé 4120' d='M357.406,290.686a14.49,14.49,0,0,1-8.8,13.426,14.173,14.173,0,0,1-5.679,1.14,13.911,13.911,0,0,1-5.615-1.14,14.548,14.548,0,0,1-4.581-3.124,14.918,14.918,0,0,1-3.1-4.623,14.164,14.164,0,0,1-1.14-5.678,14.433,14.433,0,0,1,1.119-5.657,14.967,14.967,0,0,1,3.061-4.665,14.643,14.643,0,0,1,4.581-3.188,13.738,13.738,0,0,1,5.678-1.182h14.481Zm-6.755,0v-7.937h-7.726a7.549,7.549,0,0,0-5.425,2.3,8.18,8.18,0,0,0-1.646,2.533,7.913,7.913,0,0,0-.613,3.1,8.014,8.014,0,0,0,.591,3.082,7.465,7.465,0,0,0,1.625,2.47,7.794,7.794,0,0,0,2.449,1.646,7.8,7.8,0,0,0,6.058,0,8.13,8.13,0,0,0,2.448-1.646,7.314,7.314,0,0,0,1.647-2.47,8.011,8.011,0,0,0,.591-3.082' transform='translate(-328.486 -275.994)' fill='%23ff6464'/%3E %3C/svg%3E" alt="Go My Code"></img>
          <Link className="navbar-brand" to={"/sign-in"}>Go My Code</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;