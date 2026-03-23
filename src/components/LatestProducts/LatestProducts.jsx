import { useState } from 'react';

const tabs = ['New Arrival', 'Best Seller', 'Featured', 'Special Offer'];

const products = [
  { id: 1, name: 'Comfort Handy Craft', price: '$42.00', oldPrice: '$65.00', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&h=300&fit=crop' },
  { id: 2, name: 'Comfort Handy Craft', price: '$42.00', oldPrice: '$65.00', sale: true, img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop' },
  { id: 3, name: 'Comfort Handy Craft', price: '$42.00', oldPrice: '$65.00', img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=300&fit=crop' },
  { id: 4, name: 'Comfort Handy Craft', price: '$42.00', oldPrice: '$65.00', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&h=300&fit=crop' },
  { id: 5, name: 'Comfort Handy Craft', price: '$42.00', oldPrice: '$65.00', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop' },
  { id: 6, name: 'Comfort Handy Craft', price: '$42.00', oldPrice: '$65.00', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=300&h=300&fit=crop' },
];

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="position-relative"
      style={{ cursor: 'pointer' }}
    >
      {/* Image Box */}
      <div className="d-flex align-items-center justify-content-center position-relative"
        style={{ backgroundColor: '#F7F7F7', borderRadius: '4px', height: '220px', overflow: 'hidden' }}>

        {product.sale && (
          <span className="badge position-absolute top-0 start-0 m-2"
            style={{ backgroundColor: '#FB2E86', fontSize: '10px' }}>Sale</span>
        )}

        <img
          src={product.img}
          alt={product.name}
          style={{ width: '180px', height: '180px', objectFit: 'cover' }}
        />

        {hovered && (
          <div className="position-absolute end-0 top-0 m-2 d-flex flex-column gap-2">
            {['♡', '🔍', '⟳'].map((icon, i) => (
              <div key={i} className="d-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm"
                style={{ width: '30px', height: '30px', fontSize: '14px' }}>
                {icon}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="pt-3 text-start">
        <h6 className="fw-semibold mb-1" style={{ color: '#0D0E43' }}>{product.name}</h6>
        <div className="d-flex gap-2 align-items-center">
          <span className="fw-bold" style={{ color: '#FB2E86', fontSize: '14px' }}>{product.price}</span>
          <span style={{ color: '#aaa', fontSize: '12px', textDecoration: 'line-through' }}>{product.oldPrice}</span>
        </div>
      </div>
    </div>
  );
};

const LatestProducts = () => {
  const [activeTab, setActiveTab] = useState('New Arrival');

  return (
    <section className="py-5 bg-white text-center">
      <div className="container">
        <h2 className="fw-bold mb-4" style={{ color: '#0D0E43' }}>Leatest Products</h2>

        {/* Tabs */}
        <div className="d-flex justify-content-center gap-4 mb-5">
          {tabs.map(tab => (
            <span
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                cursor: 'pointer',
                fontSize: '14px',
                color: activeTab === tab ? '#FB2E86' : '#0D0E43',
                borderBottom: activeTab === tab ? '2px solid #FB2E86' : 'none',
                paddingBottom: '4px',
                fontWeight: activeTab === tab ? '600' : '400'
              }}
            >{tab}</span>
          ))}
        </div>

        {/* Grid */}
        <div className="row g-4">
          {products.map(p => (
            <div className="col-12 col-md-4" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;