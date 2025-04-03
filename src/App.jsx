import React, { useEffect, useState } from "react";
import ProductList from "./Component/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaFilter, FaSort } from "react-icons/fa";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // Stores filtered results
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // Category filter
  const [searchTerm, setSearchTerm] = useState(""); // Search input
  const [sortOrder, setSortOrder] = useState("asc"); // Sort order

  // Fetch products
  useEffect(() => {
    fetch("http://localhost:8080/api/product")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products. Server may be down.");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Initial filtered state
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Fetch categories
  useEffect(() => {
    fetch("http://localhost:8080/api/category")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // 🔍 Search & Filter Logic
  useEffect(() => {
    let filtered = [...products];

    // Search filtering
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filtering
    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    // Sorting by price
    filtered.sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, sortOrder, products]);

  return (
    <div className="app-container bg-dark text-light min-vh-100 py-5">
      <div className="container">
        {/* Store Title */}
        <h1 className="text-center mt-4 mb-4 fw-bold display-3 text-uppercase">
          🛍️ Trendy Deals
        </h1>

        {/* Search & Filter Section */}
        <div className="row justify-content-center mb-4">
          {/* 🔍 Search Bar */}
          <div className="col-md-4">
            <div className="input-group shadow-lg">
              <span className="input-group-text bg-primary text-white">
                <FaSearch />
              </span>
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search for Products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* 📂 Category Dropdown */}
          <div className="col-md-3">
            <div className="input-group shadow-lg">
              <span className="input-group-text bg-secondary text-white">
                <FaFilter />
              </span>
              <select
                className="form-select bg-secondary text-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* ⬆⬇ Sorting Dropdown */}
          <div className="col-md-3">
            <div className="input-group shadow-lg">
              <span className="input-group-text bg-info text-white">
                <FaSort />
              </span>
              <select
                className="form-select bg-info text-white"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Listing */}
        {loading ? (
          <div className="d-flex justify-content-center align-items-center vh-50">
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div className="text-center text-danger fs-4 m-5 p-5">
            ⚠️ {error}
          </div>
        ) : filteredProducts.length > 0 ? (
          <ProductList products={filteredProducts} />
        ) : (
          <p className="text-center text-warning fs-4 m-5 p-5">
            😞 No products found.
          </p>
        )}
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .search-input {
            transition: 0.3s ease-in-out;
          }
          .search-input:focus {
            border-color: #0d6efd;
            box-shadow: 0 0 10px rgba(13, 110, 253, 0.5);
          }

          .form-select, .input-group-text {
            border-radius: 10px;
          }

          .form-select:hover, .input-group-text:hover {
            opacity: 0.9;
          }

          .input-group {
            border-radius: 10px;
          }

          .bg-dark {
            background: linear-gradient(135deg, #141e30 0%, #243b55 100%);
          }
        `}
      </style>
    </div>
  );
}

export default App;
