import React from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PaymentPage from "./pages/PaymentPage";
import { heroDataLoader } from "./pages/Home";
import User from "./pages/User";
import BlogPage from "./pages/BlogPage";
import SampleTests, { QuestionPaper } from "./pages/MCQTest";

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
        <Route path = "/checkout" element = {<PaymentPage />}></Route>
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