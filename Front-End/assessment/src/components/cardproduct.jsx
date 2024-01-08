import React from "react";
import { Link } from 'react-router-dom';




const CardProduct = ({ product }) => {
  console.log(product);
  return (
      <div className="card">
        <h1>
            {product.title}
        </h1>
        <p>
            {product.price}
        </p>
        <p>
            {product.supplier}
        </p>
        <Link
      to={`/SingleProductPage/${product.id}`}
      style={{ textDecoration: "none" }}
    >
        <button>view More</button>
        </Link>
      </div>

  );
};

export default CardProduct;
