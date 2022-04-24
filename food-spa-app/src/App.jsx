import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Category from './pages/Category';
import Recipe from "./pages/Recipe";

const App = () => {
  return (
    <div>
      <React.Fragment>
        <Router>
          <Header />
          <main className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path='/category/:name' element={<Category/>}></Route>
              <Route path='/meal/:id' element={<Recipe/>}></Route>
            </Routes>
          </main>
          <Footer />
        </Router>
      </React.Fragment>
    </div>
  );
};

export default App;
