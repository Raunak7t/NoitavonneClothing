import React from "react";
import ProductCard from "./ProductCard";

function AllProducts({ products }) {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default AllProducts;
