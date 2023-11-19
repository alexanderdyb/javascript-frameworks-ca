import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          {/* <Route path="*" element={<RouteNotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
}
