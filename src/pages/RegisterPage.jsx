import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email format';
    if (!password.trim()) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleRegister = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    navigate('/login');
  };

  return (
    <>
      <div className="py-4" style={{ backgroundColor: '#F2F0FF' }}>
        <div className="container">
          <h3 className="fw-bold mb-1" style={{ color: '#0D0E43' }}>My Account</h3>
          <p className="mb-0" style={{ fontSize: '13px', color: '#8A8FB9' }}>
            Home . Pages . <span style={{ color: '#FB2E86' }}>Create Account</span>
          </p>
        </div>
      </div>

      <div className="py-5" style={{ backgroundColor: 'white' }}>
        <div className="container d-flex justify-content-center">
          <div className="card border-0 p-5 shadow-sm" style={{ width: '100%', maxWidth: '500px', borderRadius: '8px' }}>
            <h4 className="fw-bold text-center mb-2" style={{ color: '#0D0E43' }}>Create Account</h4>
            <p className="text-center mb-4" style={{ fontSize: '13px', color: '#8A8FB9' }}>
              Please fill in the details below to create your account.
            </p>

            <div className="mb-3">
              <input
                type="text"
                value={name}
                onChange={e => { setName(e.target.value); setErrors({...errors, name: ''}); }}
                placeholder="Full Name"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                style={{ fontSize: '13px', padding: '12px', borderRadius: '4px' }}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); setErrors({...errors, email: ''}); }}
                placeholder="Email Address"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                style={{ fontSize: '13px', padding: '12px', borderRadius: '4px' }}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-4">
              <input
                type="password"
                value={password}
                onChange={e => { setPassword(e.target.value); setErrors({...errors, password: ''}); }}
                placeholder="Password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                style={{ fontSize: '13px', padding: '12px', borderRadius: '4px' }}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <button
              onClick={handleRegister}
              className="btn w-100 fw-bold py-2 mb-3"
              style={{ backgroundColor: '#FB2E86', color: 'white', borderRadius: '4px', fontSize: '14px' }}
            >
              Create Account
            </button>

            <p className="text-center mb-0" style={{ fontSize: '13px', color: '#8A8FB9' }}>
              Already have an account?{' '}
              <span onClick={() => navigate('/login')} style={{ color: '#FB2E86', cursor: 'pointer' }}>
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;