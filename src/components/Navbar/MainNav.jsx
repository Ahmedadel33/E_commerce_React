import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainNav = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 40px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <div
        onClick={() => navigate('/')}
        style={{ fontSize: '28px', fontWeight: 'bold', color: '#0D0E43', cursor: 'pointer' }}>
        Hekto
      </div>

      <ul style={{
        display: 'flex', gap: '28px', listStyle: 'none',
        margin: 0, padding: 0, color: '#0D0E43', fontSize: '14px'
      }}>
        {['Home', 'Pages', 'Products', 'Blog', 'Shop', 'Contact'].map(link => (
          <li
            key={link}
            onClick={() => {
              if (link === 'Home') navigate('/');
              else if (link === 'Shop') navigate('/shop');
            }}
            style={{ cursor: 'pointer' }}
          >
            {link}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search..."
          style={{
            border: '1px solid #ccc', borderRadius: '4px 0 0 4px',
            padding: '6px 12px', fontSize: '13px', outline: 'none'
          }}
        />
        <button style={{
          backgroundColor: '#FB2E86', color: 'white',
          border: 'none', padding: '7px 12px',
          borderRadius: '0 4px 4px 0', cursor: 'pointer'
        }}>🔍</button>
      </div>
    </nav>
  );
};

export default MainNav;