import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SectionHeader from "./SectionHeader";

const Appointment = () => {
  return (
    <section
      id="appointment"
      className="pt-4 pb-5"
      style={{ backgroundColor: "#f7fcfc" }}
    >
      <Container>
        <SectionHeader
          title="Make An Appointment"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere officiis eveniet impedit quidem"
        />

        <Form>
          {/* <Form.Group className="mb-5"> */}
          <Row className="align-items-center g-4">
            <Col lg={4} md={6} sm={12}>
              <Form.Control placeholder="Your Name" className="p-3" />
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Form.Control
                type="email"
                placeholder="Your Email"
                className="p-3"
              />
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Form.Control
                type="number"
                placeholder="Your Phone"
                className="p-3"
              />
            </Col>

            <Col lg={4} md={6} sm={12}>
              <Form.Control type="datetime-local" className="p-3" />
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Form.Select aria-label="Default select example" className="p-3">
                <option>Select Department</option>
                <option value="1">Cardiology</option>
                <option value="2">Neurology</option>
                <option value="3">Hepatology</option>
                <option value="4">Pediatrics</option>
                <option value="5">Ophthalmologists</option>
              </Form.Select>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Form.Select aria-label="Default select example" className="p-3">
                <option>Select Doctor</option>
                <option value="1">Walter White</option>
                <option value="2">Sarah Jhonson</option>
                <option value="3">William Anderson</option>
                <option value="4">Amanda Jepson</option>
              </Form.Select>
            </Col>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                placeholder="Message (Optional)"
                className="h-25 pb-5"
              />
            </Col>
          </Row>
          {/* </Form.Group> */}
          <Button
            id="btn"
            type="button"
            className="btn ps-4 pe-4 pt-2 pb-2 text-nowrap d-block mx-auto mt-4"
          >
            Make an Appointment
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Appointment;
