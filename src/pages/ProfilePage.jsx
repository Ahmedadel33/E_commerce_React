import { useState, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();
  const fileRef = useRef();

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [avatar, setAvatar] = useState(user?.avatar || null);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passError, setPassError] = useState('');
  const [passSuccess, setPassSuccess] = useState('');
  const [infoSuccess, setInfoSuccess] = useState('');

  const orders = user?.orders || [];

  const statusColor = (status) => {
    if (status === 'Delivered') return 'success';
    if (status === 'Pending') return 'warning';
    return 'danger';
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        const updatedUser = { ...user, avatar: reader.result };
        login(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInfoSave = () => {
    const updatedUser = { ...user, name, email };
    login(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setInfoSuccess('Profile updated successfully!');
    setTimeout(() => setInfoSuccess(''), 3000);
  };

  const handlePasswordChange = () => {
    setPassError('');
    setPassSuccess('');
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (oldPassword !== savedUser.password) {
      setPassError('Old password is incorrect');
      return;
    }
    if (newPassword.length < 6) {
      setPassError('New password must be at least 6 characters');
      return;
    }
    if (newPassword !== confirmPassword) {
      setPassError('Passwords do not match');
      return;
    }
    const updatedUser = { ...user, password: newPassword };
    login(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setPassSuccess('Password changed successfully!');
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setPassSuccess(''), 3000);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="py-4" style={{ backgroundColor: '#F2F0FF' }}>
        <div className="container">
          <h3 className="fw-bold mb-1" style={{ color: '#0D0E43' }}>My Profile</h3>
          <p className="mb-0" style={{ fontSize: '13px', color: '#8A8FB9' }}>
            Home . <span style={{ color: '#FB2E86' }}>My Profile</span>
          </p>
        </div>
      </div>

      <div className="py-5" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="container">
          <div className="row g-4">

            {/* Left - Avatar Card */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm text-center p-4" style={{ borderRadius: '16px' }}>
                <div className="position-relative mx-auto mb-3" style={{ width: '120px', height: '120px' }}>
                  <div style={{
                    width: '120px', height: '120px', borderRadius: '50%',
                    overflow: 'hidden', border: '4px solid #FB2E86',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: '#F2F0FF'
                  }}>
                    {avatar
                      ? <img src={avatar} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      : <span style={{ fontSize: '52px' }}>👤</span>
                    }
                  </div>
                  <button
                    onClick={() => fileRef.current.click()}
                    className="btn btn-sm position-absolute d-flex align-items-center justify-content-center"
                    style={{
                      bottom: '4px', right: '4px', backgroundColor: '#FB2E86',
                      color: 'white', borderRadius: '50%', width: '28px', height: '28px',
                      padding: '0', fontSize: '12px', border: '2px solid white'
                    }}>✏️</button>
                  <input type="file" ref={fileRef} accept="image/*" style={{ display: 'none' }} onChange={handleAvatarChange} />
                </div>

                <h5 className="fw-bold mb-1" style={{ color: '#0D0E43' }}>{user?.name}</h5>
                <p className="mb-3" style={{ color: '#8A8FB9', fontSize: '13px' }}>{user?.email}</p>

                <hr />

                <div className="d-flex justify-content-around mb-3">
                  <div>
                    <h6 className="fw-bold mb-0" style={{ color: '#0D0E43' }}>{orders.length}</h6>
                    <p className="mb-0" style={{ fontSize: '12px', color: '#8A8FB9' }}>Orders</p>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0" style={{ color: '#0D0E43' }}>
                      {orders.filter(o => o.status === 'Pending').length}
                    </h6>
                    <p className="mb-0" style={{ fontSize: '12px', color: '#8A8FB9' }}>Pending</p>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0" style={{ color: '#0D0E43' }}>
                      {orders.filter(o => o.status === 'Delivered').length}
                    </h6>
                    <p className="mb-0" style={{ fontSize: '12px', color: '#8A8FB9' }}>Delivered</p>
                  </div>
                </div>

                <button onClick={handleLogout} className="btn w-100 fw-bold"
                  style={{ backgroundColor: '#FB2E86', color: 'white', borderRadius: '8px', fontSize: '14px' }}>
                  Logout
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="col-md-8 d-flex flex-column gap-4">

              {/* Personal Info */}
              <div className="card border-0 shadow-sm p-4" style={{ borderRadius: '16px' }}>
                <h6 className="fw-bold mb-4 d-flex align-items-center gap-2" style={{ color: '#0D0E43' }}>
                  <span style={{ backgroundColor: '#FB2E86', width: '4px', height: '20px', display: 'inline-block', borderRadius: '4px' }}></span>
                  Personal Information
                </h6>
                {infoSuccess && <div className="alert alert-success py-2" style={{ fontSize: '13px' }}>{infoSuccess}</div>}
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '12px', color: '#8A8FB9' }}>Full Name</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)}
                      className="form-control" style={{ fontSize: '13px', borderRadius: '8px' }} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '12px', color: '#8A8FB9' }}>Email Address</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                      className="form-control" style={{ fontSize: '13px', borderRadius: '8px' }} />
                  </div>
                </div>
                <button onClick={handleInfoSave} className="btn fw-bold mt-3 px-4"
                  style={{ backgroundColor: '#FB2E86', color: 'white', borderRadius: '8px', fontSize: '13px' }}>
                  Save Changes
                </button>
              </div>

              {/* Change Password */}
              <div className="card border-0 shadow-sm p-4" style={{ borderRadius: '16px' }}>
                <h6 className="fw-bold mb-4 d-flex align-items-center gap-2" style={{ color: '#0D0E43' }}>
                  <span style={{ backgroundColor: '#7E33E0', width: '4px', height: '20px', display: 'inline-block', borderRadius: '4px' }}></span>
                  Change Password
                </h6>
                {passError && <div className="alert alert-danger py-2" style={{ fontSize: '13px' }}>{passError}</div>}
                {passSuccess && <div className="alert alert-success py-2" style={{ fontSize: '13px' }}>{passSuccess}</div>}
                <div className="row g-3">
                  <div className="col-md-12">
                    <label className="form-label" style={{ fontSize: '12px', color: '#8A8FB9' }}>Old Password</label>
                    <input type="password" value={oldPassword} onChange={e => setOldPassword(e.target.value)}
                      className="form-control" style={{ fontSize: '13px', borderRadius: '8px' }} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '12px', color: '#8A8FB9' }}>New Password</label>
                    <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)}
                      className="form-control" style={{ fontSize: '13px', borderRadius: '8px' }} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '12px', color: '#8A8FB9' }}>Confirm Password</label>
                    <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
                      className="form-control" style={{ fontSize: '13px', borderRadius: '8px' }} />
                  </div>
                </div>
                <button onClick={handlePasswordChange} className="btn fw-bold mt-3 px-4"
                  style={{ backgroundColor: '#7E33E0', color: 'white', borderRadius: '8px', fontSize: '13px' }}>
                  Change Password
                </button>
              </div>

              {/* Orders */}
              <div className="card border-0 shadow-sm p-4" style={{ borderRadius: '16px' }}>
                <h6 className="fw-bold mb-4 d-flex align-items-center gap-2" style={{ color: '#0D0E43' }}>
                  <span style={{ backgroundColor: '#2FD0B5', width: '4px', height: '20px', display: 'inline-block', borderRadius: '4px' }}></span>
                  My Orders
                </h6>
                {orders.length === 0 ? (
                  <p style={{ color: '#8A8FB9', fontSize: '13px', textAlign: 'center' }}>No orders yet</p>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-hover align-middle" style={{ fontSize: '13px' }}>
                      <thead className="table-light">
                        <tr style={{ color: '#8A8FB9' }}>
                          <th>Order ID</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map(order => (
                          <tr key={order.id}>
                            <td className="fw-bold" style={{ color: '#0D0E43' }}>{order.id}</td>
                            <td style={{ color: '#8A8FB9' }}>{order.date}</td>
                            <td>
                              <span className={`badge bg-${statusColor(order.status)}`} style={{ fontSize: '11px' }}>
                                {order.status}
                              </span>
                            </td>
                            <td className="fw-bold" style={{ color: '#FB2E86' }}>{order.total}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;