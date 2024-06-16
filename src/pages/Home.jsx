import React from "react";
import Navbar from "../components/Navbar/Navbar"
import Courses from "../components/Courses/Courses";
import Aos from "aos";
import "aos/dist/aos.css"
import TopCourses from "../components/TopCourses/TopCourses";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import OfferedServices from "../components/OfferedServices/OfferedServices"

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
        <Courses />
        <TopCourses />
        <Banner />
        <OfferedServices />
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