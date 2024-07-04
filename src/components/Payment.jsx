import React, { useContext } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { food_Delivery_contex } from "../App";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'

function Payment() {
  const { total } = useContext(food_Delivery_contex);
  const navigate = useNavigate();

  function handlePayment() {
    navigate("/");
  }

  return (
    <>
      <div className="bg-orange-400 relative md:mx-24 mx-4 my-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <FaArrowAltCircleLeft
            onClick={() => navigate("/cart")}
            className="md:text-5xl text-3xl text-white absolute right-4 top-4"
          />
          <div className="pt-20 pb-8">
            <h3 className="text-2xl text-white mb-6 text-center font-bold">
              Checkout Page
            </h3>
            <div className="md:flex justify-around items-center lg:gap-8 gap-4 md:px-12 lg:px-20 px-4">
              <div className="md:w-[22rem] lg:w-[18rem] w-[16rem] mx-auto ">
                <video autoplay="autoplay" loop="loop">
                  <source
                    src="Shot_dribble_pojedynczy_v3.mp4"
                    type="video/mp4 "
                  />
                </video>
              </div>

              <div className="grow">
                <form action="" method="post">
                  <h3 className="mb-4 text-xl text-white font-semibold md:pt-0 pt-10">
                    Enter Your Page
                  </h3>
                  <p className="flex gap-1 lg:gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="border mb-2 py-1 lg:py-2 px-2 rounded w-[8rem] xl:w-[18rem] grow"
                    />
                    <input
                      type="text"
                      placeholder="Enter Address"
                      className="border mb-2 py-1 lg:py-2 px-2 rounded w-[8rem] xl:w-[18rem] grow"
                    />
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Building NO. and Street Name (optional)"
                    className="border mb-2 py-1 lg:py-2 px-2 rounded w-full"
                  />
                  <p className="flex gap-1 lg:gap-4">
                    <input
                      type="number"
                      placeholder="Enter Pincode"
                      className="border mb-2 py-1 lg:py-2 px-2 rounded w-[8rem] xl:w-[18rem] grow"
                    />
                    <input
                      type="number"
                      placeholder="Enter Mobile Number"
                      className="border mb-2 py-1 lg:py-2 px-2 rounded w-[8rem] xl:w-[18rem] grow"
                    />
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Landmark (optional)"
                    className="border mb-2 py-1 lg:py-2  px-2 rounded w-full"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="md:flex justify-between items-center lg:px-36 md:px-20 md:pb-12">
            <p className="flex items-center px-6 md:px-0 text-white font-semibold text-xl">
              <span className="pr-2 ">Net Amount:</span>
              <FaIndianRupeeSign className="text-md" />
              <span>{total}</span>
            </p>
            <p className="text-center py-6">
              <button
                className="bg-blue-600 text-white py-2 px-10 rounded-lg hover:bg-blue-400 duration-200 hover:scale-105"
                onClick={handlePayment}
              >
                Pay
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Payment;
