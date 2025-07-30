import './App.css';
import Dashboard from './Dashboard';
import { useState } from 'react';

function App() {
  const [loggedInUser, setLoggedInUser] = useState('Guest User');

  const handleLogout = () => {
    setLoggedInUser('Guest User');
  };

  return (
    <div>
      <Dashboard username={loggedInUser} />
    </div>
  );
};

export default App;
