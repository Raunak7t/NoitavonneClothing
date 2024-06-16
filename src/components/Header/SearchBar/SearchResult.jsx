import "./SearchResult.css";
import { useNavigate } from "react-router-dom";

export const SearchResult = ({ result }) => {
  const navigate = useNavigate();

  return (
    <div
      className="search-result"
      onClick={(e) => {
        navigate(`/app/product-details/${result.id}`);
      }}
    >
      {result.name}
    </div>
  );
};
