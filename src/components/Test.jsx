import Carousel from "react-bootstrap/Carousel";

export default function Test() {
  const testimonial = [
    {
      content:
        "Over all though it was a great experience and we have had lots of great feedback. We already started promoting our next event and I have been approached by 4 other companies who want to know more about it as they want to use it for their own events.",
      author: "Sarah M., Director of Events",
    },
    {
      content:
        "I cannot tell you how much we loved using this silent auction software. Everything was seamless…from set up, to bidding, to payment. We will absolutely use MyEvent next year.",
      author: "Sarah M., CCHS Foundation",
    },
    {
      content:
        "I tried MyEvent instead of typical paper raffle tickets. The system was easy to set up online and people who couldn't attend the event were still able to enter the raffle, which was HUGE bump in revenue.",
      author: "Alexander B., Pan-Mass Challenge",
    },
    {
      content:
        "MyEvent is a great way to bring in money for your Fund A Need. The 24/7 tech support allows you to feel confident, and the platform makes your Fund a Need so much easier to run. Well definitely be using MyEvent again.",
      author: "Amy C., One Less Orphan Fund",
    },
  ];

  return (
    <div>
      <Carousel interval={1000}>
        {testimonial.map((c, index) => {
          return (
            <Carousel.Item interval={5000} key={index}>
              <div style={{ height: 500, background: "black", color: "white" }}>
                <p>{c.content}</p>
              </div>
              <Carousel.Caption>
                <p>{c.author}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

// import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
// import { useState } from "react";
// import "../styles/Testimonials.css";

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleButtonClick = (index) => {
//     setCurrentIndex(index);
//   };

//   const getVisibleCards = () => {
//     const totalCards = cardData.length;
//     const visibleCards = [];

//     // Calculate indices for the current, previous, and next cards
//     const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
//     const nextIndex = (currentIndex + 1) % totalCards;

//     visibleCards.push(cardData[prevIndex]); // Previous card
//     visibleCards.push(cardData[currentIndex]); // Current card
//     visibleCards.push(cardData[nextIndex]); // Next card

//     return visibleCards;
//   };

//   return (
//     <section id="testimonials">
//       <Container>
//         <div className="main-heading text-center mt-5 mb-5">
//           <h2 className="pb-2">Testimonials</h2>
//           <div className="line border border-2 mx-auto"></div>
//           <p className="pt-2">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
//             officiis eveniet impedit quidem
//           </p>
//         </div>

//         <div>
//           <Carousel
//             activeIndex={Math.floor(currentIndex / 3)}
//             controls={false}
//             indicators={false}
//           >
//             {Array.from({ length: Math.ceil(cardData.length / 3) }).map(
//               (_, index) => (
//                 <Carousel.Item key={index}>
//                   <Row className="align-items-center">
//                     {getVisibleCards().map((card) => (
//                       <Col lg={4} md={4} sm={12} xs={12} key={card.id}>
//                         <Card className="border border-0">
//                           <Card.Body
//                             className="bg-light"
//                             style={{ height: "160px" }}
//                           >
//                             <Card.Text>
//                               <i className="fa-solid fa-quote-left"></i>
//                               {card.text}
//                               <i className="fa-solid fa-quote-right"></i>
//                             </Card.Text>
//                           </Card.Body>
//                           <div className="p-3 position-relative">
//                             <Card.Img
//                               variant="bottom"
//                               src={card.img}
//                               className="rounded-circle position-absolute top-0 translate-middle-y border border-5 border-white"
//                             />
//                             <div className="mt-4">
//                               <Card.Title>{card.name}</Card.Title>
//                               <Card.Text>{card.role}</Card.Text>
//                             </div>
//                           </div>
//                         </Card>
//                       </Col>
//                     ))}
//                   </Row>
//                 </Carousel.Item>
//               )
//             )}
//           </Carousel>

//           {/* Buttons below the carousel */}
//           <div className="d-flex justify-content-center mt-3">
//             {cardData.map((_, index) => (
//               <Button
//                 key={index}
//                 variant="primary"
//                 className="mx-1"
//                 onClick={() => handleButtonClick(index)}
//               >
//                 {index + 1}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };
// export default Testimonials;

// {
//   /* <Carousel>
//           <Carousel.Item>
//             <Row className="align-items-center">
//               <Col lg={4} sm={12}>
//                 <Card className="border border-0 ">
//                   <Card.Body className="bg-light" style={{ height: "160px" }}>
//                     <Card.Text>
//                       <i className="fa-solid fa-quote-left"></i>
//                       Some quick example text to build on the card title and
//                       make up the bulk of the card's content. Some quick example
//                       text to build on the card title and make up the bulk of
//                       the card's content.
//                       <i className="fa-solid fa-quote-right"></i>
//                     </Card.Text>
//                   </Card.Body>
//                   <div className="p-3 position-relative">
//                     <Card.Img
//                       variant="bottom"
//                       src={img0}
//                       className=" rounded-circle position-absolute top-0 translate-middle-y border border-5 border-white"
//                     />
//                     <div className="mt-4">
//                       <Card.Title>jena Karlis</Card.Title>
//                       <Card.Text>Store Owner</Card.Text>
//                     </div>
//                   </div>
//                 </Card>
//               </Col>
//             </Row>
//           </Carousel.Item>
//         </Carousel> */
// }
// {
//   /* <Carousel>
//           {Array.from({ length: Math.ceil(cardData.length / 3) }).map(
//             (_, index) => (
//               <Carousel.Item key={index}>
//                 <Row className="align-items-center">
//                   {cardData.slice(index * 3, index * 3 + 3).map((card) => (
//                     <Col lg={4} sm={12} key={card.id}>
//                       <Card className="border border-0">
//                         <Card.Body
//                           className="bg-light"
//                           style={{ height: "160px" }}
//                         >
//                           <Card.Text>
//                             <i className="fa-solid fa-quote-left"></i>
//                             {card.text}
//                             <i className="fa-solid fa-quote-right"></i>
//                           </Card.Text>
//                         </Card.Body>
//                         <div className="p-3 position-relative">
//                           <Card.Img
//                             variant="bottom"
//                             src={card.img}
//                             className="rounded-circle position-absolute top-0 translate-middle-y border border-5 border-white"
//                           />
//                           <div className="mt-4">
//                             <Card.Title>{card.name}</Card.Title>
//                             <Card.Text>{card.role}</Card.Text>
//                           </div>
//                         </div>
//                       </Card>
//                     </Col>
//                   ))}
//                 </Row>
//               </Carousel.Item>
//             )
//           )}
//         </Carousel> */
// }

// {
//   /* <div>
//           <Carousel
//             activeIndex={Math.floor(currentIndex / 3)}
//             controls={false}
//             indicators={false}
//           >
//             {Array.from({ length: Math.ceil(cardData.length / 3) }).map(
//               (_, index) => (
//                 <Carousel.Item key={index}>
//                   <Row className="align-items-center">
//                     {cardData
//                       .slice(index * 3, index * 3 + 3)
//                       .map((card, idx) => (
//                         <Col lg={4} sm={12} key={card.id}>
//                           <Card className="border border-0">
//                             <Card.Body
//                               className="bg-light"
//                               style={{ height: "160px" }}
//                             >
//                               <Card.Text>
//                                 <i className="fa-solid fa-quote-left"></i>
//                                 {card.text}
//                                 <i className="fa-solid fa-quote-right"></i>
//                               </Card.Text>
//                             </Card.Body>
//                             <div className="p-3 position-relative">
//                               <Card.Img
//                                 variant="bottom"
//                                 src={card.img}
//                                 className="rounded-circle position-absolute top-0 translate-middle-y border border-5 border-white"
//                               />
//                               <div className="mt-4">
//                                 <Card.Title>{card.name}</Card.Title>
//                                 <Card.Text>{card.role}</Card.Text>
//                               </div>
//                             </div>
//                           </Card>
//                         </Col>
//                       ))}
//                   </Row>
//                 </Carousel.Item>
//               )
//             )}
//           </Carousel>
//           <div className="d-flex justify-content-center mt-3">
//             {cardData.map((_, index) => (
//               <Button
//                 key={index}
//                 variant="primary"
//                 className="mx-1"
//                 onClick={() => handleButtonClick(index)}
//               >
//                 {index + 1}
//               </Button>
//             ))}
//           </div>
//         </div> */
// }

// {
//   /* <Carousel
//           activeIndex={Math.floor(currentIndex / 3)}
//           controls={false}
//           indicators={false}
//         >
//           {Array.from({ length: Math.ceil(cardData.length / 3) }).map(
//             (_, index) => (
//               <Carousel.Item key={index}>
//                 <Row className="align-items-center">
//                   {getVisibleCards().map((card) => (
//                     <Col lg={4} sm={12} key={card.id}>
//                       <Card className="border border-0">
//                         <Card.Body
//                           className="bg-light"
//                           style={{ height: "160px" }}
//                         >
//                           <Card.Text>
//                             <i className="fa-solid fa-quote-left"></i>
//                             {card.text}
//                             <i className="fa-solid fa-quote-right"></i>
//                           </Card.Text>
//                         </Card.Body>
//                         <div className="p-3 position-relative">
//                           <Card.Img
//                             variant="bottom"
//                             src={card.img}
//                             className="rounded-circle position-absolute top-0 translate-middle-y border border-5 border-white"
//                           />
//                           <div className="mt-4"></div>
//                           <Card.Title>{card.name}</Card.Title>
//                           <Card.Text>{card.role}</Card.Text>
//                         </div>
//                       </Card>
//                     </Col>
//                   ))}
//                 </Row>
//               </Carousel.Item>
//             )
//           )}
//         </Carousel> */
// }

// {
//   /* Buttons below the carousel */
// }
// {
//   /* <div className="d-flex justify-content-center mt-3">
//           {cardData.map((_, index) => (
//             <Button
//               key={index}
//               variant="primary"
//               className="mx-1"
//               onClick={() => handleButtonClick(index)}
//             >
//               {index + 1}
//             </Button>
//           ))}
//         </div> */
// }

//
