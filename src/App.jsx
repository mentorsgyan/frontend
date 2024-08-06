import React from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PaymentPage from "./pages/PaymentPage";
import { heroDataLoader } from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import SampleTests, { QuestionPaper } from "./pages/MCQTest";
import UserProfile from "./pages/User/UserProfile";
import Admin from "./pages/Admin/Admin";
import PolicyPage from "./pages/PolicyPage";
import NotFound from "./pages/NotFound";
import CourseLanding from "./pages/Courses/CourseLanding";
import MentorshipSqueeze from "./pages/Squeeze/MentorshipSqueeze";
import Questionaire from "./pages/Squeeze/Questionaire";

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
        <Route path = "/user-profile" element = {<UserProfile />} />
        <Route path = "/e-library" element = {<BlogPage />} />
        <Route path = "/mock-test" element = {<SampleTests />} />
        <Route path = "/mock-test/:testTitle" element = {<QuestionPaper />}/>
        <Route path="/admin" element = {<Admin />} />
        <Route path="/policy" element = {<PolicyPage />} />
        <Route path = "/course-landing" element = { <CourseLanding /> } />
        <Route path = "/course-landing/:id" element = { <CourseLanding /> } />
        <Route path="/mentorship" element = {<MentorshipSqueeze />}/>
        <Route path = "/questionaire" element  = { <Questionaire /> }/>
        <Route path = "*" element = {<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App