import React from "react";
import ArticlesContainer from "../components/ArticlesContainer";
import Aside from "../components/Aside";
import Tags from "../components/Tags";

class Main extends React.Component {
  render() {
    return (
      <div className="container-main">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
            <div className="row">
              <h1>Acumulado Grilla</h1>
            </div>
            <div className="row">
              <Tags />
            </div>
            <div className="row">
              <ArticlesContainer />
            </div>
          </div>
          <div className="d-xs-none d-sm-3 col-md-3 col-lg-3 clean-padding">
            <Aside />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
