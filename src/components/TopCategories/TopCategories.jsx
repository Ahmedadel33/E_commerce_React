import { useState } from 'react';
import cat1 from '../../assets/cat1.png';
import cat2 from '../../assets/cat2.png';
import cat3 from '../../assets/cat3.png';
import cat4 from '../../assets/cat4.png';

const categories = [
  { id: 1, name: 'Mini LCW Chair', price: '$56.00', img: cat1, active: true },
  { id: 2, name: 'Mini LCW Chair', price: '$56.00', img: cat2 },
  { id: 3, name: 'Mini LCW Chair', price: '$56.00', img: cat3 },
  { id: 4, name: 'Mini LCW Chair', price: '$56.00', img: cat4 },
];

const TopCategories = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="py-5 bg-white text-center">
      <div className="container">
        <h2 className="fw-bold mb-2" style={{ color: '#0D0E43' }}>Top Categories</h2>
        <div className="mx-auto mb-5" style={{ width: '50px', height: '3px', backgroundColor: '#FB2E86' }}></div>

        <div className="row g-4 justify-content-center">
          {categories.map(cat => (
            <div key={cat.id} className="col-6 col-md-3" onClick={() => setActiveId(cat.id)}>
              <div style={{ position: 'relative', cursor: 'pointer' }}>
                {/* Circle */}
                <div className="mx-auto d-flex align-items-center justify-content-center"
                  style={{
                    width: '220px',
                    height: '220px',
                    borderRadius: '50%',
                    backgroundColor: '#F2F0FF',
                    border: activeId === cat.id ? '3px solid #7E33E0' : '3px solid transparent',
                    position: 'relative',
                    transition: 'all 0.3s ease'
                  }}>
                  <img
                    src={cat.img}
                    alt={cat.name}
                    style={{ width: '160px', height: '160px', objectFit: 'contain' }}
                  />

                  {/* View Shop button */}
                  {activeId === cat.id && (
                    <button className="btn btn-success btn-sm position-absolute"
                      style={{ bottom: '10px', fontSize: '12px', borderRadius: '4px' }}>
                      View Shop
                    </button>
                  )}
                </div>

                <h6 className="fw-bold mt-3 mb-1" style={{ color: '#0D0E43' }}>{cat.name}</h6>
                <p style={{ color: '#FB2E86', fontSize: '14px' }}>{cat.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="d-flex justify-content-center gap-2 mt-3">
          <span className="rounded-circle" style={{ width: '12px', height: '12px', backgroundColor: '#FB2E86', display: 'inline-block' }}></span>
          <span className="rounded-circle" style={{ width: '12px', height: '12px', backgroundColor: '#ccc', display: 'inline-block' }}></span>
          <span className="rounded-circle" style={{ width: '12px', height: '12px', backgroundColor: '#ccc', display: 'inline-block' }}></span>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;