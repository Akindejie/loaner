import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Close } from '@mui/icons-material';

let LinkScroll = Scroll.Link;

const Sidebar = ({ openSidebar, toggler }) => {
  return (
    <SidebarContainer openSidebar={openSidebar}>
      <Icon>
        <CloseIcon onClick={toggler} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggler}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggler}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggler}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggler}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideButtonWrap>
          <SignInButton to="/signin">Sign In</SignInButton>
        </SideButtonWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: black;
  display: grid;
  align-items: center;
  left: 0;
  opacity: ${({ openSidebar }) => (openSidebar ? '100%' : '0')};
  top: ${({ openSidebar }) => (openSidebar ? '0' : '-100%')};
  transition: 0.3s ease-in-out;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(Close)`
  color: white;
`;

const SidebarWrapper = styled.div`
  color: white;
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: yellow;
    transition: 0.2s ease-in-out;
  }
`;

const SideButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const SignInButton = styled(Link)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: black;
  font-size: 16px;
  outline: none;
  border: none;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: black;
  }
`;
