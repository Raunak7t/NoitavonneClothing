import React, { useState } from "react";
import Container from "../Container";
import Logo from "../Logo";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiMenu4Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import UserLogout from "./UserLogout";

import { SearchBar } from "./SearchBar/SearchBar";
import { SearchResultsList } from "./SearchBar/SearchResultsList";

function Header() {
  const user = useSelector((state) => state.auth.user);

  const [results, setResults] = useState([]);

  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    {
      path: "/app/login",
      name: "Log In",
      active: !user,
    },
    {
      path: "/app/signup",
      name: "Sign Up",
      active: !user,
    },
  ];

  return (
    <header className=" bg-slate-900/70 fixed top-0 left-0 right-0 backdrop-blur-md z-50">
      <Container
        className={`h-16 ${
          navOpen ? "sm:h-64" : "sm:h-28"
        } overflow-hidden flex sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-8 sm:gap-0 transition-all duration-500`}
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
        <div className="mx-auto w-80">
          <SearchBar setResults={setResults} />
          {results && results.length > 0 && (
            <SearchResultsList results={results} />
          )}
        </div>
        <nav className={`sm:ml-auto sm:mt-4`}>
          <ul className=" flex items-center gap-4 sm:flex-col ">
            <li>
              <NavLink
                to="/app"
                end="true"
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
                Home
              </NavLink>
            </li>
            {user ? (
              <UserLogout />
            ) : (
              navLinks.map(
                (nav) =>
                  nav.active && (
                    <li key={nav.path}>
                      <NavLink
                        to={nav.path}
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
              )
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
