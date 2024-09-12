import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import img1 from "../assets/images/about.jpg";
import img2 from "../assets/images/features.jpg";

import "../styles/AboutUs.css";
import SectionHeader from "./SectionHeader";
import "../styles/SectionHeader.css";
const cardData = [
  {
    icon: "fa-solid fa-user-doctor",
    title: "25",
    text: "Doctors",
  },
  {
    icon: "fa-regular fa-hospital",
    title: "15",
    text: "Departments",
  },
  {
    icon: "fa-solid fa-flask",
    title: "8",
    text: "Research Labs",
  },
  {
    icon: "fa-solid fa-award",
    title: "150",
    text: "Awards",
  },
];
const items = [
  {
    icon: "fa-hand-holding-medical",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores asperiores id dicta in ab rerum, cupiditate officia.",
  },
  {
    icon: "fa-suitcase-medical",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores asperiores id dicta in ab rerum, cupiditate officia.",
  },
  {
    icon: "fa-staff-snake",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores asperiores id dicta in ab rerum, cupiditate officia.",
  },
  {
    icon: "fa-lungs",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores asperiores id dicta in ab rerum, cupiditate officia.",
  },
];
const myStyle = {
  borderColor: "#3fbbc0",
  width: "4rem",
  borderWidth: "1px",
  borderStyle: "solid",
};
const AboutUs = () => {
  return (
    <>
      <section id="ABOUT" className="block about-block mb-5">
        <Container>
          <SectionHeader
            title="About Us"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              officiis eveniet impedit quidem"
          />

          <Row>
            <Col id="video-frame" lg={6} className="mb-3">
              <div className="position-relative">
                <Image src={img1} fluid />
                <div className="position-absolute top-50 start-50 translate-middle rounded-circle ">
                  <i className="fa-solid fa-play text-white position-absolute top-50 start-50 translate-middle"></i>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <h4>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h4>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ListGroup>
                <ListGroup.Item className="bg-white border border-0 border-white">
                  <i className="fa-solid fa-check-double me-2 fs-6"></i>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </ListGroup.Item>
                <ListGroup.Item className="bg-white border border-0 border-white">
                  <i className="fa-solid fa-check-double me-2 fs-6"></i>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </ListGroup.Item>
                <ListGroup.Item className="bg-white border border-0 border-white">
                  <i className="fa-solid fa-check-double me-2 fs-6"></i>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate trideta
                  storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </ListGroup.Item>
              </ListGroup>
              <p className="pt-3">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </Col>
          </Row>
          {/* 
          
          end of first row
          
          
          */}
          <Row className="align-items-center g-5 mt-5 mb-5">
            {cardData.map((card, index) => (
              <Col lg={3} md={6} sm={12} key={index}>
                <Card
                  id="horizontal-card"
                  className="ps-2 bg-white d-flex align-items-center shadow p-3 bg-body-light rounded border border-0"
                >
                  <Card.Body className="w-100 flex-shrink-1">
                    <Row className="">
                      <Col
                        xs={4}
                        className="d-flex justify-content-center align-items-center"
                      >
                        <i className={`fa-solid ${card.icon} fa-2x`}></i>
                      </Col>
                      <Col xs={8}>
                        <Card.Title className="mb-2 mt-2 fs-2 fw-semibold">
                          {card.title}
                        </Card.Title>
                        <Card.Text className="text-nowrap">
                          {card.text}
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {/* 
          
          end of second row
          
          
          */}
          <Row className="mt-5 pt-5">
            <Col id="drug-photo" lg={6} className="mb-3 d-flex">
              <Image
                src={img2}
                fluid
                className="align-self-stretch object-fit-cover"
              />
            </Col>
            <Col id="lists" lg={6}>
              <div className="ps-3">
                <h4>
                  Enim quis est voluptatibus <br /> aliquid consequatur fugiat
                </h4>
                <div className="mt-3 mb-3" style={myStyle}></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <ListGroup>
                {items.map((item, index) => (
                  <ListGroup.Item
                    className="bg-white border border-0 border-white d-flex"
                    key={index}
                  >
                    <div className="width-45 shadow p-3 bg-body-light rounded align-self-start me-4">
                      <i className={`fa-solid ${item.icon} fs-3`}></i>
                    </div>
                    <div>
                      <p>{item.title}</p>
                      <p>{item.description}</p>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;
