import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../api/axiosConfig";
import { useCart } from "../context/CartContext";

const BASE_URL = "http://localhost:5000";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();  

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await API.get("/products");
      setProducts(Array.isArray(res.data.products) ? res.data.products : []);
      setError(null);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError( "internal server error connection" );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="text-center py-5">
        <h3>    waiting for products... </h3>
      </div>
    );

  if (error) return <div className="alert alert-danger m-5">{error}</div>;

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5" style={{ color: "#151875" }}>
      all products
      </h2>

      <div className="row g-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-3" key={product._id}>
              <div className="card h-100 shadow-sm border-0">

                 <Link
                  to={`/product/${product._id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    className="text-center p-3"
                    style={{ backgroundColor: "#f6f7fb" }}
                  >
                    <img
                      src={
                        product.image
                          ? `${BASE_URL}${product.image}`
                          : "https://via.placeholder.com/150"
                      }
                      alt={product.name}
                      className="img-fluid"
                      style={{ height: "150px", objectFit: "contain" }}
                    />
                  </div>

                  <div className="card-body text-center">
                    <h6 className="fw-bold">{product.name}</h6>
                    <p className="text-danger fw-bold">${product.price}</p>
                  </div>
                </Link>

                <div className="text-center mb-3">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => addToCart(product)}
                  >
                    إضافة للسلة
                  </button>
                </div>

              </div>
            </div>
          ))
        ) : (
          <div className="text-center w-100">
            <h4> No products available at the moment. Add your first product from the admin page!  !</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;