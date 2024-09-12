import { Container, Nav, Navbar } from "react-bootstrap";
import "../styles/NavBar.css";
const NavBar = ({ logo, items }) => {
  return (
    <>
      <section id="nav-section" className="fixed-top">
        <Navbar id="top-bar" className="bg-body-tertiary">
          <Container className="d-flex justify-content-center justify-content-md-between">
            <Navbar.Text className="text-white d-none d-md-block">
              <i className="fa-regular fa-clock text-white"></i> Monday -
              Saturday, 8AM to 10PM
            </Navbar.Text>
            <Navbar.Text className="text-white text-center">
              <i className="fa-solid fa-mobile-screen-button"></i> Call us now
              +1 5589 55488 55
            </Navbar.Text>
          </Container>
        </Navbar>
        <Navbar expand="lg" className="bg-white shadow-sm">
          <Container
            id="main-bar"
            className="justify-content-between sticky-top bg-white"
          >
            <Navbar.Brand href="#home" className="logo flex-sm-grow-1 m-0">
              <img src={logo} alt="medicio" className="" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="border border-0 p-0"
            />
            <button
              id="btn"
              type="button"
              className="btn btn-primary ms-2 me-1 text-nowrap order-lg-1"
            >
              Make an Appointment
            </button>
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="flex-grow-0 flex-wrap bg-light "
            >
              <Nav className="me-auto d-flex gap-2 bg-white">
                {items?.map((element, index) => {
                  return (
                    <Nav.Link
                      key={index}
                      href={`#${element.id}`}
                      className="p-3"
                    >
                      {element.name}
                    </Nav.Link>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
};
export default NavBar;
