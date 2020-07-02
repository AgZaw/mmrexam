import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import twok19 from "./data/2019.json";
import RegionList from './RegionList';
import CityList from './CityList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/mmrexam/">အောင်စာရင်း</Link>
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
                <a className="nav-link" href="/mmrexam/">2019</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/2018.html">2018</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/2017.html">2017</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/2016.html">2016</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="main">
          <Switch>
            <Route
              exact
              path="/mmrexam/"
              render={props => (
                <RegionList
                  regions={twok19.years}
                  year={twok19.year}
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/mmrexam/region/:regionName"
              render={props => {
                const { regionName } = props.match.params;
                const currentRegion = twok19.years.find(region => {
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
                    year={twok19.year}
                  />
                );
              }}
            />
            <Route exact render={props => <h1 {...props}>404 not found</h1>} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
