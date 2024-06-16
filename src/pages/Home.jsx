import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categories/categorySlice";
import {
  fetchProducts,
  resetProducts,
} from "../features/products/productSlice";
import { AllProducts, Select, Button, Loading } from "../components";

const colors = ["All", "Black", "White", "Blue", "Red", "Green"];
const brands = ["All", "Nike", "Adidas", "Zara", "H&M", "Levi's"];
const sizes = ["All", "S", "M", "L", "XL", "XXL"];

function Home() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const page = useSelector((state) => state.products.page);
  const hasNextPage = useSelector((state) => state.products.hasNextPage);

  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popularity");
  const [order, setOrder] = useState("desc");
  const [color, setColor] = useState("All");
  const [brand, setBrand] = useState("All");
  const [size, setSize] = useState("All");
  const [scroll, setScroll] = useState(0);
  const categorySelectRef = useRef(null);

  useEffect(() => {
    dispatch(fetchCategories({ category }));
    dispatch(resetProducts());
    dispatch(
      fetchProducts({ category, page: 1, sortBy, order, color, brand, size })
    );
  }, [dispatch, category, sortBy, order, color, brand, size]);

  useEffect(() => {
    window.scrollTo({
      top: scroll,
    });
  }, [products]);

  const handleCategoryChange = () => {
    setCategory(categorySelectRef.current.value);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleLoadMore = () => {
    setScroll(window.scrollY);
    dispatch(fetchProducts({ page }));
  };

  const filteredProducts = products.filter((product) => {
    return (
      (color === "All" || product.color === color) &&
      (brand === "All" || product.brand === brand) &&
      (size === "All" || product.size === size) &&
      (category === "All" || product.category === category)
    );
  });

  return (
    <div>
      <div className="top-bar flex justify-between items-center gap-4 flex-wrap-reverse pt-2">
        <div className="flex gap-3">
          <div className="flex gap-1 items-center">
            <p>Color:</p>
            <select
              className="bg-[#222f3e] py-1 px-2 rounded border"
              onChange={handleColorChange}
              value={color}
            >
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-1 items-center">
            <p>Brand:</p>
            <select
              className="bg-[#222f3e] py-1 px-2 rounded border"
              onChange={handleBrandChange}
              value={brand}
            >
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-1 items-center">
            <p>Size:</p>
            <select
              className="bg-[#222f3e] py-1 px-2 rounded border"
              onChange={handleSizeChange}
              value={size}
            >
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <p>Sort by:</p>
          <select
            className="bg-[#222f3e] py-1 px-2 rounded border"
            onChange={handleSortByChange}
            value={sortBy}
          >
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
          </select>
          <select
            className="bg-[#222f3e] py-1 px-2 rounded border"
            onChange={handleOrderChange}
            value={order}
          >
            <option value="asc">Low to high</option>
            <option value="desc">High to low</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <p>Category:</p>
          <Select
            options={categories.map((c) => c.name)}
            className="w-32"
            ref={categorySelectRef}
            onChange={handleCategoryChange}
          />
        </div>
      </div>

      {status === "loading" ? (
        <Loading />
      ) : status === "failed" ? (
        <div className="text-center mt-40">Error loading products</div>
      ) : (
        <>
          <AllProducts products={filteredProducts} />
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
      )}
    </div>
  );
}

export default Home;
