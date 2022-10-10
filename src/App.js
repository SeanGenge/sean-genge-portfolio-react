import React, { useState } from 'react';
import './css/App.css';
import TopNavigation from './components/TopNavigation';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');
  
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />
    }
    else if (currentPage === 'Portfolio') {
      return <Portfolio />
    }
    else if (currentPage === 'ContactMe') {
      return <ContactMe />
    }
  }
  
  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <>
      <div className="main-container">
        <TopNavigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
      <Footer />
    </>
  );
}

export default App;
