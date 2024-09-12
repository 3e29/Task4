import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import heroImg1 from "../assets/images/hero-carousel/hero-carousel-1.jpg";
import heroImg2 from "../assets/images/hero-carousel/hero-carousel-2.jpg";
import heroImg3 from "../assets/images/hero-carousel/hero-carousel-3.jpg";
import "../styles/Hero.css";
const heroImages = [heroImg1, heroImg2, heroImg3];
const cardData = [
  {
    icon: "fa-heart-pulse",
    title: "Lorem, ipsum",
    text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
  },
  {
    icon: "fa-pills",
    title: "Lorem, ipsum",
    text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
  },
  {
    icon: "fa-thermometer",
    title: "Lorem, ipsum",
    text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
  },
  {
    icon: "fa-dna",
    title: "Lorem, ipsum",
    text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
  },
];

const Hero = () => {
  return (
    <>
      <Carousel id="carousel" fade className="">
        {heroImages.map((element, index) => {
          return (
            <Carousel.Item
              key={index}
              className="carousel-container over-flow-hidden"
            >
              <img src={element} alt="" className="object-fit-cover w-100" />
              <Carousel.Caption
                id="carousel-caption"
                className="bg-light p-2 border-top border-5 mb-5"
                style={{ "--bs-bg-opacity": 0.8 }}
              >
                <h3 className="text-dark mt-2 mb-2">
                  Temporibus autem quibusdam
                </h3>
                <p className="text-dark">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Autem explicabo aut non exercitationem quo enim voluptatum
                  placeat quaerat impedit sed fugit itaque, hic eius modi? Vel
                  praesentium consequuntur voluptatibus iusto!
                </p>
                <button
                  id="btn"
                  type="button"
                  className="btn text-light text-nowrap mt-2 mb-4 ps-5 pe-5 pb-2"
                >
                  Read More
                </button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <section className="mt-5 mb-5 ">
        <Container>
          <Row className="align-items-center g-5">
            {cardData.map((card, index) => (
              <Col lg={3} md={6} sm={12} key={index}>
                <Card
                  // style={{ width: "18rem" }}
                  className="ps-4 bg-white d-flex align-items-start shadow p-3 bg-body-light rounded border border-0"
                >
                  <i className={`fa-solid ${card.icon} mt-3 fs-1 ps-3`}></i>
                  <Card.Body>
                    <Card.Title className="mb-2 mt-2 fs-5 fw-bold">
                      {card.title}
                    </Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <div
        id="cta"
        className="text-center bg-primary pt-5 pb-5"
        style={{ backgroundColor: "#3fbbc0 !important" }}
      >
        <Container className="">
          <h3 className="mb-2 fs-1 text-white">
            In an emergency? Need help now?
          </h3>
          <p className="mb-4 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quos
            quod, assumenda quisquam et vel nihil sint autem, possimus iste nemo
            placeat alias quidem, illum atque. Magni, odit nam. Quos?
          </p>
          <Button
            variant="outline-light"
            className="text-white ps-4 pe-4 pt-2 pb-2 border border-2"
          >
            Make an Appointment
          </Button>
        </Container>
      </div>
    </>
  );
};

export default Hero;
