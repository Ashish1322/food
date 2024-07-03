import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className=" bg-black">
        <div className=" px-6 py-6 text-white flex justify-between">
          <ul className="text-sm">
            <li className="text-lg">Company</li>
            <li className="pt-2">About</li>
            <li className="pt-2">Team</li>
            <li className="pt-2">Careers</li>
            <li className="pt-2">Blog</li>
          </ul>
          <ul className="text-sm">
            <li className="text-lg">Legal</li>
            <li className="pt-2">Terms & Conditons</li>
            <li className="pt-2">Refund & Cancellation</li>
            <li className="pt-2">Privacy Policy</li>
            <li className="pt-2">Cookies Policy</li>
          </ul>
          <div>
            <p className="text-lg">Follow us</p>
            <ul className="flex justify-between items-center py-2">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaXTwitter />
              </li>
            </ul>
          </div>
        </div>
        <div className="text-white">
          <hr />
          <p className="text-center py-4 font-semibold">
            All rights reserved &copy; FoodCart
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
