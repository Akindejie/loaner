import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

let LinkScroll = Scroll.Link;
const Navbar = ({ openSidebar, toggler }) => {
  return (
    <div className={'nav ' + (openSidebar && 'active')}>
      <div className="container">
        <Link className="nav-logo" to="/">
          Loaner
        </Link>
        <ul>
          <li>
            <LinkScroll className="link-scroll" to="about">
              About
            </LinkScroll>
          </li>
          <li>
            <LinkScroll className="link-scroll" to="discover">
              Discover
            </LinkScroll>
          </li>
          <li>
            <LinkScroll className="link-scroll" to="services">
              Services
            </LinkScroll>
          </li>
          <li>
            <LinkScroll className="link-scroll" to="signup">
              Sign Up
            </LinkScroll>
          </li>
        </ul>
        <div className="nav-button">
          <Link className="nav-button-link" to="signin">
            Sign In
          </Link>
        </div>
        <div className="mobile-icon">
          <FingerprintIcon onClick={toggler} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
