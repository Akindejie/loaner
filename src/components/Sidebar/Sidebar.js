import React from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import CloseIcon from '@mui/icons-material/Close';

let LinkScroll = Scroll.Link;

const Sidebar = ({ openSidebar, toggler }) => {
  return (
    <aside className={'aside ' + (openSidebar && 'active')}>
      <div className="icon">
        <CloseIcon className="close-icon" onClick={toggler} />
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <LinkScroll className="sidebar-links" to="about" onClick={toggler}>
            About
          </LinkScroll>
          <LinkScroll className="sidebar-links" to="discover" onClick={toggler}>
            Discover
          </LinkScroll>
          <LinkScroll className="sidebar-links" to="services" onClick={toggler}>
            Services
          </LinkScroll>
          <LinkScroll className="sidebar-links" to="signup" onClick={toggler}>
            Sign Up
          </LinkScroll>
        </div>
        <div className="side-button-wrapper">
          <Link className="route-link" to="/signin">
            Sign In
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
