import { Progress } from "@material-tailwind/react";
import { MdGroups , MdSchool} from "react-icons/md";
import { ImBooks } from "react-icons/im";


/**
* This page will show:
* 1. Courses the user has access to
* @author Mayank Shukla
*/
const UserPurchases = ({mentorship, courses, ebook}) => {
	return (
		<div className="row-start-2 col-span-2 grid grid-cols-1 md-900:grid-cols-2 gap-10 my-10 items-start mx-10">
			{/* <ServiceLists title={"Mentorship"} data={mentorships}/> */}
			<UserMentorshipTile mentorships={mentorship}/>
			<UserEBooksTile ebook={ebook}/>
			{/* <ServiceLists title={"Courses"} data={courseList}/> */}
		</div>
	)
}

const UserMentorshipTile = ({mentorships}) => {
	return (
		<>
			{/* common image */}
			
			{/* Text section */}
			{
				mentorships?.map((mentorship, idx) => {
					var purchaseDate = new Date(mentorship.purchaseDate._seconds * 1000);
					var endDate = new Date();
					endDate.setMonth(purchaseDate.getMonth() + mentorship.programExpiry/30);
					return (
					<div key={idx} className="flex gap-10 rounded-3xl shadow-lg shadow-gray-500 p-6 ">
						<div>
							<MdGroups className="absolute text-5xl z-10 text-secondary"/>
							<img src="https://www-media.discoveryeducation.com/wp-content/uploads/2024/03/de-science-hp-blob.svg" alt="" className="scale-125"/>
							<p className="z-20 text-xl mt-4 font-bold text-secondary">मेंटरशिप</p>
						</div>
						<div key={idx}>
							<div className="flex gap-4">
								<p className="md-900:text-xl font-bold">तैयारी:</p>
								<p className="md-900:text-xl">{mentorship.name}</p>
							</div>
							<div className="flex gap-4">
								<p className="md-900:text-xl font-bold">वैधता:</p>
								<p className="md-900:text-xl">{mentorship.programExpiry === 1 ? `वन टाइम` : `${mentorship.programExpiry/30} महीने`}</p>
							</div>
							<div className="flex gap-4">
								<p className="md-900:text-xl font-bold">प्रारंभ:</p>
								<p className="md-900:text-xl">{purchaseDate.toLocaleDateString()}</p>
							</div>
							<div className="flex gap-4">
								<p className="md-900:text-xl font-bold">अंत:</p>
								<p className="md-900:text-xl">{endDate.toLocaleDateString()}</p>
							</div>
						</div>
					</div>
				)})
			}
				
			
		</>
	)
}

const UserEBooksTile = ({ebook}) => {
	return (
		<>
			{/* common image */}
			{
				ebook?.map((book, idx) => {
					const purchaseDate = new Date(book.purchaseDate._seconds * 1000);
					return (
						<div key={idx} className="flex gap-10 items-center rounded-3xl shadow-lg shadow-gray-500 p-6 ">
							<div>
								<ImBooks className="absolute text-5xl z-10 text-secondary"/>
								<img src="https://www-media.discoveryeducation.com/wp-content/uploads/2024/03/de-science-hp-blob.svg" alt="" className="scale-125"/>
								<p className="z-20 text-xl mt-4 font-bold text-secondary">ई-बुक्स</p>
							</div>
							<div key={idx}>
								<div className="flex gap-4">
									<p className="md-900:text-xl font-bold">तैयारी:</p>
									<p className="md-900:text-xl">{book.name}</p>
								</div>
								<div className="flex gap-4">
									<p className="md-900:text-xl font-bold">प्रारंभ:</p>
									<p className="md-900:text-xl">{purchaseDate.toLocaleDateString()}</p>
								</div>
								<a className="md-900:text-xl underline hover:text-primary" href="https://drive.google.com/drive/folders/1vfaE4NiAenis9PgR9UI0Ktn6AVzU7Dlb?usp=sharing">अभी पढ़ें</a>
							</div>
						</div>
					)})
			}
		</>
	)
}

export default UserPurchases;