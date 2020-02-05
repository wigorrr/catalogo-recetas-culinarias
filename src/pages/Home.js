import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Main from "../components/Main";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Banner />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Home;
