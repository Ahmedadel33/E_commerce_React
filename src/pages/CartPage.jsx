import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
const BASE_URL = "http://localhost:5000";

const CartPage = () => {
  const { cart, removeFromCart, total, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container text-center" style={{ marginTop: '150px', marginBottom: '100px' }}>
        <h2 style={{ color: '#151875' }}>عربة التسوق فارغة حالياً 🛒</h2>
        <p className="text-muted">ابدأ بالتسوق وأضف بعض المنتجات الرائعة!</p>
        <Link to="/shop" className="btn btn-lg text-white" style={{ backgroundColor: '#FB2E86' }}>
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ marginTop: '120px', marginBottom: '100px' }}>
      <h2 className="fw-bold mb-5" style={{ color: '#1D3178' }}>Shopping Cart</h2>
      
      <div className="row">
        {/* جدول المنتجات */}
        <div className="col-lg-8">
          <table className="table align-middle">
            <thead style={{ color: '#1D3178' }}>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <img src={BASE_URL+item.image} alt={item.name} style={{ width: '60px', borderRadius: '5px' }} />
                      <div>
                        <p className="mb-0 fw-bold" style={{ color: '#000' }}>{item.name}</p>
                        <small className="text-muted">Category: {item.category}</small>
                      </div>
                    </div>
                  </td>
                  <td>${item.price}.00</td>
                  <td>
                    <span className="badge bg-light text-dark p-2 border">{item.quantity}</span>
                  </td>
                  <td className="fw-bold">${item.price * item.quantity}.00</td>
                  <td>
                    <button 
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeFromCart(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="d-flex justify-content-between mt-4">
            <button className="btn text-white" style={{ backgroundColor: '#FB2E86' }} onClick={clearCart}>
              Clear Cart
            </button>
            <Link to="/shop" className="btn btn-outline-primary">Update Cart</Link>
          </div>
        </div>

        {/* ملخص الحساب (Cart Totals) */}
        <div className="col-lg-4">
          <h4 className="text-center mb-4" style={{ color: '#1D3178' }}>Cart Totals</h4>
          <div className="p-4" style={{ backgroundColor: '#F4F4FC', borderRadius: '5px' }}>
            <div className="d-flex justify-content-between mb-3 border-bottom pb-2">
              <span className="fw-bold">Subtotals:</span>
              <span>${total}.00</span>
            </div>
            <div className="d-flex justify-content-between mb-4 border-bottom pb-2">
              <span className="fw-bold">Totals:</span>
              <span style={{ color: '#151875' }} className="fw-bold">${total}.00</span>
            </div>
            <p className="text-muted small">√ Shipping & taxes calculated at checkout</p>
            <button className="btn w-100 text-white fw-bold" style={{ backgroundColor: '#19D16F', border: 'none' }}>
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;