import AboutUs from "./components/AboutUs";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Departments from "./components/Departments";
import Doctors from "./components/Doctors";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Gallary from "./components/Gallary";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
// import Test from "./components/Test";
import Testimonials from "./components/Testimonials";

function App() {
  const logo = "../src/assets/images/logo.png";
  const items = [
    {
      id: "HOME",
      name: "HOME",
    },
    {
      id: "ABOUT",
      name: "ABOUT",
    },
    {
      id: "SERVICES",
      name: "SERVICES",
    },
    {
      id: "DEPARTMENTS",
      name: "DEPARTMENTS",
    },
    {
      id: "DOCTORS",
      name: "DOCTORS",
    },
    {
      id: "CONTACT",
      name: "CONTACT",
    },
  ];
  return (
    <>
      <NavBar logo={logo} items={items} />
      <Hero />
      <AboutUs />
      <Services />
      <Appointment />
      <Departments />
      <Testimonials />
      <Doctors />
      <Gallary />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
