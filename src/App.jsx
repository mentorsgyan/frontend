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
import TestSqueeze from "./pages/Squeeze/TestSqueeze";
import UserListing from "./pages/Admin/UserListing";

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
		{/* Admin routes */}
        <Route path="/admin" element = {<Admin />} />
		<Route path="/admin/course" element = { < CourseUtil /> }/>
		<Route path="/admin/students" element = { <UserListing /> }/>

        <Route path="/policy" element = {<PolicyPage />} />

		{/* Ebook routes */}
        <Route path="/special-12" element = {<PremiumELibraryPage/>} />
        <Route path="/premium-ebooks" element = {<PremiumEbooks />} />

		<Route path="/course/:courseName" element = { <CourseLanding />} />
		{/* <Route path = "/video" element = { <CourseVideoPlayer /> } /> */}

		{/* Test Routes */}
		{/* <Route path="/test/onboarding" element = { <Test /> }/>
		<Route path = "/test/login" element = {<TestLogin />} /> */}
		<Route path="registration/test" element = { <TestSqueeze /> }/>
		{/* <Route path = "test/completed" element = { <TestCompletion/> } /> */}

        <Route path = "*" element = {<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App