import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, clearCart, total } = useCart();
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const newOrder = {
      id: `#ORD${Date.now()}`,
      date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
      status: 'Pending',
      total: `$${total.toFixed(2)}`,
      items: cart,
    };

    const updatedUser = {
      ...user,
      orders: [...(user.orders || []), newOrder],
    };

    login(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    clearCart();
    navigate('/profile');
  };

  return (
    <>
      <div className="py-4" style={{ backgroundColor: '#F2F0FF' }}>
        <div className="container">
          <h3 className="fw-bold mb-1" style={{ color: '#0D0E43' }}>Shopping Cart</h3>
          <p className="mb-0" style={{ fontSize: '13px', color: '#8A8FB9' }}>
            Home . <span style={{ color: '#FB2E86' }}>Cart</span>
          </p>
        </div>
      </div>

      <div className="py-5" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="container">
          {cart.length === 0 ? (
            <div className="text-center py-5">
              <p style={{ fontSize: '48px' }}>🛒</p>
              <h5 style={{ color: '#0D0E43' }}>Your cart is empty</h5>
              <button onClick={() => navigate('/shop')} className="btn fw-bold mt-3 px-4"
                style={{ backgroundColor: '#FB2E86', color: 'white', borderRadius: '8px' }}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="row g-4">
              {/* Cart Items */}
              <div className="col-md-8">
                <div className="card border-0 shadow-sm p-4" style={{ borderRadius: '16px' }}>
                  <h6 className="fw-bold mb-4" style={{ color: '#0D0E43' }}>Cart Items ({cart.length})</h6>
                  {cart.map(item => (
                    <div key={item.id} className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom">
                      <img src={item.img} alt={item.name}
                        style={{ width: '80px', height: '80px', objectFit: 'contain', backgroundColor: '#F7F7F7', borderRadius: '8px' }} />
                      <div className="flex-grow-1">
                        <h6 className="fw-bold mb-1" style={{ color: '#0D0E43', fontSize: '14px' }}>{item.name}</h6>
                        <p className="mb-0" style={{ color: '#FB2E86', fontSize: '13px', fontWeight: 'bold' }}>{item.price}</p>
                        <p className="mb-0" style={{ color: '#8A8FB9', fontSize: '12px' }}>Qty: {item.qty}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="btn btn-sm"
                        style={{ color: '#FB2E86', fontSize: '18px', background: 'none' }}>✕</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="col-md-4">
                <div className="card border-0 shadow-sm p-4" style={{ borderRadius: '16px' }}>
                  <h6 className="fw-bold mb-4" style={{ color: '#0D0E43' }}>Order Summary</h6>
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ color: '#8A8FB9', fontSize: '13px' }}>Subtotal</span>
                    <span style={{ color: '#0D0E43', fontWeight: '600', fontSize: '13px' }}>${total.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ color: '#8A8FB9', fontSize: '13px' }}>Shipping</span>
                    <span style={{ color: '#2FD0B5', fontWeight: '600', fontSize: '13px' }}>Free</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-4">
                    <span style={{ color: '#0D0E43', fontWeight: 'bold' }}>Total</span>
                    <span style={{ color: '#FB2E86', fontWeight: 'bold' }}>${total.toFixed(2)}</span>
                  </div>
                  <button onClick={handleCheckout} className="btn w-100 fw-bold py-2"
                    style={{ backgroundColor: '#FB2E86', color: 'white', borderRadius: '8px', fontSize: '14px' }}>
                    Checkout
                  </button>
                  <button onClick={() => navigate('/shop')} className="btn w-100 fw-bold py-2 mt-2"
                    style={{ backgroundColor: 'white', color: '#0D0E43', borderRadius: '8px', fontSize: '14px', border: '1px solid #ddd' }}>
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;