import React from "react";
import Navbar from "../components/Navbar/Navbar"
import Courses from "../components/Courses/Courses";
import Aos from "aos";
import "aos/dist/aos.css"
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import OfferedServices from "../components/OfferedServices/OfferedServices"
import Mentorship from "../components/Mentorship/Mentorship";
import CurrentAffairsSection from "../components/StudyMaterials/CurrentAffairsSection";
import MockTest from "../components/StudyMaterials/MockTest";
import StudyMaterials from "../components/StudyMaterials/StudyMaterials";
import Offerings from "../components/Offerings/Offerings";
import Testimonials from "../components/Testimonials/Testimonials";

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
        
        <Offerings />
        <Mentorship />
        {/* <Courses /> */}
        {/* <MockTest /> */}
        <StudyMaterials />
        {/* <CurrentAffairsSection /> */}
        <Banner />
        <Testimonials />
        {/* <OfferedServices /> */}
        <Footer />
    </div>
  )
}

export const heroDataLoader = async () => {
  const res = await fetch('')
  // if (res.status =)
  const res2 = ImageList
  return res2
  // return res.json
}

export default Home