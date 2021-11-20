import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';

import {
  Facebook,
  Instagram,
  YouTube,
  Twitter,
  LinkedIn,
} from '@mui/icons-material';

const Footer = () => {
  let Anime = Scroll.animateScroll;

  const toggleHome = () => {
    Anime.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <H1>About Us</H1>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <H1>Contact Us</H1>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Services</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <H1>About Us</H1>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <H1>About Us</H1>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Services</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Loaner
            </SocialLogo>
            <WebsiteRights>
              Loaner © {new Date().getFullYear()} All rights reserved ®
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLinks
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </SocialIconLinks>
              <SocialIconLinks
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </SocialIconLinks>
              <SocialIconLinks
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTube />
              </SocialIconLinks>
              <SocialIconLinks
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </SocialIconLinks>
              <SocialIconLinks
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </SocialIconLinks>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: #101522;
`;

const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: white;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const H1 = styled.h1`
  font-size: 14px;
  margin-top: 16px;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &::hover {
    color: blue;
    transition: 0.3s ease-out;
  }
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialLogo = styled(Link)`
  color: white;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

const WebsiteRights = styled.small`
  letter-spacing: 1.2px;
  color: white;
  margin-bottom: 16px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLinks = styled.a`
  color: white;
  font-size: 24px;
`;
