import { Progress } from "@material-tailwind/react";

/**
 * This page will show:
 * 1. Courses the user has access to
 * @author Mayank Shukla
 */
const UserPurchases = ({services}) => {
    const mentorships = [];
    const courses = [];
    services?.map(service => { 
        if (service.includes("MENTORSHIP")) {
            mentorships.push(service.split('-')[1]);
        } else {
            courses.push(service.split('-')[1]);
        }
    })
    return (
        <div className="flex flex-col gap-10 divide-y-2 mt-10 items-center w-full">
            <ServiceLists title={"Mentorship"} data={mentorships}/>
            <ServiceLists title={"Courses"} data={courses}/>
        </div>
    )
}

const ServiceLists = ({title, data}) => {
    return (
        <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">{title}»</h1>
            {data.length !== 0 ?<ul>
                {
                    data.map((plan) => (
                        <div>
                            <li className="text-xl">{plan}</li>
                        </div>
                    ))
                }
            </ul> : <p>N/A</p>}
        </div>
    )
}

const ServiceEnrollmentCard = ({service}) => {
    return (
        <div className="mt-10 py-5 container shadow-2xl rounded-3xl flex flex-col justify-between">
            <div>
                <h1 className="tracking-tight py-5 font-bold text-center text-4xl text-secondary">{service.title}</h1>
                <hr />
            </div>
            {/* Course cards */}
            {
                service.details.length == 0 && <div className="text-center font-semibold text-xl tracking-wide">
                    You are not in any {service.title}.
                </div>
            }
            <div className="overflow-x-scroll">
                <div className="flex w-fit gap-6">
                    {service.details?.map((course, idx) => (
                            <CourseCard key={idx} course={course} />  
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

/**
 * This will return a course card which will have 
 * a thumbnail, title, headline and launch course button.
 * @param {*} param0 
 * @returns 
 */
const CourseCard = ({course}) => {
    return (
        <div className="shadow-lg mt-4 rounded-3xl container p-4 border w-[300px]">
            <ProgressDefault/>
            <div >
                {/* Image */}
                {/* TODO: change image here */}
                {/* Text */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold mt-2 text-center">{course} </h1>
                    <h2 className="text-xl text-center">{course} Desc</h2>
                    <h3 className="text-center text-sm">30% Completed</h3>
                    <button className="text-xl bg-secondary p-2 rounded-md text-white hover:scale-105 transition duration-200">
                        Launch Course
                    </button>
                    
                </div>
            </div>
        </div>
    )
}
 
const ProgressDefault = () => {
  return <Progress value={50} />;
}

export default UserPurchases;