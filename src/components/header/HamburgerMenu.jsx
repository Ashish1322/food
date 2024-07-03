import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineReviews } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function HamburgerMenu({menu, setMenu}) {

  return (
    <>
      <ul className="flex md:hidden items-center md:gap-4 gap-2">
        <li>
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={`font-semibold text-[1.2rem] hover:text-[red] ${
              menu === "home"
                ? "text-red-400"
                : ""
            }`}
          >
            <IoHomeSharp />
          </Link>
        </li>
        <li>
          <Link
            to="/review"
            onClick={() => setMenu("review")}
            className={`font-semibold text-[1.2rem] hover:text-[red] ${
              menu === "review"
                ? "text-red-400"
                : ""
            }`}
          >
            <MdOutlineReviews />
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            onClick={() => setMenu("cart")}
            className={`font-semibold text-[1.2rem] hover:text-[red] ${
              menu === "cart"
                ? "text-red-400"
                : ""
            }`}
          >
            <FaCartShopping />
          </Link>
        </li>
      </ul>
    </>
  );
}

export default HamburgerMenu;
