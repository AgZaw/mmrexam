import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';

import twok16 from "./data/2016.json";
import twok17 from "./data/2017.json";
import twok18 from "./data/2018.json";
import twok19 from "./data/2019.json";
import RegionList from './RegionList';
import CityList from './CityList';

const results = {
  "2016": twok16,
  "2017": twok17,
  "2018": twok18,
  "2019": twok19,
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/mmrexam/2019">အောင်စာရင်း</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/mmrexam/2019">2019</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/mmrexam/2018">2018</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/mmrexam/2017">2017</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/mmrexam/2016">2016</NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <div className="main">
          <Switch>
            <Route
              exact
              path="/mmrexam/:eduYear"
              render={props => {
                const { eduYear } = props.match.params;
                return (
                  <RegionList
                    regions={results[eduYear].years}
                    year={results[eduYear].year}
                    {...props}
                  />
                );
              }}
            />
            <Route
              exact
              path="/mmrexam/:eduYear/region/:regionName"
              render={props => {
                const { regionName, eduYear } = props.match.params;
                const currentRegion = results[eduYear].years.find(region => {
                  return region.name === regionName;
                });
                // foreign doesnt' have cities
                const cities = currentRegion.cities || [{
                  no: "၁",
                  name: "နိုင်ငံခြား",
                  table_no: "နခ",
                  href: currentRegion.href
                }];
                return (
                  <CityList
                    cities={cities}
                  />
                );
              }}
            />
            <Route exact render={() => <Redirect to="/mmrexam/2019" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
