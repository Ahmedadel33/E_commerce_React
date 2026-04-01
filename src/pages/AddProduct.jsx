import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axiosConfig';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState(''); //
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('category', category);  
    formData.append('description', description);
    formData.append('image', image);
    
    try {
      await API.post(
        "/products",
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      );
      
      alert('Product Added Successfully!');
      navigate('/shop');
    } catch (err) {
      console.error("Error details:", err.response?.data || err.message);
      alert(`Failed to add product: ${err.response?.data?.message || 'Check Console'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      padding: '40px', 
      maxWidth: '600px', 
      margin: '50px auto', 
      backgroundColor: '#fff', 
      boxShadow: '0 0 20px rgba(0,0,0,0.1)', 
      borderRadius: '10px' 
    }}>
      <h2 style={{ textAlign: 'center', color: '#0D0E43' }}>
        Add Product (Upload Image)
      </h2>
      
      <form onSubmit={handleSubmit} style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '15px' 
      }}>
        {/* Name */}
        <input 
          type="text" 
          placeholder="Product Name" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)} 
          style={inputStyle} 
        />
        
        {/* Price */}
        <input 
          type="number" 
          placeholder="Price" 
          required 
          value={price}
          onChange={(e) => setPrice(e.target.value)} 
          style={inputStyle} 
        />
        
  
        <input 
          type="text" 
          placeholder="Category (e.g., Electronics, Clothing)" 
          required 
          value={category}
          onChange={(e) => setCategory(e.target.value)} 
          style={inputStyle} 
        />
        
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Upload Image:
          </label>
          <input 
            type="file" 
            accept="image/*" 
            required 
            onChange={(e) => setImage(e.target.files[0])} 
            style={{ width: '100%' }}
          />
        </div>
        
        <textarea 
          placeholder="Product Description" 
          value={description}
          onChange={(e) => setDescription(e.target.value)} 
          style={{ ...inputStyle, minHeight: '100px' }}
        />
        
        <button 
          type="submit" 
          disabled={loading} 
          style={{
            ...btnStyle,
            opacity: loading ? 0.6 : 1,
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Uploading...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

const inputStyle = { 
  width: '100%', 
  padding: '12px', 
  borderRadius: '5px', 
  border: '1px solid #ccc',
  fontSize: '14px'
};

const btnStyle = { 
  backgroundColor: '#FB2E86', 
  color: 'white', 
  border: 'none', 
  padding: '12px', 
  borderRadius: '5px', 
  fontSize: '16px',
  fontWeight: 'bold'
};

export default AddProduct;