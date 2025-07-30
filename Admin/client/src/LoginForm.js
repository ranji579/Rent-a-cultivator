import React, { useState } from 'react';

function LoginForm({ show, onClose, onLoginSuccess }) {
  const [activeTab, setActiveTab] = useState('login');
  const [accountType, setAccountType] = useState('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!show) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    if (email.trim() && password.trim()) {
      onLoginSuccess(email);
      onClose();
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    onClose();
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.loginModalContent}>
        <div style={styles.modalHeader}>
          <h2 style={styles.modalTitle}>Welcome to Rent-A-Cultivator</h2>
          <button style={styles.closeButton} onClick={onClose}>✕</button>
        </div>
        <div style={styles.tabContainer}>
          <button
            style={{ ...styles.tab, ...(activeTab === 'login' ? styles.activeTab : {}) }}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            style={{ ...styles.tab, ...(activeTab === 'register' ? styles.activeTab : {}) }}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>
        <div style={styles.formSection}>
          <h3 style={styles.sectionTitle}>{activeTab === 'login' ? 'Sign In' : 'Sign Up'}</h3>
          <p style={styles.sectionSubtitle}>
            Choose your account type and {activeTab === 'login' ? 'login' : 'register'}
          </p>
          <div style={styles.accountTypeContainer}>
            <button
              style={{ ...styles.accountTypeButton, ...(accountType === 'user' ? styles.activeAccountType : {}) }}
              onClick={() => setAccountType('user')}
            >
              <span style={styles.accountIcon}>👤</span>
              User
            </button>
            <button
              style={{ ...styles.accountTypeButton, ...(accountType === 'admin' ? styles.activeAccountType : {}) }}
              onClick={() => setAccountType('admin')}
            >
              <span style={styles.accountIcon}>🛡️</span>
              Admin
            </button>
          </div>
          <form onSubmit={activeTab === 'login' ? handleLoginSubmit : handleRegisterSubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.inputLabel}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                placeholder="Enter your email"
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.inputLabel}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" style={styles.submitButton}>
              {activeTab === 'login'
                ? `Sign In as ${accountType.charAt(0).toUpperCase() + accountType.slice(1)}`
                : `Sign Up as ${accountType.charAt(0).toUpperCase() + accountType.slice(1)}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  loginModalContent: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    maxWidth: '500px',
    width: '90%',
    textAlign: 'left',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  modalTitle: {
    fontSize: '1.8rem',
    color: '#006400',
    margin: '0',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
    color: '#555',
    padding: '5px',
  },
  tabContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    borderBottom: '1px solid #eee',
  },
  tab: {
    flex: 1,
    padding: '10px 15px',
    border: 'none',
    borderBottom: '2px solid transparent',
    background: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#555',
    transition: 'color 0.3s ease, border-bottom-color 0.3s ease',
  },
  activeTab: {
    color: '#006400',
    borderBottomColor: '#006400',
  },
  formSection: {
    marginTop: '20px',
  },
  sectionTitle: {
    fontSize: '1.4rem',
    color: '#333',
    marginBottom: '10px',
  },
  sectionSubtitle: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '20px',
  },
  accountTypeContainer: {
    display: 'flex',
    gap: '15px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  accountTypeButton: {
    flex: 1,
    padding: '10px 15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    background: '#f0f0f0',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease',
  },
  activeAccountType: {
    background: '#006400',
    color: '#fff',
    borderColor: '#006400',
  },
  accountIcon: {
    fontSize: '1.2rem',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  inputLabel: {
    display: 'block',
    fontSize: '0.9rem',
    color: '#555',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
  submitButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#006400',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
};

export default LoginForm;