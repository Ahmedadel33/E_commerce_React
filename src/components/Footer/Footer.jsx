import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer>
       <div className="py-5" style={{ backgroundColor: '#EEEFFB' }}>
        <div className="container">
          <div className="row g-4">

            {/* Col 1 - Logo + Email */}
            <div className="col-12 col-md-3">
              <h4 className="fw-bold mb-4" style={{ color: '#0D0E43', fontFamily: 'serif' }}>Hekto</h4>
              <div className="d-flex mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter Email Address"
                  className="form-control border-0"
                  style={{ borderRadius: '4px 0 0 4px', fontSize: '12px' }}
                />
                <button className="btn fw-bold" style={{
                  backgroundColor: '#FB2E86', color: 'white',
                  borderRadius: '0 4px 4px 0', fontSize: '12px', whiteSpace: 'nowrap'
                }}>
                  Sign Up
                </button>
              </div>
              <p className="mb-1" style={{ fontSize: '13px', color: '#8A8FB9' }}>Contact Info</p>
              <p style={{ fontSize: '12px', color: '#8A8FB9' }}>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>

            {/* Col 2 - Categories */}
            <div className="col-6 col-md-3">
              <h6 className="fw-bold mb-4" style={{ color: '#0D0E43' }}>Catagories</h6>
              <ul className="list-unstyled">
                {['Laptops & Computers', 'Cameras & Photography', 'Smart Phones & Tablets', 'Video Games & Consoles', 'Waterproof Headphones'].map((item, i) => (
                  <li key={i} className="mb-2">
                    <a href="#" style={{ fontSize: '13px', color: '#8A8FB9', textDecoration: 'none' }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

             <div className="col-6 col-md-3">
              <h6 className="fw-bold mb-4" style={{ color: '#0D0E43' }}>Customer Care</h6>
              <ul className="list-unstyled">
                {['My Account', 'Discount', 'Returns', 'Orders History', 'Order Tracking'].map((item, i) => (
                  <li key={i} className="mb-2">
                    <a href="#" style={{ fontSize: '13px', color: '#8A8FB9', textDecoration: 'none' }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

             <div className="col-6 col-md-3">
              <h6 className="fw-bold mb-4" style={{ color: '#0D0E43' }}>Pages</h6>
              <ul className="list-unstyled">
                {['Blog', 'Browse the Shop', 'Category', 'Pre-Built Pages', 'Visual Composer Elements', 'WooCommerce Pages'].map((item, i) => (
                  <li key={i} className="mb-2">
                    <a href="#" style={{ fontSize: '13px', color: '#8A8FB9', textDecoration: 'none' }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

       <div className="py-3" style={{ backgroundColor: '#E7E4F8' }}>
        <div className="container d-flex justify-content-between align-items-center">
          <p className="mb-0" style={{ fontSize: '13px', color: '#8A8FB9' }}>
            ©Webecy - All Rights Reserved
          </p>
          <div className="d-flex gap-2">
            {['f', 'in', 't'].map((icon, i) => (
              <a key={i} href="#" className="d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: '32px', height: '32px', backgroundColor: '#0D0E43', color: 'white', fontSize: '12px', textDecoration: 'none' }}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;