import React from "react";
import Navbar from "../components/Navbar/Navbar"
import Courses from "../components/Courses/Courses";
import Aos from "aos";
import "aos/dist/aos.css"
import TopCourses from "../components/TopCourses/TopCourses";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Image1 from "../assets/hero/Hero.png";
import Image2 from "../assets/hero/Hero2.png";
import Image3 from "../assets/hero/Hero3.png";
import OfferedServices from "../components/OfferedServices/OfferedServices"

const ImageList = [
  {
      id: 1,
      img: Image1,
      title: "New course alert!",
      description: "This is the new course description",
      courseName: "Making websites"
  },
  {
      id: 2,
      img: Image2,
      title: "22222New course alert!",
      description: "2222This is the new course description",
      courseName: "Making websites"
  },
  {
      id: 3,
      img: Image3,
      title: "3333New course alert!",
      description: "3333This is the new course description",
      courseName: "Making websites"
  }
]

// Slider settings
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: "ease-in-out",
  pauseOnHover: false,
  pauseOnFocus: true
};

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
        <Hero ImageList={ImageList} settings={settings} />
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