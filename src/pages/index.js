import React, { useState } from 'react';
import '../App.scss';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggler = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="App">
      <Sidebar openSidebar={openSidebar} toggler={toggler} />
      <Navbar openSidebar={openSidebar} toggler={toggler} />
      <Hero />
    </div>
  );
};

export default Home;
