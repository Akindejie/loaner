import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

let LinkScroll = Scroll.Link;
const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <Link className="nav-logo" to="/">
          Dollar
        </Link>
        <div className="mobile-icon">
          <FingerprintIcon />
        </div>
        <ul>
          <li>
            <LinkScroll className="link-scroll" to="about">About</LinkScroll>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
