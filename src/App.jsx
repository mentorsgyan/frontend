import React from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import CourseLanding from "./pages/CourseLanding";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PaymentPage from "./pages/PaymentPage";
import { heroDataLoader } from "./pages/Home";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import User from "./pages/User";
import Testing from "./pages/Testing"
import BlogPage from "./pages/BlogPage";
import MCQTest, { QuestionPaper } from "./pages/MCQTest";
import SampleTests from "./pages/MCQTest";

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
        <Route path = "/user" element = {<User />} />
        <Route path = "/current-affairs" element = {<BlogPage />} />
        <Route path = "/mock-test" element = {<SampleTests />} />
        <Route path = "/mock-test/:testDate" element = {<QuestionPaper />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App