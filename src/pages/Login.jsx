import React, { useState } from "react";
import { Button, Input, StyledText, Title } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginUser } from "../features/auth/authSlice";

function LogIn() {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [btnLoad, setBtnLoad] = useState(false);

  const submit = async (data) => {
    setBtnLoad(true);
    try {
      const resultAction = await dispatch(loginUser(data));
      if (loginUser.fulfilled.match(resultAction)) {
        toast.success("Login successful!");
        navigate("/app");
      } else {
        toast.error(resultAction.payload || "Login failed");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setBtnLoad(false);
    }
  };

  return (
    <div className="pb-14">
      <Title>
        Welcome!{" "}
        <StyledText className="text-4xl sm:text-2xl ">Log in</StyledText> to
        continue
      </Title>
      <div className=" flex flex-col items-center gap-6 justify-center mt-8">
        <div className=" p-px rounded-lg bg-gradient-to-br from-purple-400 via-slate-700 to-purple-400">
          <form
            className=" rounded-lg bg-slate-900/90 px-6 py-4 w-96 sm:w-80"
            onSubmit={handleSubmit(submit)}
          >
            <Input
              {...register("email")}
              required
              label="E-mail:"
              type="email"
              className="mb-3"
            />
            <Input
              {...register("password")}
              required
              label="Password:"
              type="password"
              className="mb-3"
            />
            <p className="p-1 text-right">
              Don't have an Account?{" "}
              <Link
                to="/app/signup"
                className="hover:border-b-2 border-b-purple-300 text-purple-200 font-semibold text-lg"
              >
                Sign-up
              </Link>
            </p>
            <Button className="w-full my-3" type="submit" isLoading={btnLoad}>
              Log-in
            </Button>
          </form>
        </div>
        <div>
          <Button
            className=" w-96 sm:w-80 opacity-75 from-violet-600/60 to-violet-300/60"
            onClick={() => {
              navigate("/app");
            }}
            isLoading={btnLoad}
          >
            Continue without log-in
          </Button>
          <p className=" text-center mt-1">You should log-in to Checkout</p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
