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
      fontSize: '12px',
      zIndex: 1000 // لضمان إنه فوق أي عنصر تاني
    }}>
      {/* الجزء الأيسر: بيانات المستخدم والزرار السحري */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        {user && (
          <>
            <span 
              onClick={() => navigate('/profile')} 
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              👤 {user.name}
            </span>
            <span>{user.email}</span>

            {(user?.role === 'admin' ) && (
              <button 
                onClick={() => navigate('/add-product')}
                style={{
                  backgroundColor: '#FB2E86',
                  color: 'white',
                  border: 'none',
                  padding: '3px 12px',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  marginLeft: '10px',
                  transition: '0.3s',
                  boxShadow: '0 0 8px rgba(251, 46, 134, 0.4)'
                }}
                onMouseOver={(e) => e.target.style.opacity = '0.8'}
                onMouseOut={(e) => e.target.style.opacity = '1'}
              >
                Add Product +
              </button>
            )}
          </>
        )}
      </div>

      {/* الجزء الأيمن: الإعدادات واللانجوتش والكارت */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ cursor: 'pointer' }}>English ▾</span>
        <span style={{ cursor: 'pointer' }}>USD ▾</span>
        
        {user ? (
          <span onClick={logout} style={{ cursor: 'pointer', fontWeight: 'bold' }}>Logout</span>
        ) : (
          <span onClick={() => navigate('/login')} style={{ cursor: 'pointer', fontWeight: 'bold' }}>Login</span>
        )}
        
        <span style={{ cursor: 'pointer' }}>Wishlist ♡</span>
        
        <span 
          onClick={() => navigate('/cart')} 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
        >
          🛒 {cart?.length || 0}
        </span>
      </div>
    </div>
  );
};

export default TopBar;