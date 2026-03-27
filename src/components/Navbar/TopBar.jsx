import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const TopBar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <div style={{
      backgroundColor: '#7E33E0',
      color: 'white',
      padding: '8px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '12px'
    }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        {user && (
          <>
            <span onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>
              👤 {user.name}
            </span>
            <span>{user.email}</span>
          </>
        )}
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <span>English ▾</span>
        <span>USD ▾</span>
        {user ? (
          <span onClick={logout} style={{ cursor: 'pointer' }}>Logout</span>
        ) : (
          <span onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>Login</span>
        )}
        <span>Wishlist ♡</span>
        <span onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }}>
          🛒 {cart.length}
        </span>
      </div>
    </div>
  );
};

export default TopBar;