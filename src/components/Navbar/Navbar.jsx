import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

let LinkScroll = Scroll.Link;
let Anime = Scroll.animateScroll;

const Navbar = ({ toggler }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    Anime.scrollToTop();
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>
          Loaner
        </NavLogo>
        <MobileIcon>
          <FingerprintIcon onClick={toggler} />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="discover"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Discover
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Services
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavSignUpLink to="/signup">Sign Up</NavSignUpLink>
          </NavItem>
        </NavMenu>
        <NavButton>
          <NavSignInLink to="/signin">Sign In</NavSignInLink>
          <NavSignInLink to="/adminsignin">Admin Sign In</NavSignInLink>
        </NavButton>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? 'black' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 9;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 66%;
`;

const NavLogo = styled(Link)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled(LinkScroll)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 4px solid #01bf71;
  }
`;
const NavSignUpLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 4px solid #01bf71;
  }
`;

const NavButton = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavSignInLink = styled(Link)`
  border-radius: 50px;
  background: #01bf71;
  margin: 10px;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-style: 16px;
  border: none;
  cursor: pointer;
  transform: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: black;
  }
`;
