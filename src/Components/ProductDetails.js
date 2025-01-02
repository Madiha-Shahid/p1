// src/components/ProductDetails.js
import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="text-center mt-5">
      <h1>Product Details</h1>
      <p>Details for Product ID: {id}</p>
    </div>
  );
}

export default ProductDetails;
