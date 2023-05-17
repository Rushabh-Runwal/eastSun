import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer.js";
import Header from "./Components/Header/Header.js";
import Mainsection from "./Components/Mainsection/Mainsection.js";
// import Twomainsection from "./Components/Mainsection/Twomainsection/Twomainsection.js";
// import IntroInfo from "./Components/Mainsection/IntroInfo.js";
import Mac from "./Components/applePages/Mac/Mac.js";
import Four0Four from "./Components/applePages/Four0Four/Four0Four.js";
import Iphone from "./Components/applePages/Iphone/Iphone.js";
import ProductPage from "./Components/applePages/ProductPage/ProductPage.js";
import Ipad from "./Components/applePages/Ipad/Ipad.js";
function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Mainsection />} />
          <Route path="/Mac" element={<Mac />} />
          <Route path="/Ipad" element={<Ipad />} />
          <Route path="/Iphone" element={<Iphone />} />
          <Route path="/Iphone/:product_id" element={<ProductPage />} />
          <Route path="*" element={<Four0Four />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
