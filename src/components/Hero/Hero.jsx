import heroChair from '../../assets/hero-chair.png';

const Hero = () => {
  return (
    <section style={{
      backgroundColor: '#F2F0FF',
      padding: '60px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: '400px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Left Content */}
      <div style={{ maxWidth: '500px', zIndex: 1 }}>
        <p style={{ color: '#FB2E86', fontSize: '14px', marginBottom: '8px' }}>
          Best Furniture For Your Casa...
        </p>
        <h1 style={{
          color: '#0D0E43',
          fontSize: '48px',
          fontWeight: 'bold',
          lineHeight: '1.2',
          marginBottom: '16px'
        }}>
          New Furniture Collection<br />Trends in 2020
        </h1>
        <p style={{ color: '#8A8FB9', fontSize: '14px', marginBottom: '32px', lineHeight: '1.6' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magni sunt adipiscing
          in labores parens.
        </p>
        <button style={{
          backgroundColor: '#FB2E86',
          color: 'white',
          border: 'none',
          padding: '12px 32px',
          borderRadius: '4px',
          fontSize: '14px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Shop Now
        </button>

        {/* Dots */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '32px' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FB2E86', display: 'inline-block' }}></span>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ccc', display: 'inline-block' }}></span>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ccc', display: 'inline-block' }}></span>
        </div>
      </div>

      {/* Right Image */}
      <div style={{ position: 'relative' }}>
        {/* 50% off badge */}
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: '#2FD0B5',
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          fontWeight: 'bold',
          zIndex: 2
        }}>
          <span>50%</span>
          <span>off</span>
        </div>

        {/* Circle background */}
        <div style={{
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          backgroundColor: '#FBCFE8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img
            src={heroChair}
            alt="Featured Chair"
            style={{ width: '320px', height: '320px', objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;