import React from 'react';

const Sidebar = ({ currentUser, setShowModal, handleLogout, openUpdateUserModal }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-user-section">
        <h3 className="sidebar-user-name">{currentUser.firstName} {currentUser.lastName}</h3>
        <p className="sidebar-user-info">User Type: {currentUser.userType}</p>
        <p className="sidebar-user-info">ID Number: {currentUser.idNumber}</p>
      </div>
      <div className="sidebar-menu-buttons">
        <button className="sidebar-menu-button">Report a Problem</button>
        <button className="sidebar-menu-button">Terms and Policies</button>
        <button className="sidebar-menu-button">Language</button>
        <button className="sidebar-menu-button">Theme</button>
        <button className="sidebar-menu-button">Notifications</button>
      </div>
      <div className="sidebar-action-buttons">
        <button
          onClick={() => setShowModal('changePassword')}
          className="sidebar-action-button"
        >
          CHANGE PASSWORD
        </button>
        <button
          onClick={openUpdateUserModal}
          className="sidebar-action-button"
        >
          UPDATE USER INFORMATION
        </button>
        <button
          onClick={handleLogout}
          className="sidebar-logout-button"
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Sidebar;