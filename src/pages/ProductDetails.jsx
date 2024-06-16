import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { pid } = useParams();

  

  return <div>ProductDetails {pid}</div>;
}

export default ProductDetails;
