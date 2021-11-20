import React from 'react';
import styled from 'styled-components';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <H1>Services</H1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src="/images/loan-1.svg" />
          <H2>Reduce expenses</H2>
          <P>We help reduce your fees and increase your wealth</P>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="/images/loan-2.svg" />
          <H2>Increase expenses</H2>
          <P>We help reduce your fees and increase your wealth</P>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="/images/loan-3.svg" />
          <H2>Maximize expenses</H2>
          <P>We help reduce your fees and increase your wealth</P>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

const ServicesContainer = styled.div`
  height: 91vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

const ServicesCard = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  min-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0, 2);
  transition: all 0.2s ease-in-out;

  &::hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

const H2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const P = styled.p`
  font-size: 1rem;
  text-align: center;
`;
