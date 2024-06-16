import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
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
  } = product;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/app/product-details/${id}`);
  };

  return (
    <div
      className="w-60 rounded-xl overflow-hidden shadow-lg m-6 cursor-pointer bg-slate-900 hover:bg-slate-800"
      onClick={handleClick}
    >
      <img
        className="w-full h-40 object-cover bg-slate-800"
        src={image}
        alt={name}
      />
      <div className="font-bold text-xl mx-2">{name}</div>
      <div className="flex items-center justify-between mx-4">
        <div className="flex items-center gap-2">
          <FaStar /> {popularity}
        </div>
        <div className="font-bold text-2xl">${price}</div>
      </div>

      <div className="flex gap-3 justify-center my-2">
        <span className="bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-slate-700">
          {size}
        </span>
        <span className="bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-slate-700">
          {color}
        </span>
        <span className="bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-slate-700">
          {brand}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
