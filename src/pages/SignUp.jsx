import React, { useState } from "react";
import { Button, Input, StyledText, Title } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { registerUser } from "../features/auth/authSlice";

function SignUp() {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [btnLoad, setBtnLoad] = useState(false);

  const submit = async (data) => {
    setBtnLoad(true);
    try {
      const resultAction = await dispatch(registerUser(data));
      if (registerUser.fulfilled.match(resultAction)) {
        toast.success("Registration successful!");
        navigate("/app");
      } else {
        toast.error(resultAction.payload || "Registration failed");
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
        Sign up to{" "}
        <StyledText className="text-4xl sm:text-2xl">Explore</StyledText> more
      </Title>
      <div className=" flex flex-col items-center gap-6 justify-center mt-8">
        <div className=" p-px rounded-lg bg-gradient-to-br from-purple-400 via-slate-700 to-purple-400">
          <form
            className=" rounded-lg bg-slate-900/90 px-6 py-4 w-96 sm:w-80"
            onSubmit={handleSubmit(submit)}
          >
            <Input
              label="Name:"
              className="mb-3"
              {...register("name")}
              required
            />
            <Input
              label="E-mail:"
              type="email"
              className="mb-3"
              {...register("email")}
              required
            />
            <Input
              label="Password:"
              type="password"
              className="mb-3"
              {...register("password")}
              required
            />
            <p className="p-1 text-right">
              Already have an Account?{" "}
              <Link
                to="/app/login"
                className="hover:border-b-2 border-b-purple-300 text-purple-200 font-semibold text-lg"
              >
                Log-in
              </Link>
            </p>
            <Button type="submit" className="w-full my-3" isLoading={btnLoad}>
              Sign-up
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
            Continue without register
          </Button>
          <p className=" text-center mt-1">You should register to Checkout</p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
