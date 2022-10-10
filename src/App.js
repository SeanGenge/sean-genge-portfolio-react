import React, { useState } from 'react';
import './css/App.css';
import TopNavigation from './components/TopNavigation';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
  
  const renderTitle = () => {
    if (currentPage === 'AboutMe') {
      return <h1 className="title">About Me</h1>
    }
    else if (currentPage === 'Portfolio') {
      return <h1 className="title">Portfolio</h1>
    }
    else if (currentPage === 'ContactMe') {
      return <h1 className="title">Contact Me</h1>
    }
  }
  
  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <>
      <div className="main-container">
        <TopNavigation currentPage={currentPage} handlePageChange={handlePageChange} />
        <Container>
          <Row>
            <Col>
              {renderTitle()}
            </Col>
          </Row>
            {renderPage()}
        </Container>
        
      </div>
      <Footer />
    </>
  );
}

export default App;
