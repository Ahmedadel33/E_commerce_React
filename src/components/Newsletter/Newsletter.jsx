import newsletterBg from '../../assets/newsletter-bg.jpg';
import brands from '../../assets/brands.png';

const Newsletter = () => {
  return (
    <>
       <section style={{
        backgroundImage: `url(${newsletterBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 40px',
        textAlign: 'center',
      }}>
        <h2 className="fw-bold mb-2" style={{ color: '#0D0E43', fontSize: '28px' }}>
          Get Leatest Update By Subscribe
        </h2>
        <h2 className="fw-bold mb-4" style={{ color: '#0D0E43', fontSize: '28px' }}>
          Our Newslater
        </h2>
        <button className="btn fw-bold px-5 py-2" style={{
          backgroundColor: '#FB2E86',
          color: 'white',
          borderRadius: '4px',
          fontSize: '14px'
        }}>
          Shop Now
        </button>
      </section>

       <section className="py-4 bg-white">
        <div className="container">
          <img
            src={brands}
            alt="Brands"
            style={{ width: '100%', objectFit: 'contain', opacity: '0.5' }}
          />
        </div>
      </section>
    </>
  );
};

export default Newsletter;