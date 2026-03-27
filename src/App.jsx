import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';
import { useAuth } from './context/AuthContext';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />
        <Route path="/shop" element={
          <ProtectedRoute>
            <ShopPage />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
  <ProtectedRoute>
    <ProfilePage />
  </ProtectedRoute>
} />
<Route path="/cart" element={
  <ProtectedRoute>
    <CartPage />
  </ProtectedRoute>
} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;