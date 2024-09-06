import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import UserForm from "../../pages/User/UserForm";

const CourseTiles = () => {
    const CourseData = {
        title: "Course Title",
        headline: "One liner headline of the course",
        language: "Hindi",
        educator: "Geetesh Sahu",
        rating: 4,
        totalEnrollments: 108,
        contentLength: 12,
        courseThumbnail: 'https://www.codehelp.in/_next/image?url=https%3A%2F%2Fdgyugonj9a9mu.cloudfront.net%2FWhats_App_Image_2024_03_13_at_4_25_55_PM_cc1da9dcda.jpeg&w=828&q=100',
        coursePrice: 3999,
        courseFeature: ["XYZ feature 1", "XYZ Feature 2", "XYZ Feature 3"],
        modules: [
            {
                title: "Tile 1",
                lectures: [
                    {
                        title: "Lecture title",
                        videoLink: "Video Link",
                        thumbnailLink: "Thumbnail Link"
                    }
                ]
            }
        ]
    }    

    return (
        <div id = "course-tiles" className="container my-10 rounded-3xl shadow-2xl p-4">
            {/* Course heading */}
            {/* <UserFormDialogue /> */}
            <h1 className="text-center text-3xl font-bold tracking-tight text-secondary">Special Courses for you</h1>
            <p className="text-center my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo excepturi, sequi sunt dignissimos doloremque vel, fugit ad eius non alias officia tenetur, accusantium atque nesciunt voluptates ipsum id aliquam ratione!</p>
            <div className="flex gap-4 justify-evenly">
                <CourseTile CourseData={CourseData}/>
                <CourseTile CourseData={CourseData}/>
                <CourseTile CourseData={CourseData}/>
            </div>
            
        </div>
    )
}

const UserFormDialogue = () => {
    const [open, setOpen] = useState(true);
    if (!open) {
        return (
            <button onClick={() => setOpen(true)}>Open</button>
        )
    }
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-40">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          />
    
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
              >
                {/* <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Deactivate account
                      </DialogTitle>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All of your data will be permanently removed.
                          This action cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="">
                    <UserForm />
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    data-autofocus
                    onClick={() => setOpen(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      )
}



const CourseTile = ({CourseData}) => {
    const data = {
        price: CourseData.course,
        id: CourseData.title,
        name: 'COURSE-' + CourseData.title
    }
    const navigate = useNavigate();
    function handleClick () {
        // navigate("/checkout", {state: {data: data}});
        navigate("/course-landing/id");
    }
    return (
        <div className="flex flex-col w-fit p-2 border-4 rounded-lg" role="button" onClick={handleClick}>
            {/* thumbnail */}
            <img src={CourseData.courseThumbnail} alt={`Course thumbnail for ${CourseData.title}`} className="w-60" />
            <h2 className="font-bold text-xl tracking-wide">{CourseData.title}</h2>
            <p className="text-gray-600">{CourseData.educator} ({CourseData.language})</p>
            <div className="flex gap-2 items-center">
                {CourseData.rating}
                {
                    Array.from({length: CourseData.rating}, (idx, ele) => (
                        <FaStar key={ele} className="text-yellow-300" />
                    ))
                }
                <p>({CourseData.totalEnrollments})</p>
            </div>
            {/* price */}
            <h2 className="font-bold text-xl tracking-wide text-secondary">₹ {CourseData.coursePrice}/-</h2>
        </div>
    )
}

export default CourseTiles;