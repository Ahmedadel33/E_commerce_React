import blog1 from '../../assets/blog1.jpg';
import blog2 from '../../assets/blog2.jpg';
import blog3 from '../../assets/blog3.jpg';

const blogs = [
  { id: 1, img: blog1, author: 'SaberAli', date: '21 August,2020', title: 'Top esssential Trends in 2021', desc: 'More off this less hello samlande lied much over tightly circa horse taped mightly', active: false },
  { id: 2, img: blog2, author: 'Surfauxion', date: '21 August,2020', title: 'Top essential trends in 2021', desc: 'More off this less hello samlande lied much over tightly circa horse taped mightly', active: true },
  { id: 3, img: blog3, author: 'SaberAli', date: '21 August,2020', title: 'Top esssential Trends in 2021', desc: 'More off this less hello samlande lied much over tightly circa horse taped mightly', active: false },
];

const LatestBlog = () => {
  return (
    <section className="py-5 bg-white text-center">
      <div className="container">
        <h2 className="fw-bold mb-2" style={{ color: '#0D0E43' }}>Leatest Blog</h2>
        <div className="mx-auto mb-5" style={{ width: '50px', height: '3px', backgroundColor: '#FB2E86' }}></div>

        <div className="row g-4">
          {blogs.map(blog => (
            <div key={blog.id} className="col-12 col-md-4">
              <div className="card border-0 text-start h-100" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                <img
                  src={blog.img}
                  alt={blog.title}
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                />
                <div className="p-3">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <span style={{ fontSize: '12px', color: '#FB2E86' }}>✏️ {blog.author}</span>
                    <span style={{ fontSize: '12px', color: '#FFA500' }}>📅 {blog.date}</span>
                  </div>
                  <h6 className="fw-bold mb-2" style={{ color: blog.active ? '#FB2E86' : '#0D0E43', fontSize: '14px' }}>
                    {blog.title}
                  </h6>
                  <p style={{ fontSize: '13px', color: '#8A8FB9', lineHeight: '1.6' }}>
                    {blog.desc}
                  </p>
                  <a href="#" style={{ fontSize: '13px', color: blog.active ? '#FB2E86' : '#0D0E43', textDecoration: 'underline' }}>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;