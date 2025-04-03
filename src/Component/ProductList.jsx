import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
        {products && products.length > 0 ? (
          products.map((product) => {
            console.log("Product Image URL:", product.imageUrl);  // Debugging

            return (
              <div key={product.id} className="col">
                <div className="card shadow-lg border-0 rounded-4 h-100">
                  <img
                    src={product.imageUrl}
                    className="card-img-top rounded-top-4"
                    alt={product.name}
                    style={{ height: "200px", objectFit: "cover" }}
                    onError={(e) => {
                      e.target.onerror = null;  // Prevents infinite loop
                      e.target.src = "https://via.placeholder.com/200x200.png?text=No+Image";
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center text-dark fw-bold">
                      {product.name}
                    </h5>
                    <p className="card-text text-muted text-center">
                      {product.description}
                    </p>
                    <p className="card-text text-center fs-5">
                      <strong className="text-success">₹{product.price}</strong>
                    </p>
                    <div className="mt-auto text-center">
                      <a href="#" className="btn btn-dark w-75 rounded-pill">
                        🛒 Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-danger fs-4">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
