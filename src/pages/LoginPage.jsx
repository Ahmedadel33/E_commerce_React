import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useAuth();

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email format';
    if (!password.trim()) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleLogin = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
      login(user);
      navigate('/');
    } else {
      setErrors({ general: 'Invalid email or password' });
    }
  };

  return (
    <>
      <div className="py-4" style={{ backgroundColor: '#F2F0FF' }}>
        <div className="container">
          <h3 className="fw-bold mb-1" style={{ color: '#0D0E43' }}>My Account</h3>
          <p className="mb-0" style={{ fontSize: '13px', color: '#8A8FB9' }}>
            Home . Pages . <span style={{ color: '#FB2E86' }}>My Account</span>
          </p>
        </div>
      </div>

      <div className="py-5" style={{ backgroundColor: 'white' }}>
        <div className="container d-flex justify-content-center">
          <div className="card border-0 p-5 shadow-sm" style={{ width: '100%', maxWidth: '500px', borderRadius: '8px' }}>
            <h4 className="fw-bold text-center mb-2" style={{ color: '#0D0E43' }}>Login</h4>
            <p className="text-center mb-4" style={{ fontSize: '13px', color: '#8A8FB9' }}>
              Please login using account detail bellow.
            </p>

            {errors.general && (
              <div className="alert alert-danger py-2 text-center" style={{ fontSize: '13px' }}>
                {errors.general}
              </div>
            )}

            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); setErrors({...errors, email: '', general: ''}); }}
                placeholder="Email Address"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                style={{ fontSize: '13px', padding: '12px', borderRadius: '4px' }}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-2">
              <input
                type="password"
                value={password}
                onChange={e => { setPassword(e.target.value); setErrors({...errors, password: '', general: ''}); }}
                placeholder="Password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                style={{ fontSize: '13px', padding: '12px', borderRadius: '4px' }}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <a href="#" className="mb-3 d-block" style={{ fontSize: '13px', color: '#FB2E86', textDecoration: 'none' }}>
              Forgot your password?
            </a>

            <button
              onClick={handleLogin}
              className="btn w-100 fw-bold py-2 mb-3"
              style={{ backgroundColor: '#FB2E86', color: 'white', borderRadius: '4px', fontSize: '14px' }}
            >
              Sign In
            </button>

            <p className="text-center mb-0" style={{ fontSize: '13px', color: '#8A8FB9' }}>
              Don't have an Account?{' '}
              <span onClick={() => navigate('/register')} style={{ color: '#FB2E86', cursor: 'pointer' }}>
                Create account
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;