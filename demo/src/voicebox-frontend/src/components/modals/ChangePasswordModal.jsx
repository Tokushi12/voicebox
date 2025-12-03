import React from 'react';

const ChangePasswordModal = ({ passwordForm, setPasswordForm, handleChangePassword, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content update-user-modal-content">
        <h2 className="modal-title">Change Password</h2>
        <div className="modal-form-container">
          <div className="modal-form-group">
            <label className="modal-label">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="modal-input"
              value={passwordForm.password}
              onChange={(e) => setPasswordForm({...passwordForm, password: e.target.value})}
            />
          </div>
          <div className="modal-form-group-last">
            <label className="modal-label">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-type Password"
              className="modal-input"
              value={passwordForm.confirmPassword}
              onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
            />
          </div>
          <div className="modal-form-buttons">
            <button
              onClick={handleChangePassword}
              className="modal-form-button modal-form-button-primary"
            >
              CONFIRM
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

export default ChangePasswordModal;