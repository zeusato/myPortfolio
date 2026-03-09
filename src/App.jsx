import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LandingScreen from './components/LandingScreen';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Modal from './components/Modal';
import MobileHeader from './components/MobileHeader';
import portfolioData from './data';

function App() {
  const [landingVisible, setLandingVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('about');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleEnter = () => {
    setLandingVisible(false);
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setSidebarOpen(false);
    window.scrollTo({ top: 0 });
  };

  const handleCardClick = (item, type) => {
    setModalData({ ...item, _type: type });
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <>
      <div className="noise-overlay" />

      <AnimatePresence>
        {landingVisible && (
          <LandingScreen data={portfolioData.profile} onEnter={handleEnter} />
        )}
      </AnimatePresence>

      {!landingVisible && (
        <div className="app-layout">
          <MobileHeader onToggle={() => setSidebarOpen(!sidebarOpen)} />

          {sidebarOpen && (
            <div
              className="sidebar-overlay visible"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          <Sidebar
            data={portfolioData.profile}
            activeSection={activeSection}
            onNavClick={handleNavClick}
            isOpen={sidebarOpen}
          />

          <MainContent
            data={portfolioData}
            activeSection={activeSection}
            onCardClick={handleCardClick}
          />
        </div>
      )}

      <AnimatePresence>
        {modalData && (
          <Modal data={modalData} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
