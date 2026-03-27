import { useState } from 'react';
import { useCart } from '../context/CartContext';
import sp1 from '../assets/sp1.png';
import sp2 from '../assets/sp2.png';
import sp3 from '../assets/sp3.png';
import sp4 from '../assets/sp4.png';
import sp5 from '../assets/sp5.png';
import sp6 from '../assets/sp6.png';
import sp7 from '../assets/sp7.png';
import sp8 from '../assets/sp8.png';
import sp9 from '../assets/sp9.png';
import sp10 from '../assets/sp10.png';
import sp11 from '../assets/sp11.png';
import sp12 from '../assets/sp12.png';

const products = [
  { id: 1, name: 'Vel elit euismod', price: '$26.00', oldPrice: '$42.00', img: sp10, colors: ['#FB2E86', '#FFA500', '#7E33E0'] },
  { id: 2, name: 'Ultricies condimentum imperdiet', price: '$26.00', oldPrice: '$42.00', img: sp5, colors: ['#FB2E86', '#FFA500', '#7E33E0'] },
  { id: 3, name: 'Vitae suspendisse sed', price: '$26.00', oldPrice: '$43.00', img: sp11, colors: ['#FB2E86', '#FFA500', '#7E33E0'] },
  { id: 4, name: 'Sed at fermentum', price: '$26.00', oldPrice: '$42.00', img: sp1, colors: ['#FB2E86', '#FFA500', '#7E33E0'] },
  { id: 5, name: 'Fusce pellentesque at', price: '$26.00', oldPrice: '$43.00', img: sp4, colors: ['#FFA500', '#7E33E0', '#2FD0B5'] },
  { id: 6, name: 'Vestibulum magna laoreet', price: '$26.00', oldPrice: '$40.00', img: sp7, colors: ['#FB2E86', '#FFA500', '#7E33E0'] },
  { id: 7, name: 'Sollicitudin amet orci', price: '$26.00', oldPrice: '$43.00', img: sp6, colors: ['#FB2E86', '#2FD0B5', '#7E33E0'] },
  { id: 8, name: 'Ultrices mauris sit', price: '$26.00', oldPrice: '$43.00', img: sp12, colors: ['#FFA500', '#7E33E0', '#2FD0B5'] },
  { id: 9, name: 'Pellentesque condimentum ac', price: '$26.00', oldPrice: '$49.00', img: sp8, colors: ['#FB2E86', '#FFA500', '#7E33E0'] },
  { id: 10, name: 'Cras scelerisque velit', price: '$26.00', oldPrice: '$43.00', img: sp3, colors: ['#FB2E86', '#FFA500', '#2FD0B5'] },
  { id: 11, name: 'Lectus vulputate faucibus', price: '$26.00', oldPrice: '$43.00', img: sp2, colors: ['#FB2E86', '#FFA500', '#7E33E0'] },
  { id: 12, name: 'Purus risus, ut', price: '$26.00', oldPrice: '$49.00', img: sp9, colors: ['#FB2E86', '#FFA500', '#7E33E0'] },
];

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card border-0 text-center h-100"
      style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }}
    >
      <div className="position-relative d-flex align-items-center justify-content-center"
        style={{ backgroundColor: '#F7F7F7', height: '220px' }}>
        <img
          src={product.img}
          alt={product.name}
          style={{ width: '180px', height: '180px', objectFit: 'contain' }}
        />
        {hovered && (
          <div className="position-absolute d-flex flex-column gap-2"
            style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
            {[
              { icon: '🛒', action: () => addToCart(product) },
              { icon: '🔍', action: () => {} },
              { icon: '♡', action: () => {} },
            ].map((btn, i) => (
              <div key={i} onClick={btn.action}
                className="d-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm"
                style={{ width: '32px', height: '32px', fontSize: '14px', cursor: 'pointer' }}>
                {btn.icon}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="p-3">
        <h6 className="fw-semibold mb-1" style={{ color: '#0D0E43', fontSize: '13px' }}>{product.name}</h6>
        <div className="d-flex justify-content-center gap-1 mb-2">
          {product.colors.map((color, i) => (
            <span key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: color, display: 'inline-block' }}></span>
          ))}
        </div>
        <div className="d-flex justify-content-center gap-2 mb-2">
          <span className="fw-bold" style={{ color: '#FB2E86', fontSize: '13px' }}>{product.price}</span>
          <span style={{ color: '#aaa', fontSize: '12px', textDecoration: 'line-through' }}>{product.oldPrice}</span>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="btn btn-sm w-100 fw-bold"
          style={{ backgroundColor: '#FB2E86', color: 'white', borderRadius: '4px', fontSize: '12px' }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ShopPage = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="py-4" style={{ backgroundColor: '#F2F0FF' }}>
        <div className="container">
          <h3 className="fw-bold mb-1" style={{ color: '#0D0E43' }}>Shop Grid Default</h3>
          <p className="mb-0" style={{ fontSize: '13px', color: '#8A8FB9' }}>
            Home . Pages . <span style={{ color: '#FB2E86' }}>Shop Grid Default</span>
          </p>
        </div>
      </div>

      <div className="py-5 bg-white">
        <div className="container">
          {/* Filter Bar */}
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
            <div>
              <h6 className="fw-bold mb-0" style={{ color: '#0D0E43' }}>Ecommerce Acceories & Fashion item</h6>
              <p className="mb-0" style={{ fontSize: '12px', color: '#8A8FB9' }}>About 9,620 results (0.62 seconds)</p>
            </div>
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <div className="d-flex align-items-center gap-2">
                <span style={{ fontSize: '13px', color: '#8A8FB9' }}>Per Page:</span>
                <input type="number" defaultValue={12} className="form-control form-control-sm" style={{ width: '60px' }} />
              </div>
              <div className="d-flex align-items-center gap-2">
                <span style={{ fontSize: '13px', color: '#8A8FB9' }}>Sort By:</span>
                <select className="form-select form-select-sm" style={{ width: '120px', fontSize: '13px' }}>
                  <option>Best Match</option>
                  <option>Price Low</option>
                  <option>Price High</option>
                </select>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span style={{ fontSize: '13px', color: '#8A8FB9' }}>View:</span>
                <span style={{ cursor: 'pointer', fontSize: '18px' }}>⊞</span>
                <span style={{ cursor: 'pointer', fontSize: '18px' }}>☰</span>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="row g-4">
            {products.map(p => (
              <div className="col-6 col-md-3" key={p.id}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;