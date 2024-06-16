import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductById,
  selectProductDetails,
} from "../features/products/productSlice";
import {
  Loading,
  ProductCard,
  Select,
  StyledText,
  Title,
  Button,
} from "../components";
import { toast } from "react-toastify";

function Checkout() {
  const { pid } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector(selectProductDetails);

  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductById(pid));
  }, [dispatch, pid]);

  if (!user) {
    navigate("/app");
  }

  if (!productDetails) {
    return <Loading />;
  }
  return (
    <div>
      <Title>
        Proceed <StyledText className="text-4xl sm:text-2xl ">to</StyledText>{" "}
        Checkout
      </Title>
      <div className="flex justify-center gap-4 mt-10 flex-wrap-reverse">
        <div className="w-96">
          <Select label="Delivery country:" options={["India", "USA", "UK"]} />
          <div className="flex text-2xl mt-8 gap-8 items-end">
            <h2>TOTAL TO PAY:</h2>
            <h1 className="text-3xl">${productDetails.price}</h1>
          </div>
          <Button
            className="w-full mt-24"
            onClick={() => {
              toast.success("Order Placed!");
            }}
          >
            PLACE ORDER
          </Button>
        </div>
        <ProductCard product={productDetails} />
      </div>
    </div>
  );
}

export default Checkout;
