import React from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import CourseLanding from "./pages/CourseLanding";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PaymentPage from "./pages/PaymentPage";
import { heroDataLoader } from "./pages/Home";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
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
      <BrowserRouter>
      <Routes >
        <Route path="/" element = {<Home />}>
          <Route 
            index
            element={<Home />}
            loader={heroDataLoader}
          />
        </Route>
        <Route path = "/course">

          <Route path=":courseId" element = {<CourseLanding />}/>
        </Route>
        <Route path = "/checkout" element = {<PaymentPage />}></Route>
        <Route path = "/video" element={<VideoPlayer />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App