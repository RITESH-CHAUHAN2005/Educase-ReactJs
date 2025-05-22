import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PhoneShell from './components/PhoneShell';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';

function App() {
  return (
    <Router>
      {/* ✅ iOS-style boundary lives here */}
      <PhoneShell>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </PhoneShell>
    </Router>
  );
}

export default App;
