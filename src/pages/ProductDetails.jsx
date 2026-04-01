import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 
import API from '../api/axiosConfig';
const BASE_URL = "http://localhost:5000";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await API.get(`/products/${id}`);
        if (response.status !== 200) throw new Error('المنتج غير موجود');
        const data = response.data;
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("خطأ:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center py-5"><h3>جاري التحميل...</h3></div>;
  if (!product) return <div className="text-center py-5"><h3>المنتج غير موجود</h3></div>;

  return (
    <div className="container py-5" style={{ marginTop: '100px' }}>
      <div className="row g-5 align-items-center">
        <div className="col-md-6 text-center shadow-sm p-4" style={{ backgroundColor: '#f6f7fb', borderRadius: '10px' }}>
          <img src={ BASE_URL + product.image} alt={product.name} className="img-fluid" style={{ maxHeight: '400px' }} />
        </div>

        <div className="col-md-6">
          <h1 className="fw-bold mb-3" style={{ color: '#0D0E43' }}>{product.name}</h1>
          <p className="fs-4 fw-bold" style={{ color: '#FB2E86' }}>${product.price}.00</p>
          <p className="text-muted">{product.description || "تصميم عصري وجودة ممتازة."}</p>

          {/* 3. تعديل الزرار ليقوم بالإضافة عند الضغط */}
          <div className="d-flex gap-3 mt-4">
            <button 
              className="btn btn-lg px-5 text-white" 
              style={{ backgroundColor: '#FB2E86', borderRadius: '5px' }}
              onClick={() => {
                addToCart(product);
                alert("تم إضافة المنتج للعربة! 🛒"); 
              }}
            >
              Add To Cart
            </button>
            <button className="btn btn-outline-secondary btn-lg">♡</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;