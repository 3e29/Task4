import { useState } from "react";
import { Container, Row, Col, ListGroup, Card, Image } from "react-bootstrap";
import img1 from "../assets/images/departments-1.jpg";
import img2 from "../assets/images/departments-2.jpg";
import img3 from "../assets/images/departments-3.jpg";
import img4 from "../assets/images/departments-4.jpg";
import img5 from "../assets/images/departments-5.jpg";
import SectionHeader from "./SectionHeader";
// Sample department data
const departmentsData = {
  Cardiology: {
    title: "Cardiology",
    description:
      "Omnis blanditiis saepe eos autem qui sunt debitis porro quia.",
    content:
      "Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui.",
    image: img1,
  },
  Neurology: {
    title: "Neurology",
    description:
      "Omnis blanditiis saepe eos autem qui sunt debitis porro quia.",
    content:
      "Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae.",
    image: img2,
  },
  Hepatology: {
    title: "Hepatology",
    description:
      "Omnis blanditiis saepe eos autem qui sunt debitis porro quia.",
    content:
      "Minus reiciendis repudiandae omnis. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut.",
    image: img3,
  },
  Pediatrics: {
    title: "Pediatrics",
    description:
      "Omnis blanditiis saepe eos autem qui sunt debitis porro quia.",
    content:
      "Occaecati sed est sint aut vitae molestiae, recusandae ut non quam ut quod eius qui.",
    image: img4,
  },
  Ophthalmologists: {
    title: "Ophthalmologists",
    description:
      "Omnis blanditiis saepe eos autem qui sunt debitis porro quia.",
    content:
      "Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui.",
    image: img5,
  },
};

const Departments = () => {
  const [activeDepartment, setActiveDepartment] = useState("Ophthalmologists");

  return (
    <section id="DEPARTMENTS">
      <Container className="my-5">
        <SectionHeader
          title="Departments"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere officiis eveniet impedit quidem"
        />
        <Row>
          {/* Left side: Department list */}
          <Col md={3}>
            <ListGroup>
              {Object.keys(departmentsData).map((department) => (
                <ListGroup.Item
                  key={department}
                  action
                  onClick={() => setActiveDepartment(department)}
                  className="border-start-0 border-top-0 border-bottom-0"
                  style={{
                    cursor: "pointer",
                    backgroundColor: "white",

                    color: department === activeDepartment ? "#3fbbc0" : "#000",
                    borderRight:
                      department === activeDepartment
                        ? "4px solid #3fbbc0"
                        : "none",
                  }}
                >
                  {department}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Right side: Department content */}
          <Col md={9}>
            <Card className="p-4 border-0">
              <Row>
                <Col md={8}>
                  <h3>{departmentsData[activeDepartment].title}</h3>
                  <h5 className="text-muted">
                    {departmentsData[activeDepartment].description}
                  </h5>
                  <p>{departmentsData[activeDepartment].content}</p>
                </Col>
                <Col md={4}>
                  <Image
                    src={departmentsData[activeDepartment].image}
                    fluid
                    alt={departmentsData[activeDepartment].title}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Departments;
