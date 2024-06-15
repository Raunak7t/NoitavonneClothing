import React, { useState } from "react";
import Container from "../Container";
import Logo from "../Logo";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "./Logout";
import { RiMenu4Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

function Header() {
  const isLogin = useSelector((state) => state.isLogin);
  const userData = useSelector((state) => state.userData);

  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    {
      path: "/app/my-blogs",
      name: "My Blogs",
      active: isLogin,
      exact: true,
    },
    {
      path: "/app",
      name: "All Blogs",
      active: isLogin,
      exact: true,
    },
    {
      path: "/app/add-blog",
      name: "Add Blog",
      active: isLogin,
    },
    {
      path: "/app/login",
      name: "Log In",
      active: !isLogin,
    },
    {
      path: "/app/signup",
      name: "Sign Up",
      active: !isLogin,
    },
  ];

  return (
    <header className=" bg-slate-800/50 fixed top-0 left-0 right-0 backdrop-blur-md z-50">
      <Container
        className={`h-16 ${
          navOpen ? "sm:h-80" : ""
        } overflow-hidden flex sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-8 sm:gap-4 transition-all duration-500`}
      >
        <div className="min-h-16 flex items-center justify-between sm:w-full">
          <Link to="/">
            <Logo />
          </Link>
          <span
            className="hidden sm:inline text-3xl"
            onClick={() => {
              setNavOpen((prev) => !prev);
            }}
          >
            {navOpen ? <RxCross2 /> : <RiMenu4Fill />}
          </span>
        </div>
        {isLogin && (
          <p className={`text-lg font-semibold w-44 truncate`}>
            Hey, {userData?.name}!
          </p>
        )}
        <nav className={`sm:ml-auto`}>
          <ul className=" flex items-center gap-4 sm:flex-col ">
            {navLinks.map(
              (nav) =>
                nav.active && (
                  <li key={nav.path}>
                    <NavLink
                      to={nav.path}
                      end={nav.exact}
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "border-b-2 border-b-purple-400 bg-slate-700/50"
                            : ""
                        } py-1 px-4 sm:px-8 text-lg font-semibold rounded-md`
                      }
                      onClick={() => {
                        setNavOpen(false);
                      }}
                    >
                      {nav.name}
                    </NavLink>
                  </li>
                )
            )}
            {isLogin && <Logout setNavOpen={setNavOpen} />}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
