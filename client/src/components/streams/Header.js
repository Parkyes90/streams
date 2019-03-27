import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Streamyasd
        </Link>
        <div className="right menu">
        <Link to="/" className="item">
          All Streams Test
        </Link>
        </div>
      </div>
    );
  }
}

export default Header;
