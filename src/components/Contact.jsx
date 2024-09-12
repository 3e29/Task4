import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "../styles/Contact.css";
import SectionHeader from "./SectionHeader";
const Contact = () => {
  return (
    <section id="CONTACT">
      <SectionHeader
        title="Contact"
        description="We are a company dedicated to providing the best services to our clients. Our commitment to quality is unmatched."
        className="custom-about-header" // Optional extra class for further customization
      />
      <div id="map">
        <iframe
          className="w-100"
          style={{ height: "350px" }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
          allowfullscreen
        ></iframe>
      </div>
      <Container className="mt-5">
        <Row>
          <Col lg={6} sm={12} className="mt-4">
            <Row className="">
              <Col lg={12} sm={12}>
                <Card className="shadow border border-0 p-3">
                  <Card.Header className="bg-white border border-0 d-flex justify-content-center">
                    <i
                      style={{ border: "2px dotted #3fbbc0" }}
                      className="fa-solid fa-location-dot p-3 fs-3 rounded-circle w-auto"
                    ></i>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center">
                      Address
                    </Card.Title>
                    <Card.Text className="d-flex justify-content-center">
                      A108 Adam Street, New York, NY 535022
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="">
              <Col lg={6} sm={12} className="g-4">
                <Card className="shadow border border-0 p-3">
                  <Card.Header className="bg-white border border-0 d-flex justify-content-center">
                    <i
                      style={{ border: "2px dotted #3fbbc0" }}
                      className="fa-solid fa-phone p-3 fs-3 rounded-circle w-auto"
                    ></i>
                  </Card.Header>

                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center">
                      Call us
                    </Card.Title>
                    <Card.Text className="d-flex justify-content-center">
                      +1 5589 55488 55
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} sm={12} className="g-4">
                <Card className="shadow border border-0 p-3">
                  <Card.Header className="bg-white border border-0 d-flex justify-content-center">
                    <i
                      style={{ border: "2px dotted #3fbbc0" }}
                      className="fa-regular fa-envelope p-3 fs-3 rounded-circle w-auto"
                    ></i>
                  </Card.Header>

                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center">
                      Email Us
                    </Card.Title>
                    <Card.Text className="d-flex justify-content-center">
                      info@example.com
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg={6} sm={12} className="mt-4">
            <Form className="shadow h-100 p-4">
              <Row>
                <Col lg={6} sm={12}>
                  <Form.Control placeholder="First name" className="mb-4 p-3" />
                </Col>
                <Col lg={6} sm={12}>
                  <Form.Control placeholder="Last name" className="mb-4 p-3" />
                </Col>
              </Row>
              <Row className="">
                <Col>
                  <Form.Control placeholder="Subject" className="p-3" />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                    placeholder="Message"
                    className="pb-5 overflow-hidden"
                  />
                </Col>
              </Row>
              <Button
                id="btn"
                type="button"
                className="btn ps-4 pe-4 pt-2 pb-2 text-nowrap d-block mx-auto mt-4"
              >
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
