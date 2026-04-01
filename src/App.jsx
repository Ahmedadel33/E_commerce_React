import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';
import AddProduct from './pages/AddProduct'; 
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';
import ProductDetails from './pages/ProductDetails';
import { useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

 const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

 const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  
   const isAdmin = user?.role === 'admin' || user?.email === 'ahmed.a.tantawi@gmail.com';
  
  return isAdmin ? children : <Navigate to="/" />;
};

const PublicRoute = ({ children }) => {
  const { user } = useAuth();
  return !user ? children : <Navigate to="/" />;
};

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          } />
          <Route path="/register" element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          } />

          <Route path="/" element={
              <HomePage />
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

          <Route path="/product/:id" element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          } />

          <Route path="/add-product" element={
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          } />

        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;