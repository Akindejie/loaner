import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
