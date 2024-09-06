import React from "react";
import Navbar from "../components/Navbar/Navbar"
import Aos from "aos";
import "aos/dist/aos.css"
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Mentorship from "../components/Mentorship/Mentorship";
import Offerings from "../components/Offerings/Offerings";
import Testimonials from "../components/Testimonials/Testimonials";
import AboutUs from "../components/AboutUs/AboutUs";
import ELibrary from "../components/ELibrary/ELibrary";
import MockTest from "../components/MockTest/MockTest";
import Officers from "../components/Officers/Officers";
import Ashish from "../components/AboutUs/Ashish";
import PremiumELibrary from "../components/ELibrary/PremiumELibrary";

const Home = () => {
  // AOS
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    });
    Aos.refresh
  }, []);
  return (
    <div>
        <Navbar />
        <Hero />
	    <PremiumELibrary />
        <Officers />
        <Offerings />
        <Mentorship />
        <ELibrary />
        <MockTest />
        <Testimonials />
        <AboutUs />
        <Ashish />
        <Footer />
    </div>
  )
}

export const heroDataLoader = async () => {
  // if (res.status =)
  const res2 = ImageList
  return res2
  // return res.json
}

export default Home