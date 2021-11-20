import React, { useState } from 'react';
import '../App.scss';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import {
  FirstSection,
  SecondSection,
  ThirdSection,
} from '../components/Sections/SectionData';
import Sections from '../components/Sections/Sections';
import Services from '../components/Services/Services';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggler = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="App">
      <Sidebar openSidebar={openSidebar} toggler={toggler} />
      <Navbar toggler={toggler} />
      <Hero />
      <Sections {...FirstSection} />
      <Sections {...SecondSection} />
      <Services />
      <Sections {...ThirdSection} />
      <Footer />
    </div>
  );
};

export default Home;
