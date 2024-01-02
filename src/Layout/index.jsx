import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import React, { createContext, useReducer } from "react";
import ShoppingCart from "../components/ShoppingCart";

export const ThemeContext = createContext();

export default function Layout() {
  const initialState = { cart: [], total: 0 };
  const [state, dispatch] = useReducer(ShoppingCart, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <Navbar />
      <Outlet />
      <Footer />
    </ThemeContext.Provider>
  );
}
