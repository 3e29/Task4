import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SectionHeader from "./SectionHeader";
import img0 from "../assets/images/testimonials/testimonials-1.jpg";
import img9 from "../assets/images/testimonials/testimonials-2.jpg";
import img8 from "../assets/images/testimonials/testimonials-3.jpg";
import img7 from "../assets/images/testimonials/testimonials-4.jpg";
import img6 from "../assets/images/testimonials/testimonials-5.jpg";

// Dummy card data for testimonials
const cardData = [
  {
    id: 1,
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: img0,
    name: "Jena Karlis",
    role: "Store Owner",
  },
  {
    id: 2,
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: img9,
    name: "John Doe",
    role: "Manager",
  },
  {
    id: 3,
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: img8,
    name: "Jane Smith",
    role: "Designer",
  },
  {
    id: 4,
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: img7,
    name: "Alice Johnson",
    role: "Developer",
  },
  {
    id: 5,
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: img6,
    name: "Bob Brown",
    role: "Marketing",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="p-4">
        <SectionHeader
          title="Testimonials"
          description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
        <div className="d-flex flex-column align-items-center py-1 pt-3">
          <Container>
            <Row className="justify-content-center">
              <Carousel
                indicators={false}
                activeIndex={activeIndex}
                onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
                controls={false}
                interval={5000}
                slide={false}
              >
                {cardData.map((item, index) => (
                  <Carousel.Item key={index}>
                    <Row className="justify-content-center flex-nowrap">
                      <Col
                        lg={4}
                        sm={12}
                        className={`mb-4 ${index === 1 ? "highlight" : ""}`}
                      >
                        <Card className="border-0">
                          <Card.Body
                            className="bg-light"
                            style={{ height: "160px" }}
                          >
                            <Card.Text>
                              <i className="fa-solid fa-quote-left"></i>{" "}
                              {item.text}{" "}
                              <i className="fa-solid fa-quote-right"></i>
                            </Card.Text>
                          </Card.Body>
                          <div className="p-3 position-relative">
                            <Card.Img
                              variant="bottom"
                              src={item.img}
                              className="rounded-circle position-absolute top-0 translate-middle-y border border-4 border-white "
                              style={{
                                width: "80px",
                                height: "80px",
                                opacity: index === 1 ? 1 : 0.7,
                              }}
                            />
                            <div className="mt-4">
                              <Card.Title>{item.name}</Card.Title>
                              <Card.Text
                                className="fw-light fst-italic"
                                style={{ fontSize: "14px" }}
                              >
                                {item.role}
                              </Card.Text>
                            </div>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Row>
          </Container>

          <div className="text-center mt-4 pt-4">
            {cardData.map((_, index) => (
              <span
                key={index}
                className={`mx-1 ${
                  index === activeIndex ? "bg-primary" : "bg-light"
                } rounded-circle`}
                style={{
                  width: "15px",
                  height: "15px",
                  display: "inline-block",
                  cursor: "pointer",
                  border: "1px solid #3fbbc0",
                }}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
