import React from 'react';
import { ScrollButton } from '../ScrollButton';
import styled from 'styled-components';

const Sections = ({
  lightBackground,
  id,
  imageStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <SectionsContainer lightBackground={lightBackground} id={id}>
        <InfoWrapper>
          <InfoRow imageStart={imageStart}>
            <Column1>
              <TextWrapper>
                <H4>{topLine}</H4>
                <H1 lightText={lightText}>{headline}</H1>
                <P darkText={darkText}>{description}</P>
                <ButtonWrap>
                  <ScrollButton
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </ScrollButton>
                </ButtonWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImageWrapper>
                <Img src={img} alt={alt} />
              </ImageWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </SectionsContainer>
    </>
  );
};

export default Sections;

const SectionsContainer = styled.div`
  height: 91vh;
  color: white;
  background: ${({ lightBackground }) => (lightBackground ? 'white' : 'black')};

  @media screen and (max-width: 768px) {
    height: 140vh;
    padding: 100px 0;
  }
`;

const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 94%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imageStart }) =>
    imageStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imageStart }) =>
      imageStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

const H4 = styled.h4`
  color: #01bf71;
  font-size: 19px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const H1 = styled.h1`
  margin-bottom: 24px;
  font-style: 48px;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? 'white' : 'black')};
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
const P = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-style: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? 'black' : 'white')};
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-self: flex-start;
`;

const ImageWrapper = styled.div`
  max-width: 555px;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
