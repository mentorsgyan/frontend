import React, { useEffect, useState } from "react";
import { BACKEND_API } from "../../utility/Constants";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { FaSpinner } from "react-icons/fa6";

const RankList = () => {
    // Sort students by total marks in descending order
	const [students, setStudents] = useState([]);
	const [fetching, setFetching] = useState(true);
	const [invalidLogin, setInvalidLogin] = useState(false);
    const sortedStudents = students === undefined ? [] : [...students].sort((a, b) => b.totalMarks - a.totalMarks);

	const [searchParams] = useSearchParams();

	const phoneNumber = searchParams.get('phoneNumber');
	const testId = searchParams.get("testId");
	const testNumber = searchParams.get("test");

	async function getRankList() {
		const response = await axios.post(BACKEND_API + "/test-series/testRanks", {phoneNumber, testId, testNumber});
		if (response.status === 203) {
			setInvalidLogin(true);
			setFetching(false);
			setStudents([]);
			return;
		} else {
			setStudents(response.data);
			setFetching(false);
		}
	}

	useEffect(() => {
		getRankList();
	}, []);

    const getDisplayName = (student) => {
        return student.name !== "undefined undefined" ? student.name : `${student.phoneNumber.slice(0, 6)}****`;
    };

    return (
        <div className="p-4 flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold mb-4">Ranklist for test on {testId[0]+testId[1] + "/" + testId[2] + testId[3]}</h1>
			
            <table className="table-auto border-collapse border border-gray-300">
				
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Rank</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Total Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedStudents.map((student, index) => (
                        <tr key={student.phoneNumber}>
                            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                            <td className="border border-gray-300 px-4 py-2">{getDisplayName(student)}</td>
                            <td className="border border-gray-300 px-4 py-2">{student.totalMarks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
			{ invalidLogin && <a className="text-xl text-secondary" href="/test/login">Click here to see results.</a>}
			{ fetching && <FaSpinner className="animate-spin mt-10 text-3xl"/>}
        </div>
    );
};

export default RankList;