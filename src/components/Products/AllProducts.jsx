import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import {
  fetchProducts,
  resetProducts,
} from "../../features/products/productSlice";
import Loading from "../Loading";
import Button from "../Button";

function AllProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const page = useSelector((state) => state.products.page);
  const hasNextPage = useSelector((state) => state.products.hasNextPage);
  const productsRef = useRef(null);
  const [scroll, setScroll] = useState(0);

  console.log(products);

  useEffect(() => {
    dispatch(resetProducts());
    dispatch(fetchProducts({ page }));
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo({
      top: scroll,
    });
  }, [products]);

  const handleLoadMore = () => {
    setScroll(window.scrollY);
    dispatch(fetchProducts({ page }));
  };

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "failed") {
    return <div className="text-center mt-40">Error loading products</div>;
  }

  return (
    <>
      <div ref={productsRef} className="flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center">
        {hasNextPage ? (
          <Button
            className="px-6"
            onClick={handleLoadMore}
            disabled={status === "loading"}
            isLoading={status === "loading"}
          >
            Load more
          </Button>
        ) : (
          <div>No more products</div>
        )}
      </div>
    </>
  );
}

export default AllProducts;
