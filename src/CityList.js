import React, { Component } from 'react';

import "./CityList.css";

class CityList extends Component {
  render() {
    const { cities } = this.props;
    return (
      <ul className="list-group list-group-flush">
        {
          cities.map((city, i) => {
            return (
              <a className="CityList" href={city.href} key={i}>
                <li className="list-group-item">
                  <div>{city.no}</div>
                  <div>{city.name}</div>
                  <div>{city.table_no}</div>
                </li>
              </a>
            );
          })
        }
      </ul>
    );
  }
}

export default CityList;