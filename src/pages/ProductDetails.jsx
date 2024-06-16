import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductById,
  selectProductDetails,
} from "../features/products/productSlice";
import { FaStar } from "react-icons/fa";
import { Button } from "../components";

function ProductDetails() {
  const { pid } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector(selectProductDetails);

  useEffect(() => {
    dispatch(fetchProductById(pid));
  }, [dispatch, pid]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  const {
    id,
    name,
    image,
    description,
    price,
    size,
    color,
    brand,
    popularity,
  } = productDetails;

  return (
    <div className="flex justify-center gap-10 pt-12">
      <div className="w-1/3 h-96">
        <img
          className="w-full h-full object-cover bg-slate-600"
          src={image}
          alt={name}
        />
      </div>
      <div className="w-1/3">
        <div className="font-bold text-4xl ">{name}</div>
        <div className="flex items-center gap-2 mt-2 text-xl">
          <FaStar /> {popularity}
        </div>
        <div className="font-bold text-5xl mt-3">${price}</div>
        <div className="mt-6 font-bold text-lg">Description:</div>
        <p>{description}</p>
        <div className="mt-6 font-bold text-lg">Other detials:</div>
        <div className="flex gap-3 mt-2">
          <p className="inline-block bg-slate-200 rounded-full px-3 py-1 font-semibold text-slate-700">
            Brand: {brand}
          </p>
          <p className="inline-block bg-slate-200 rounded-full px-3 py-1 font-semibold text-slate-700">
            Color: {color}
          </p>
          <p className="inline-block bg-slate-200 rounded-full px-3 py-1 font-semibold text-slate-700">
            Size: {size}
          </p>
        </div>
        <div className="mt-12 w-full">
          <Button className="w-full">BUY NOW</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
