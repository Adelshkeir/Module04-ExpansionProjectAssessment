import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import React from "react";
import SignInPage from "./SignInPage";
import Admin from "./pages/admin";
import SingleProductPage from "./pages/singleproductpage";
// import SigninPage from "./SignInPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/Admin" element={<Admin />}></Route>
      <Route path="/SingleProductPage/:id" element={<SingleProductPage />}></Route>
        <Route path="/SignIn" element={<SignInPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
