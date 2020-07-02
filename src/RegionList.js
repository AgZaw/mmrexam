import React, { Component } from 'react';

import "./RegionList.css";
import { Link } from 'react-router-dom';

class RegionList extends Component {
  render() {
    const { regions, year } = this.props;
    return (
      <ul className="list-group list-group-flush">
        {
          regions.map((region, i) => {
            return (
              <Link className="RegionList" to={`/mmrexam/region/${region.name}`} key={i}>
                <li className="list-group-item">
                  <div>{region.no}</div>
                  <div>{region.name}</div>
                  <div>{year}</div>
                </li>
              </Link>
            );
          })
        }
      </ul>
    );
  }
}

export default RegionList;