import React, { useContext, useState } from "react";
import Food_Display from "./Food_Display";
import "../../style.css";
import { food_Delivery_contex } from "../../App";
import { FaSearch } from "react-icons/fa";

function Menu_list({ category, setCategory }) {

  const { menu_list, food_list, foodList, setFoodList } =
    useContext(food_Delivery_contex);

  function filterFood(e) {
    const val = food_list.filter((item) => {
      if (
        item.name.toLowerCase().includes(e) ||
        item.category.toLowerCase().includes(e)
      ) {
        return true;
      } else return false;
    });
    setFoodList(val);
  }

  return (
    <div className="py-6 md:px-16 px-10">
      <h1 className="text-2xl font-bold">What would you like to order</h1>
      <div className="flex items-center gap-2 py-4">
        <FaSearch />
        <input
          type="text"
          placeholder="find for Food"
          className="border md:w-[30rem] w-[10rem] px-2"
          // value={inputValue}
          onChange={(e) => filterFood(e.target.value)}
        />
      </div>

      <div className="menu-list my-6 md:w-[70%] sm:w-[70%] w-full md:mx-auto sm:mx-auto">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className="mx-2"
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                src={item.menu_image}
                alt=""
                className="w-full h-full cursor-pointer"
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr className="my-4 border border-black" id="popularFood" />
      <Food_Display
        category={category}
        setCategory={setCategory}
        foodList={foodList}
        setFoodList={setFoodList}
      />
    </div>
  );
}

export default Menu_list;
