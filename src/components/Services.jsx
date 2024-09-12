import { Card, Col, Container, Row } from "react-bootstrap";
import SectionHeader from "./SectionHeader";
const items = [
  {
    icon: "fa-heart-pulse",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores asperiores id dicta in ab rerum, cupiditate officia.",
  },
  {
    icon: "fa-pills",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores asperiores id dicta in ab rerum, cupiditate officia.",
  },
  {
    icon: "fa-hospital-user",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores asperiores id dicta in ab rerum, cupiditate officia.",
  },
  {
    icon: "fa-dna",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores asperiores id dicta in ab rerum, cupiditate officia.",
  },
  {
    icon: "fa-wheelchair",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores asperiores id dicta in ab rerum, cupiditate officia.",
  },
  {
    icon: "fa-notes-medical",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores asperiores id dicta in ab rerum, cupiditate officia.",
  },
];
const Services = () => {
  return (
    <section id="SERVICES" className="pb-5">
      <Container>
        <SectionHeader
          title="Services"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere officiis eveniet impedit quidem"
        />

        <Row className="align-items-center g-5">
          {items.map((element, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <Card className="border border-0 ">
                <Card.Header className="bg-white border border-0 d-flex justify-content-center">
                  <i
                    className={`fa-solid ${element.icon} mt-3 fs-1 shadow p-4 mb-2 bg-body-white rounded-circle w-auto`}
                  ></i>
                </Card.Header>

                <Card.Body>
                  <Card.Title className="d-flex justify-content-center">
                    {element.title}
                  </Card.Title>
                  <Card.Text className="d-flex justify-content-center text-center">
                    {element.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
