import { useNavigate } from 'react-router-dom';

const MainNav = () => {
  const navigate = useNavigate();

  const menuLinks = ['Home', 'Shop' ];

  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '16px 40px', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <div onClick={() => navigate('/')} style={{ fontSize: '28px', fontWeight: 'bold', color: '#0D0E43', cursor: 'pointer' }}>
        Hekto
      </div>

      <ul style={{ display: 'flex', gap: '28px', listStyle: 'none', alignItems: 'center', margin: 0 }}>
        {menuLinks.map(link => (
          <li key={link} onClick={() => navigate(link === 'Home' ? '/' : `/${link.toLowerCase()}`)} style={{ cursor: 'pointer', color: '#0D0E43' }}>
            {link}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input placeholder="Search..." style={{ border: '1px solid #ccc', padding: '6px' }} />
        <button style={{ backgroundColor: '#FB2E86', color: 'white', border: 'none', padding: '7px 12px' }}>🔍</button>
      </div>
    </nav>
  );
};

export default MainNav;