
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import Invoice from './pages/Invoice';
import Footer from './components/Footer/Footer'
import ProjectForm from './components/ProjectForm';



function App() {
  const location = useLocation();
  return (
    <>
      <main className={`pageLayout ${location.pathname === '/'
        ? 'mainBackground'
        : 'defaultBackground'}`
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="create" element={<ProjectForm />} />
          </Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
        <Header />
      </main>
      <Footer />
    </>
  )
    ;
}

export default App;
