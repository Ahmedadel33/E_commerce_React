import { useState } from 'react';
import discountChair from '../../assets/discount-chair.png';

const DiscountItem = () => {
  const [activeTab, setActiveTab] = useState('WoodChair');

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="fw-bold text-center mb-2" style={{ color: '#0D0E43' }}>Discount Item</h2>
        <div className="mx-auto mb-2" style={{ width: '50px', height: '3px', backgroundColor: '#FB2E86' }}></div>

        {/* Tabs */}
        <div className="d-flex justify-content-center gap-4 mb-5">
          {['WoodChair', 'Plastic Chair', 'Sofa Collection'].map(tab => (
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

        <div className="row align-items-center">
          {/* Left - Content */}
          <div className="col-md-6">
            <h3 className="fw-bold mb-2" style={{ color: '#0D0E43', fontSize: '28px' }}>
              20% Discount Of All Products
            </h3>
            <p className="mb-3" style={{ color: '#FB2E86', fontSize: '14px', fontWeight: '600' }}>
              Eams Sofa Compact
            </p>
            <p style={{ color: '#8A8FB9', fontSize: '13px', lineHeight: '1.8' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
            </p>

            <div className="row g-2 mb-4">
              {[
                'Material expose like metals',
                'Clear lines and geometric figures',
                'Simple neutral colours.',
                'Material expose like metals',
              ].map((item, i) => (
                <div key={i} className="col-6 d-flex align-items-center gap-2">
                  <span style={{ color: '#FB2E86' }}>✓</span>
                  <span style={{ fontSize: '12px', color: '#8A8FB9' }}>{item}</span>
                </div>
              ))}
            </div>

            <button className="btn fw-bold px-4 py-2" style={{
              backgroundColor: '#FB2E86', color: 'white',
              borderRadius: '4px', fontSize: '14px'
            }}>
              Shop Now
            </button>
          </div>

           <div className="col-md-6 text-center">
            <div className="mx-auto d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: '#FFC0CB',
                borderRadius: '50%',
                width: '380px',
                height: '380px',
              }}>
              <img
                src={discountChair}
                alt="Sofa"
                style={{ width: '320px', height: '320px', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountItem;