import { useState } from 'react';

const offers = [
  { id: 1, icon: '🚚', title: '24/7 Support', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
  { id: 2, icon: '🎧', title: '24/7 Support', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
  { id: 3, icon: '🏆', title: '24/7 Support', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
  { id: 4, icon: '🕐', title: '24/7 Support', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
];

const OfferCard = ({ offer }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card border-0 p-4 text-center h-100"
      style={{
        backgroundColor: hovered ? '#FB2E86' : 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
    >
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>{offer.icon}</div>
      <h5 className="fw-bold mb-3" style={{ color: hovered ? 'white' : '#0D0E43' }}>
        {offer.title}
      </h5>
      <p className="mb-0" style={{ fontSize: '13px', lineHeight: '1.6', color: hovered ? 'white' : '#8A8FB9' }}>
        {offer.desc}
      </p>
    </div>
  );
};

const ShopexOffer = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#F7F7F7' }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-2" style={{ color: '#0D0E43' }}>What Shopex Offer!</h2>
        <div className="mx-auto mb-5" style={{ width: '50px', height: '3px', backgroundColor: '#FB2E86' }}></div>

        <div className="row g-4">
          {offers.map(o => (
            <div className="col-6 col-md-3" key={o.id}>
              <OfferCard offer={o} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopexOffer;