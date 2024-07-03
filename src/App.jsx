import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Review from "./components/Review";
import Carts from "./components/Carts";
import Payment from "./components/Payment";
import Signin from "./components/Signup";
import Login from "./components/Login";
import { createContext, useEffect, useState } from "react";
import { food_list } from "./foodItems";
import { menu_list } from "./foodItems";

export const food_Delivery_contex = createContext(null);

function App() {

  const [foodList, setFoodList] = useState(food_list);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.price;
    });
    setTotal(sum);
  }, [cart]);


  function hanadleAddTocart(e, foodItem){
    const  newCart = [...cart, foodItem]
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

 

  return (
    <>
      <BrowserRouter>
        <food_Delivery_contex.Provider
          value={{
            food_list,
            menu_list,
            cart,
            setCart,
            hanadleAddTocart,
            foodList,
            setFoodList,
            total,
            setTotal
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/review" element={<Review />} />
            <Route path="/cart" element={<Carts />} />
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </food_Delivery_contex.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
