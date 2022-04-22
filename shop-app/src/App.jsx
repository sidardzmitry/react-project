import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Shop";

const App = () => {
  return (
    <div>
      <React.Fragment>
        <Header />
        <Shop />
        <Footer />
      </React.Fragment>
    </div>
  );
};

export default App;
