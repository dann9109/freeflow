
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import Invoice from './pages/Invoice';
import Footer from './components/Footer/Footer'


function App() {
  const location = useLocation();
  return (
    <main class={`pageLayout ${location.pathname === '/'
    ? 'mainBackground'
    : ''}`
    }>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
      <Header />
      <Footer />
    </main>
  );
}

export default App;
