import { Card, Col, Container, Row } from "react-bootstrap";
import img1 from "../assets/images/doctors/doctors-1.jpg";
import img2 from "../assets/images/doctors/doctors-2.jpg";
import img3 from "../assets/images/doctors/doctors-3.jpg";
import img4 from "../assets/images/doctors/doctors-4.jpg";
import SectionHeader from "./SectionHeader";
const items = [
  {
    img: img1,
    name: "Walter White",
    description: "Chief Medical Officer",
  },
  {
    img: img2,
    name: "Sarah Jhonson",
    description: "Anesthesiologist",
  },
  {
    img: img3,
    name: "William Anderson",
    description: "Cardiology",
  },
  {
    img: img4,
    name: "Amanda Jepson",
    description: "Neurosurgeon",
  },
];
const Doctors = () => {
  return (
    <section
      id="DOCTORS"
      className="pt-5 pb-5"
      style={{ backgroundColor: "#f7fcfc" }}
    >
      <Container>
        <SectionHeader
          title="Doctors"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere officiis eveniet impedit quidem"
        />

        <Row className="align-items-center">
          {items.map((element, index) => (
            <Col lg={3} md={6} sm={12} key={index}>
              <Card className="shadow mb-5 bg-body-tertiary rounded g-3">
                <Card.Header className="p-0">
                  <Card.Img
                    variant="top"
                    src={element.img}
                    // className="h-100 w-100"
                  />
                </Card.Header>

                <Card.Body className="pt-4 pb-4">
                  <Card.Title className="fs-3">{element.name}</Card.Title>
                  <Card.Text className="fs-5">{element.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Doctors;
