import React from 'react';
import SearchContainer from '../containers/SearchContainer.js';
//TODO: swap out the React components below for the container components
//  you wrote in the 'containers' directory.
  
const Nav = () => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <SearchContainer />
    </div>
  </nav>
);

export default Nav;
