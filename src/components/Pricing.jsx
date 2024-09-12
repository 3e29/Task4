import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../styles/Pricing.css";
import SectionHeader from "./SectionHeader";
const pricingPlans = [
  {
    title: "Free",
    price: 0,
    features: [
      "Aida dere",
      "Nec feugiat nisl",
      "Nulla at volutpat dola",
      "Pharetra massa",
      "Massa ultricies mi",
    ],
  },
  {
    title: "Business",
    price: 19,
    features: [
      "Aida dere",
      "Nec feugiat nisl",
      "Nulla at volutpat dola",
      "Pharetra massa",
      "Massa ultricies mi",
    ],
    textColor: "text-white",
    backgroundColor: "#3fbbc0",
  },
  {
    title: "Developer",
    price: 29,
    features: [
      "Aida dere",
      "Nec feugiat nisl",
      "Nulla at volutpat dola",
      "Pharetra massa",
      "Massa ultricies mi",
    ],
  },
  {
    title: "Ultimate",
    price: 49,
    features: [
      "Aida dere",
      "Nec feugiat nisl",
      "Nulla at volutpat dola",
      "Pharetra massa",
      "Massa ultricies mi",
    ],
    after: "Advanced",
  },
];
const Pricing = () => {
  return (
    <section id="pricing" className="mb-5 pb-5">
      <Container>
        <SectionHeader
          title="Pricing"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere officiis eveniet impedit quidem"
        />

        <Row>
          {pricingPlans.map((element, index) => (
            <Col lg={3} md={6} sm={12} key={index}>
              <Card className="text-center shadow mt-4">
                <Card.Header
                  className={`p-4 ${element.textColor} ${element.after}`}
                  style={{
                    backgroundColor: element.backgroundColor,
                    color: "#626262",
                  }}
                >
                  {element.title}
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    <span className="fs-3" style={{ color: "#626262" }}>
                      <sup>$</sup>
                      {element.price}
                    </span>{" "}
                    <span className="text-secondary">/ month</span>
                  </Card.Title>
                  <Card.Text>
                    <ul className="p-0 mt-2 list-unstyled">
                      {element.features.map((feature, idx) => (
                        <li className="mb-3" key={idx}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted p-4">
                  <Button
                    style={{ backgroundColor: "#3fbbc0" }}
                    className="border border-0 ps-4 pe-4"
                  >
                    Buy Now
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
