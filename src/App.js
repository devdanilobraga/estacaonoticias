import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateContent from './CreateContent/CreateContent';
import ShowContent from './ShowContent/ShowContent';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './style.scss'; 


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CreateContent />} />
        <Route path="/show" element={<ShowContent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
