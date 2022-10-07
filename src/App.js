import React, { useState } from 'react';
import './css/App.css';
import TopNavigation from './components/TopNavigation';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';

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
      <TopNavigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  );
}

export default App;
