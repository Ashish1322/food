import { useContext } from "react";
import { food_Delivery_contex } from "../../App";
import "../../style.css";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function Food_Display({ category }) {
  const { foodList, hanadleAddTocart } = useContext(food_Delivery_contex);
  const navigate = useNavigate();

  return (
    <div className="py-6">
      <h3 className="text-2xl font-bold">Popular Foods</h3>
      <div className="food-display-list">
        {foodList.map((item) => {
          if (category === "All" || category === item.category)
            return (
              <div
                key={item._id}
                className="w-full m-auto shadow-md hover:shadow-xl border rounded-lg relative"
              >
                <p className="absolute right-0 top-4 px-3 bg-white rounded-l-full font-bold text-center flex items-center">
                  {item.rating}
                  <FaStar className="inline text-yellow-500 ml-1" />
                </p>
                <img src={item.image} alt="" className="rounded-t-lg w-full " />
                <div className="flex justify-end p-1">
                  <div className="flex p-1 bg-yellow-500 rounded-full ">
                    <p className="text-xl font-bold text-red-700 rounded-full bg-yellow-300 px-[10px] mr-2">
                      -
                    </p>
                    <span className="">{}</span>
                    <p className="text-xl font-bold text-red-700 rounded-full bg-yellow-300 px-2">
                      +
                    </p>
                  </div>
                </div>
                <div className="pb-4 px-3">
                  <h2 className="text-xl font-bold pb-4">{item.name}</h2>
                  <p className="text-[gray] font-semibold flex items-center px-2">
                    <span className="pr-2">Price:</span>
                    <span className="flex items-center">
                      <FaIndianRupeeSign className="text-sm" />
                      {item.price}/serving
                    </span>
                  </p>
                  <div className="flex justify-between items-center text-[gray] px-2">
                    <p className="flex items-center">
                      <CiDeliveryTruck />
                      <span>Free Delivery</span>
                    </p>
                    <p className="flex items-center">
                      <IoIosTimer />
                      <span>15-30 mins</span>
                    </p>
                  </div>
                  <div className="flex justify-between pt-4">
                    <button
                      className="bg-orange-500 hover:bg-red-500 text-white py-2 px-4 rounded"
                      onClick={(e) => hanadleAddTocart(e, item)}
                    >
                      Add To Cart
                    </button>
                    <button
                      className="bg-orange-500 hover:bg-red-500 text-white py-2 px-4 rounded"
                      onClick={() => navigate("/cart")}
                    >
                      Go To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default Food_Display;
