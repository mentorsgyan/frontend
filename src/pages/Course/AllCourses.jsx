import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { FaPeopleGroup } from "react-icons/fa6";

const AllCourses = () => {
  //sample data for CourseCardInfoDto
  // the logic of useEffect to fetch all the courses will be implemented here and the state will be updated appropriately

  let CourseCardInfoDtos = [
    {
      courseName: "Name1",
      price: "2000",
      //   offerPrice: 4000,
      headline: "One liner headline of the course",
      courseThumbnail: "URL of the course thumbnail",
      enrollmentCount: 10, //display only if count > 0
    },
    {
      courseName: "Name2",
      price: "3000",
      offerPrice: "2000",
      headline: "One liner headline of the course",
      courseThumbnail: "URL of the course thumbnail",
      enrollmentCount: 10, //display only if count > 0
    },
    {
      courseName: "Name3",
      price: "3000",
      offerPrice: "2000",
      headline: "One liner headline of the course",
      courseThumbnail: "URL of the course thumbnail",
      enrollmentCount: 10, //display only if count > 0
    },
    {
      courseName: "Mathematics for MAINS",
      price: "3000",
      //   offerPrice: "2000",
      headline:
        "One liner course summary provided when an API call is made to the backend is it is ibig it will look like thi , can you handle this case? aslo will iy overlgov",
      courseThumbnail: "URL of the course thumbnail",
      enrollmentCount: 10, //display only if count > 0
    },
    {
      courseName: "Name4",
      price: "3000",
      offerPrice: "2000",
      headline:
        "One liner course summary provided when an API call is made to the backend",
      courseThumbnail: "URL of the course thumbnail",
    },
    {
      courseName: "Name4",
      price: "3000",
      offerPrice: "2000",
      headline:
        "One liner course summary provided when an API call is made to the backend",
      courseThumbnail: "URL of the course thumbnail",
      enrollmentCount: 240, //display only if count > 0
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
      <Navbar sticky={true} />
      {/* <h1 className="text-center font-inter font-semibold text-[#fd661f] text-5xl pt-16 pb-3">Courses by <span className="text-black">Mentors</span>Gyan</h1> */}

      {/* Title - Courses by MentorsGyan */}
      <div className="px-4 text-center pt-28">
        <h1 className="text-[#fd661f] text-xl md:text-3xl font-semibold font-inter">
          Courses by{" "}
          <span className="dark:text-gray-100 text-xl md:text-3xl text-gray-900">
            Mentors
          </span>
          Gyan
        </h1>
      </div>

      <div
        id="header-component"
        className="relative dark:bg-gray-800 dark:text-white px-6 pt-14 pb-10 w-full grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-8 bg-gray-100"
      >
        {CourseCardInfoDtos.map((CourseCardInfoDto, index) => (
          <CourseCard course={CourseCardInfoDto} key={index} />
        ))}
      </div>
    </div>
  );
};

const CourseCard = ({ course }) => {
  const {
    courseName,
    courseThumbnail,
    headline,
    offerPrice,
    price,
    enrollmentCount,
  } = course;

  const navigate = useNavigate();

  const handleThumbnailClick = () => {
    navigate(`/course/${courseName}`);
  };

  const handleCheckoutClick = () => {
    navigate("/checkout", { state: { course } });
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg dark:shadow-slate-900 min-h-[450px] relative dark:bg-gray-800 dark:text-white">
      {/* section which shows the no of enrolled students */}
      {enrollmentCount > 0 && (
        <div className="bg-zinc-100 dark:bg-gray-700 w-3/4 font-light absolute h-10 top-[28%] md:top-[30%] left-[50%] -translate-x-[50%] rounded-full flex justify-center items-center gap-2">
          <span className="font-inter font-semibold flex gap-2 items-center">
            <FaPeopleGroup className="w-5 h-5" />
            {enrollmentCount}
          </span>{" "}
          Students
        </div>
      )}

      {/* If a card has more content and exceeds 500px, it will grow to fit its content, but for less data , the card will atleast be 500px so that the visual uniformity is maintained */}

      {/* image / thumbnail , replace this div with the image url provided in the DTO */}
      <div
        onClick={handleThumbnailClick}
        className="w-full cursor-pointer h-40 bg-cyan-300 object-cover object-center rounded-tl-3xl rounded-tr-3xl"
      ></div>

      {/* date and title */}
      <div className="px-7 pt-16 flex flex-col gap-4">
        <h3 className="text-[#0B7077] dark:text-[#4bb8c0] font-semibold text-lg">
          {courseName}
        </h3>
      </div>

      {/* headline */}
      <div className="px-7 pt-10 h-28  overflow-hidden">
        {/* if the headline is too big, truncate it , for now keep the harcoded value as 80 */}
        <span className="font-light tracking-tighter ">
          {headline.length > 100 ? `${headline.slice(0, 80)} ...` : headline}
        </span>
      </div>

      {/* price and enroll */}
      <div className="px-7 pt-4 pb-10 w-full flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-2 justify-center md:justify-start md:pb-0 pb-6 md:items-center w-1/3">
          {course.offerPrice ? (
            <>
              <span className="text-[#fd661f] font-bold">₹{offerPrice}</span>
              <span className="text-[#777795] line-through">{price}</span>
            </>
          ) : (
            <span className="text-[#fd661f] font-bold">₹{price}</span>
          )}
        </div>

        <button
          onClick={handleCheckoutClick}
          className="bg-[#0B7077] hover:bg-[#30767b] text-white px-6 py-3 rounded-lg"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default AllCourses;
