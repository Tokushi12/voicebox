import React from 'react';

const SignupPage = ({ signupForm, setSignupForm, handleSignup, setCurrentPage }) => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <button onClick={() => setCurrentPage('login')} className="signup-back-button">
          ← Back
        </button>
        <h1 className="signup-title">VoiceBox</h1>
        <div className="signup-form-wrapper">
          <input
            type="text"
            placeholder="First Name"
            className="signup-input"
            value={signupForm.firstName}
            onChange={(e) => setSignupForm({...signupForm, firstName: e.target.value})}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="signup-input"
            value={signupForm.lastName}
            onChange={(e) => setSignupForm({...signupForm, lastName: e.target.value})}
          />
          <input
            type="text"
            placeholder="User Type"
            className="signup-input"
            value={signupForm.userType}
            onChange={(e) => setSignupForm({...signupForm, userType: e.target.value})}
          />
          <input
            type="text"
            placeholder="ID Number"
            className="signup-input"
            value={signupForm.idNumber}
            onChange={(e) => setSignupForm({...signupForm, idNumber: e.target.value})}
          />
          <input
            type="password"
            placeholder="Password"
            className="signup-input"
            value={signupForm.password}
            onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
          />
          <div className="signup-button-container">
            <button
              onClick={handleSignup}
              className="signup-button"
            >
              SIGN UP
            </button>
            <button
              onClick={() => setCurrentPage('login')}
              className="signup-button"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;