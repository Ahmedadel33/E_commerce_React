import { useState } from 'react';

const products = [
  { id: 1, name: 'Cantilever chair', code: 'Y523201', price: '$42.00', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&h=200&fit=crop' },
  { id: 2, name: 'Cantilever chair', code: 'Y523201', price: '$42.00', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop' },
  { id: 3, name: 'Cantilever chair', code: 'Y523201', price: '$42.00', img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=200&h=200&fit=crop' },
  { id: 4, name: 'Cantilever chair', code: 'Y523201', price: '$42.00', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=200&h=200&fit=crop' },
];
const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const active = hovered || product.featured;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card border-0 p-3 text-center position-relative"
      style={{
        backgroundColor: active ? '#FB2E86' : '#F7F7F7',
        transition: 'background-color 0.3s ease',
        cursor: 'pointer',
        borderRadius: '4px'
      }}
    >
      {product.featured && (
        <span className="badge position-absolute top-0 start-0 m-2"
          style={{ backgroundColor: '#2FD0B5', fontSize: '10px' }}>
          Best Seller
        </span>
      )}

      <div className="position-absolute top-0 end-0 m-2 d-flex flex-column gap-1">
        <span style={{ cursor: 'pointer', fontSize: '14px', color: active ? 'white' : '#0D0E43' }}>♡</span>
        <span style={{ cursor: 'pointer', fontSize: '14px', color: active ? 'white' : '#0D0E43' }}>🔍</span>
        <span style={{ cursor: 'pointer', fontSize: '14px', color: active ? 'white' : '#0D0E43' }}>⟳</span>
      </div>

      <img
        src={product.img}
        alt={product.name}
        className="mx-auto d-block my-3"
        style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '4px' }}
      />

      <h6 className="fw-semibold mb-1" style={{ color: active ? 'white' : '#0D0E43' }}>
        {product.name}
      </h6>

      <div className="d-flex justify-content-center gap-2 mb-1">
        <span style={{ width: '20px', height: '2px', backgroundColor: active ? 'white' : '#FB2E86', display: 'inline-block', marginTop: '6px' }}></span>
        <span style={{ width: '20px', height: '2px', backgroundColor: '#ccc', display: 'inline-block', marginTop: '6px' }}></span>
      </div>

      <p className="mb-1" style={{ fontSize: '12px', color: active ? '#fde' : '#8A8FB9' }}>
        Code - {product.code}
      </p>
      <p className="fw-bold mb-0" style={{ fontSize: '14px', color: active ? 'white' : '#FB2E86' }}>
        {product.price}
      </p>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="py-5 bg-white text-center">
      <div className="container">
        <h2 className="fw-bold mb-2" style={{ color: '#0D0E43' }}>Featured Products</h2>
        <div className="mx-auto mb-5" style={{ width: '50px', height: '3px', backgroundColor: '#FB2E86' }}></div>

        <div className="row g-3">
          {products.map(p => (
            <div className="col-6 col-md-3" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center gap-2 mt-4">
          <span className="rounded-circle" style={{ width: '12px', height: '12px', backgroundColor: '#FB2E86', display: 'inline-block' }}></span>
          <span className="rounded-circle" style={{ width: '12px', height: '12px', backgroundColor: '#ccc', display: 'inline-block' }}></span>
          <span className="rounded-circle" style={{ width: '12px', height: '12px', backgroundColor: '#ccc', display: 'inline-block' }}></span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;