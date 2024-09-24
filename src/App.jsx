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
import PremiumELibraryPage from "./pages/PremiumELibraryPage";
import PremiumEbooks from "./pages/EBooks/PremiumEbooks";
import CourseLanding from "./pages/Course/CourseLanding";
import CourseUtil from "./pages/Admin/CourseUtil";
import CourseVideoPlayer from "./pages/Course/CoursePlayer";
import Test from "./pages/Test/Test";
import TestSqueeze from "./pages/Squeeze/TestSqueeze";

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
		<Route path="/admin/course" element = { < CourseUtil /> }/>
        <Route path="/policy" element = {<PolicyPage />} />
        <Route path="/special-12" element = {<PremiumELibraryPage/>} />
        <Route path="/premium-ebooks" element = {<PremiumEbooks />} />
		<Route path="/course/:courseName" element = { <CourseLanding />} />
		{/* <Route path = "/video" element = { <CourseVideoPlayer /> } /> */}
		{/* <Route path="/test" element = { <Test /> }/> */}
		<Route path="registration/test" element = { <TestSqueeze /> }/>
        <Route path = "*" element = {<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App