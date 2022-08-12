import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Login from "./Login";
import Card from "react-bootstrap/Card";
import { latest_movie } from "./movieData";

const Navbars = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [Search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          bg="dark"
          variant="dark"
          expand={expand}
          className="mb-3"
          fixed="top"
        >
          <Container>
            <Navbar.Brand href="#">Uwatch</Navbar.Brand>
            <Form className="d-flex serch_mobile">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 serch_mobile"
                aria-label="Search"  onChange={handleChange} value={Search}
              />
            </Form>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              variant="dark"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="navbar-brand">
                Uwatch
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link href="https://mohammedsabeel.netlify.app/" target="_blank">Portfolio</Nav.Link>
                  <Nav.Link href="#action1">TV</Nav.Link>
                  <Nav.Link href="#action2">Movies</Nav.Link>
                  <Nav.Link href="#action2">Sports</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 desk_search"
                    onChange={handleChange}
                    aria-label="Search"
                    value={Search}
                  />
                </Form>
                <Nav className=" ">
                  <Nav.Link onClick={() => setModalShow(true)}>Login</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Login show={modalShow} onHide={() => setModalShow(false)} />

{
  Search?   <div className="megamenu">
        {
          Search?
          latest_movie.filter((curr) => {
            return curr.category.toLowerCase().includes(Search.toLowerCase())
          }).map((curr) => {
            return (
              <div className="">
                <Card className="search_movie mb-2" >
                  <Card.Img
                    variant="top"
                    src={curr.images}
                    className="w-100 h-100 img_latest img-fluid"
                  />
                </Card>
              </div>
            );
          }):null
          }
      </div>:null
}
   
    </div>
  );
};

export default Navbars;
