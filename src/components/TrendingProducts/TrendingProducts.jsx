import { useState } from 'react';
import chair1 from '../../assets/chair1.png';
import chair2 from '../../assets/chair2.png';
import chair3 from '../../assets/chair3.png';
import chair4 from '../../assets/chair4.png';
import clock from '../../assets/clock.png';
import cabinet from '../../assets/cabinet.png';

const products = [
  { id: 1, name: 'Cantilever chair', price: '$26.00', oldPrice: '$42.00', img: chair1 },
  { id: 2, name: 'Cantilever chair', price: '$26.00', oldPrice: '$42.00', img: chair2 },
  { id: 3, name: 'Cantilever chair', price: '$26.00', oldPrice: '$42.00', img: chair3 },
  { id: 4, name: 'Cantilever chair', price: '$26.00', oldPrice: '$42.00', img: chair4 },
];

const sideProducts = [
  { id: 1, name: 'Executive Seat chair', price: '$32.00', img: chair1 },
  { id: 2, name: 'Executive Seat chair', price: '$32.00', img: chair2 },
  { id: 3, name: 'Executive Seat chair', price: '$32.00', img: chair3 },
];

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card border-0 text-center p-3 h-100"
      style={{
        backgroundColor: hovered ? '#FB2E86' : '#F7F7F7',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        borderRadius: '4px'
      }}
    >
      <div style={{ width: '100%', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={product.img}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
      <h6 className="fw-semibold mb-1 mt-2" style={{ color: hovered ? 'white' : '#0D0E43', fontSize: '13px' }}>
        {product.name}
      </h6>
      <div className="d-flex justify-content-center gap-2">
        <span style={{ color: hovered ? 'white' : '#FB2E86', fontSize: '13px', fontWeight: 'bold' }}>{product.price}</span>
        <span style={{ color: hovered ? '#fde' : '#aaa', fontSize: '12px', textDecoration: 'line-through' }}>{product.oldPrice}</span>
      </div>
    </div>
  );
};
const TrendingProducts = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="fw-bold text-center mb-2" style={{ color: '#0D0E43' }}>Trending Products</h2>
        <div className="mx-auto mb-5" style={{ width: '50px', height: '3px', backgroundColor: '#FB2E86' }}></div>

        <div className="row g-4">
          {/* Left - products + banners */}
          <div className="col-md-9">
            <div className="row g-3">
              {products.map(p => (
                <div className="col-6 col-md-3" key={p.id}>
                  <ProductCard product={p} />
                </div>
              ))}
            </div>

            {/* Banner Cards */}
            <div className="row g-3 mt-2">
              <div className="col-md-6">
                <div className="p-4 d-flex align-items-center gap-3"
                  style={{ backgroundColor: '#F2F0FF', borderRadius: '4px', minHeight: '120px' }}>
                  <img src={clock} alt="offer" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                  <div>
                    <p className="fw-bold mb-1" style={{ color: '#0D0E43', fontSize: '14px' }}>23% off in all products</p>
                    <a href="#" style={{ color: '#FB2E86', fontSize: '12px' }}>Shop Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-4 d-flex align-items-center gap-3"
                  style={{ backgroundColor: '#FFFBF0', borderRadius: '4px', minHeight: '120px' }}>
                  <img src={cabinet} alt="offer" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                  <div>
                    <p className="fw-bold mb-1" style={{ color: '#0D0E43', fontSize: '14px' }}>23% off in all products</p>
                    <a href="#" style={{ color: '#FB2E86', fontSize: '12px' }}>View Collection</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - side list */}
          <div className="col-md-3">
            {sideProducts.map(p => (
              <div key={p.id} className="d-flex align-items-center gap-3 mb-3 p-2"
                style={{ backgroundColor: '#F7F7F7', borderRadius: '4px' }}>
                <img src={p.img} alt={p.name} style={{ width: '70px', height: '70px', objectFit: 'contain' }} />
                <div>
                  <p className="mb-0 fw-semibold" style={{ fontSize: '13px', color: '#0D0E43' }}>{p.name}</p>
                  <p className="mb-0" style={{ fontSize: '13px', color: '#FB2E86' }}>{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;