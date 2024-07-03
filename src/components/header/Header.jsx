import { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  const [menu, setMenu] = useState("home");

  return (
    <>
      <header className="sticky z-10 top-0 flex justify-between items-center md:px-6 px-2 py-6 bg-white">
        <h1 className="md:text-4xl text-2xl line-through font-bold text-blue-600 font-['forte'] ">
          <span className="font-bold text-red-600">Food</span>Cart
        </h1>

        <ul className="hidden md:flex items-center gap-4">
          <li>
            <Link
              to="/"
              onClick={() => setMenu("home")}
              className={`font-semibold text-[1.2rem] hover:text-[red] ${
                menu === "home"
                  ? "pb-[2px] border-b-[2px] border-black text-[red]"
                  : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/review"
              onClick={() => setMenu("review")}
              className={`font-semibold text-[1.2rem] hover:text-[red] ${
                menu === "review"
                  ? "pb-[2px] border-b-[2px] border-black text-[red]"
                  : ""
              }`}
            >
              Review
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              onClick={() => setMenu("cart")}
              className={`font-semibold text-[1.2rem] hover:text-[red] ${
                menu === "cart"
                  ? "pb-[2px] border-b-[2px] border-black text-[red]"
                  : ""
              }`}
            >
              Cart
            </Link>
          </li>
        </ul>
        <HamburgerMenu />
        <ul className="flex md:text-base text-sm items-center md:gap-6 gap-1">
          <li className="hover:scale-105">
            <Link
              to="/signin"
              className="bg-red-500 hover:bg-orange-500 text-white md:py-2 md:px-2 px-1 rounded"
            >
              Sign up
            </Link>
          </li>
          <li className="hover:scale-105">
            <Link
              to="/login"
              className="bg-red-500 hover:bg-orange-500 text-white md:py-2 md:px-2 px-1 rounded "
            >
              Log in
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
