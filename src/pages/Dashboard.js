import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import FeaturedInfo from '../components/featuredInfo/FeaturedInfo';
import Chart from '../components/chart/Chart';
import NavbarDashboard from '../components/Navbar/NavbarDashboard';

const Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggler = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <AppContainer>
      <NavbarDashboard toggler={toggler} />
      <AppBody>
        <FeaturedInfo />
        <Chart />
        <Footer />
      </AppBody>
    </AppContainer>
  );
};

export default Dashboard;

const AppContainer = styled.div`
  height: 100vh;
`;

const AppBody = styled.div`
  margin-top: 40px;
  width: 100%;
  height: calc(100vh - 70px);
  position: relative;
  top: 70px;
`;
