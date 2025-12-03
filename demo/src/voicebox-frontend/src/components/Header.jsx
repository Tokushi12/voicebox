import React from 'react';

const Header = ({ showSidebar, setShowSidebar }) => {
  return (
    <header className="header">
      <h1 className="header-title">VoiceBox</h1>
      <button onClick={() => setShowSidebar(!showSidebar)} className="header-toggle-button">
        ☰
      </button>
    </header>
  );
};

export default Header;