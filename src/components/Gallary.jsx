import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import img1 from "../assets/images/gallery/gallery-1.jpg";
import img2 from "../assets/images/gallery/gallery-2.jpg";
import img3 from "../assets/images/gallery/gallery-3.jpg";
import img4 from "../assets/images/gallery/gallery-4.jpg";
import img5 from "../assets/images/gallery/gallery-5.jpg";
import img6 from "../assets/images/gallery/gallery-6.jpg";
import img7 from "../assets/images/gallery/gallery-7.jpg";
import img8 from "../assets/images/gallery/gallery-8.jpg";
import SectionHeader from "./SectionHeader";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <Container className="my-5 text-center">
      {/* Main heading */}

      <SectionHeader
        title="Gallery"
        description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit"
      />

      {/* Image gallery: responsive grid */}
      <Carousel interval={3000} wrap={true} indicators={false}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              src={image} // Make sure these are valid image paths or URLs
              alt={`Slide ${index}`}
              className="d-block w-100"
              style={{ maxHeight: "500px" }} // Adjust based on your needs
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Gallery;
