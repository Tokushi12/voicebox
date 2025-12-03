import React from 'react';

const LoginPage = ({ loginForm, setLoginForm, handleLogin, setCurrentPage }) => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">VoiceBox</h1>
        <div className="login-form-wrapper">
          <input
            type="text"
            placeholder="ID Number"
            className="login-input"
            value={loginForm.idNumber}
            onChange={(e) => setLoginForm({...loginForm, idNumber: e.target.value})}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={loginForm.password}
            onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
          />
          <button
            onClick={handleLogin}
            className="login-button"
          >
            LOGIN
          </button>
        </div>
        <p className="login-footer">
          No Account? <button onClick={() => setCurrentPage('signup')} className="login-footer-button">Create one!</button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;