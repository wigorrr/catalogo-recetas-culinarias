import React from "react";
import "../styles/style.css";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../img/logo.png";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar
        ClassName="Navigation"
        collapseOnSelect
        expand="sm"
        bg="light"
        variant="light"
      >
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Brand
          className="d-inline-block d-sm-none d-lg-none"
          href="#home"
        >
          <img src={Logo} alt="La Nacion" />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="col-4">
            <Form inline className="d-xs-none">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </div>
          <div className="col-4">
            <Navbar.Brand className="d-block d-xs-none" href="#home">
              <img src={Logo} alt="La Nacion" />
            </Navbar.Brand>
          </div>
          <div className="col-4">
            <Nav className="NavButtons">
              <Button className="Yellow" variant="warning">
                SUSCRIBITE
              </Button>
              <Button variant="outline-primary">INGRESAR</Button>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
