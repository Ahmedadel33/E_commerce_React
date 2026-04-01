import { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. استدعاء الـ Link للربط بين الصفحات

const tabs = ['New Arrival', 'Best Seller', 'Featured', 'Special Offer'];
const BASE_URL = "http://localhost:5000";

// مكون الكارت الصغير (Product Card)
const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="position-relative"
    >
      {/* 2. لف منطقة الصورة بالـ Link لفتح صفحة التفاصيل */}
      <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
        <div className="d-flex align-items-center justify-content-center position-relative"
          style={{ backgroundColor: '#F7F7F7', borderRadius: '4px', height: '220px', overflow: 'hidden', cursor: 'pointer' }}>

          {product.sale && (
            <span className="badge position-absolute top-0 start-0 m-2"
              style={{ backgroundColor: '#FB2E86', fontSize: '10px', zIndex: 1 }}>Sale</span>
          )}

          <img
            src={BASE_URL+product.image || 'https://via.placeholder.com/180'} 
            alt={product.name}
            style={{ width: '180px', height: '180px', objectFit: 'contain', transition: '0.3s' }}
            className={hovered ? 'scale-110' : ''}
          />

          {hovered && (
            <div className="position-absolute end-0 top-0 m-2 d-flex flex-column gap-2" style={{ zIndex: 2 }}>
              {['♡', '🔍', '⟳'].map((icon, i) => (
                <div key={i} className="d-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm"
                  style={{ width: '30px', height: '30px', fontSize: '14px', color: '#151875' }}>
                  {icon}
                </div>
              ))}
            </div>
          )}
        </div>
      </Link>

      {/* Info */}
      <div className="pt-3 text-start">
        {/* 3. لف اسم المنتج أيضاً بالـ Link */}
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
          <h6 className="fw-semibold mb-1" style={{ color: '#0D0E43', cursor: 'pointer' }}>{product.name}</h6>
        </Link>
        
        <div className="d-flex gap-2 align-items-center">
          <span className="fw-bold" style={{ color: '#FB2E86', fontSize: '14px' }}>
            {typeof product.price === 'number' ? `$${product.price}.00` : product.price}
          </span>
          {product.oldPrice && (
             <span style={{ color: '#aaa', fontSize: '12px', textDecoration: 'line-through' }}>
               {typeof product.oldPrice === 'number' ? `$${product.oldPrice}.00` : product.oldPrice}
             </span>
          )}
        </div>
      </div>
    </div>
  );
};

// المكون الرئيسي
const LatestProducts = ({ products }) => {
  const [activeTab, setActiveTab] = useState('New Arrival');
  const productList = products.products || [];
  console.log(products)
  const filteredProducts = productList.filter(product => {
    return product
  });

  return (
    <section className="py-5 bg-white text-center">
      <div className="container">
        <h2 className="fw-bold mb-4" style={{ color: '#0D0E43' }}>Latest Products</h2>

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
                fontWeight: activeTab === tab ? '600' : '400',
                transition: 'all 0.3s ease'
              }}
            >{tab}</span>
          ))}
        </div>

        {/* Grid */}
        <div className="row g-4">
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map(p => (
              <div className="col-12 col-md-4" key={p._id || p.id}>
                <ProductCard product={p} />
              </div>
            ))
          ) : (
            <div className="col-12 py-5">
              <p style={{ color: '#aaa' }}>لا توجد منتجات حالياً في قسم "{activeTab}"</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;