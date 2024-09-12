import { Col, Container, Row } from "react-bootstrap";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <section id="footer" style={{ backgroundColor: "#f7fcfc" }}>
      <Container className="mt-5 pt-5">
        <Row>
          <Col>
            <h3 className="mb-3">Medicio</h3>
            <ul className="list-unstyled">
              <li>A108 Adam Street</li>
              <li>new York, NY 535022</li>
            </ul>
            <ul className="list-unstyled">
              <li>
                <b>Phone: </b>+155995548855
              </li>
              <li>
                <b>Email:</b>info@example.com
              </li>
            </ul>
            <ul id="social" className="list-unstyled d-flex">
              <li className="border border-1 rounded-circle p-2 me-3">
                <i
                  className="fa-brands fa-x-twitter"
                  style={{ color: "#626262" }}
                ></i>
              </li>
              <li className="border border-1 rounded-circle p-2 me-3">
                <i className="fa-brands fa-facebook"></i>
              </li>
              <li className="border border-1 rounded-circle p-2 me-3">
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li className="border border-1 rounded-circle p-2 me-3">
                <i className="fa-brands fa-linkedin"></i>
              </li>
            </ul>
          </Col>
          <Col></Col>
          <Col>
            <b>Useful Links</b>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>terms of service</li>
              <li>Privacy policy</li>
            </ul>
          </Col>
          <Col>
            <b>Our Services</b>
            <ul className="list-unstyled">
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Product Management</li>
              <li>Marketing</li>
              <li>Graphic Design</li>
            </ul>
          </Col>
          <Col>
            <b>Hic soluhrh</b>
            <ul className="list-unstyled">
              <li>oihrnbibe3rfd</li>
              <li>fr3oehhnd</li>
              <li>fe3oihidn</li>
              <li>f3eoj</li>
              <li>ojhnhfeoi</li>
            </ul>
          </Col>
          <Col>
            <b>Nobis illum</b>
            <ul className="list-unstyled">
              <li>oihrnbibe3rfd</li>
              <li>fr3oehhnd</li>
              <li>fe3oihidn</li>
              <li>f3eoj</li>
              <li>ojhnhfeoi</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <div className="container text-center">
            <p className="m-0">
              © Copyright <span className="fw-bold">Medicio</span>. All Rights
              Reserved
            </p>
            <p className="m-0">
              Designed by
              <span style={{ color: "#3fbbc0" }}> BootstrapMade</span>
            </p>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
