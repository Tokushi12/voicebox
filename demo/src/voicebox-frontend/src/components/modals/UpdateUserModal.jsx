import React from 'react';

const UpdateUserModal = ({ updateUserForm, setUpdateUserForm, handleUpdateUserInfo, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content update-user-modal-content">
        <h2 className="modal-title">Update User Information</h2>
        <div className="modal-form-container">
          <div className="modal-form-group">
            <label className="modal-label">First Name</label>
            <input
              type="text"
              className="modal-input"
              value={updateUserForm.firstName}
              onChange={(e) => setUpdateUserForm({...updateUserForm, firstName: e.target.value})}
            />
          </div>
          <div className="modal-form-group">
            <label className="modal-label">Last Name</label>
            <input
              type="text"
              className="modal-input"
              value={updateUserForm.lastName}
              onChange={(e) => setUpdateUserForm({...updateUserForm, lastName: e.target.value})}
            />
          </div>
          <div className="modal-form-group">
            <label className="modal-label">User Type</label>
            <input
              type="text"
              className="modal-input"
              value={updateUserForm.userType}
              onChange={(e) => setUpdateUserForm({...updateUserForm, userType: e.target.value})}
            />
          </div>
          <div className="modal-form-group-last">
            <label className="modal-label">ID Number</label>
            <input
              type="text"
              className="modal-input"
              value={updateUserForm.idNumber}
              onChange={(e) => setUpdateUserForm({...updateUserForm, idNumber: e.target.value})}
            />
          </div>
          <div className="modal-form-buttons">
            <button
              onClick={handleUpdateUserInfo}
              className="modal-form-button modal-form-button-primary"
            >
              UPDATE
            </button>
            <button
              onClick={onClose}
              className="modal-form-button modal-form-button-cancel"
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserModal;