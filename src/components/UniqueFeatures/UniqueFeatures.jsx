import sofaImg from '../../assets/2de2ab83660b40645da77ab88d969b9136d72dae.png';

const UniqueFeatures = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#F2F0FF' }}>
      <div className="container">
        <div className="row align-items-center">

           <div className="col-md-6 text-center">
            <div className="mx-auto d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: '#FFC0CB',
                borderRadius: '50%',
                width: '400px',
                height: '400px',
              }}>
              <img
                src={sofaImg}
                alt="Sofa"
                style={{ width: '320px', height: '320px', objectFit: 'contain' }}
              />
            </div>
          </div>

           <div className="col-md-6">
            <h2 className="fw-bold mb-4" style={{ color: '#0D0E43', fontSize: '28px' }}>
              Unique Features Of leatest & Trending Poducts
            </h2>

            <ul className="list-unstyled mb-4">
              {[
                { color: '#FB2E86', text: 'All frames constructed with hardwood solids and laminates' },
                { color: '#0D0E43', text: 'Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails' },
                { color: '#2FD0B5', text: 'Arms, backs and seats are structurally reinforced' },
              ].map((item, i) => (
                <li key={i} className="d-flex align-items-start mb-3 gap-2">
                  <span style={{
                    minWidth: '10px', height: '10px', borderRadius: '50%',
                    backgroundColor: item.color, marginTop: '5px', display: 'inline-block'
                  }}></span>
                  <span style={{ fontSize: '13px', color: '#8A8FB9' }}>{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center gap-4">
              <button className="btn fw-bold px-4 py-2" style={{
                backgroundColor: '#FB2E86', color: 'white',
                borderRadius: '4px', fontSize: '14px'
              }}>
                Add To Cart
              </button>
              <div>
                <p className="mb-0 fw-bold" style={{ color: '#0D0E43', fontSize: '14px' }}>B&B Italian Sofa</p>
                <p className="mb-0" style={{ color: '#8A8FB9', fontSize: '13px' }}>$32.00</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UniqueFeatures;