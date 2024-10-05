import React, { useEffect, useState } from "react";
import { BACKEND_API, UploadDirectory } from "../../utility/Constants";

const UserListing = () => {
	
	const [userData, setUserData] = useState([]);
	const [collection, setCollection] = useState(UploadDirectory.TEST_SERIES_ENROLLMENT);

	useEffect(() => {
		fetch(BACKEND_API + "/user/getAllUsers?collection=" + collection)
		.then((response) => response.json())
		.then((data) => setUserData(data))
	}, [collection])
	return (
		<div className="mx-10 mt-10">
			<div className="flex gap-4 justify-center items-center mb-10">
				<h1 className="text-xl font-bold">Select data source</h1>
				<select className="rounded-3xl" onChange={(e) => setCollection(e.target.value)}>
					<option value={UploadDirectory.LEADS_DATA}>{UploadDirectory.LEADS_DATA.split('-').join(' ')}</option>
					<option value={UploadDirectory.TEST_SERIES_ENROLLMENT}>{UploadDirectory.TEST_SERIES_ENROLLMENT.split('-').join(' ')}</option>
					<option value={UploadDirectory.USER_DATA}>{UploadDirectory.USER_DATA.split('-').join(' ')}</option>
				</select>
			</div>
			<div className="grid grid-cols-9 text-center">
				<h1 className="bg-blue-100 border border-gray-400 py-2">Name</h1>
				<h1 className="bg-blue-100 border border-gray-400 py-2">Phone No.</h1>
				<h1 className="bg-blue-100 border border-gray-400 py-2">Gender</h1>
				<h1 className="bg-blue-100 border border-gray-400 py-2">City</h1>
				<h1 className="bg-blue-100 border border-gray-400 py-2">D.O.B.</h1>
				<h1 className="bg-blue-100 border border-gray-400 py-2">Education Level</h1>
				<h1 className="bg-blue-100 border border-gray-400 py-2">Employment Status</h1>
				<h1 className="bg-blue-100 border border-gray-400 py-2">Medium</h1>
				<h1 className="bg-blue-100 border border-gray-400 py-2">Email</h1>
				{
					userData.map((data) => (
						<>
							<p className="border border-gray-300 overflow-x-auto py-2">{data.firstName} {data.lastName}</p>
							<p className="border border-gray-300 overflow-x-auto py-2">{data.phoneNumber}</p>
							<p className="border border-gray-300 overflow-x-auto py-2">{data.gender}</p>
							<p className="border border-gray-300 overflow-x-auto py-2">{data.city}</p>
							<p className="border border-gray-300 overflow-x-auto py-2">{data.dateOfBirth}</p>
							<p className="border border-gray-300 overflow-x-auto py-2">{data.education_level}</p>
							<p className="border border-gray-300 overflow-x-auto py-2">{data.employment_status}</p>
							<p className="border border-gray-300 overflow-x-auto py-2">{data.medium}</p>
							<p className="border border-gray-300 overflow-x-auto py-2">{data.email}</p>
						</>
					))
				}
			</div>
		</div>
	)
}

export default UserListing;