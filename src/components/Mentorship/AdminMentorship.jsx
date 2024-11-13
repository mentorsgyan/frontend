import React, { Fragment, useEffect, useState } from "react";
import {CheckIcon} from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';
import { BACKEND_API } from "../../utility/Constants";
import { FaCircleMinus } from "react-icons/fa6";
import axios from "axios";

const AdminMentorship = () => {
	
	const [mentorshipData, setMentorshipData] = useState([]);
	const [features, setFeatures] = useState([]);
	
	async function fetchMentorship () {
		fetch(BACKEND_API + "/mentorship/fetch")
		.then((response) => response.json())
		.then((data) => {
			data.sort((a, b) => Number.parseInt(a.price) > Number.parseInt(b.price));
			setFeatures(data[0].features);
			setMentorshipData(data)
		});
	}
	
	useEffect(() => {
		fetchMentorship();
	}, []);
	
	const handleInputChange = (index, key, value) => {
		const newFormData = [...mentorshipData];
		newFormData[index][key] = value;
		setMentorshipData(newFormData);
	};
	
	const handleSubmit = () => {
		const confirmed = confirm("Please verify the changes");
		if (!confirmed)
			return;
		mentorshipData.map(async (data) => {
			let url = BACKEND_API + "/mentorship/update/";
			if (data.name === "प्लस")
				url += "PLUS";
			else if (data.name === "सार")
				url += "SAAR";
			else 
				url += "ULTRA";
			console.log(data);
			const response = await axios.post(url, data);
			alert(response.data);
		})
	}

	const addFeature = () => {
		const newFeature = prompt("Enter new feature name:");
		if (newFeature) {
		  setFeatures([...features, newFeature]);
	  
		  const newFormData = mentorshipData.map((item) => ({
			...item,
			feature_availability: [...item.feature_availability, ""],
			features: [...features, newFeature]
		  }));
		  setMentorshipData(newFormData);
		}
	  };
	  
	  const removeFeature = (index) => {
		const response = confirm("Are you sure?")
		if (!response)
			return;
		setFeatures(features.filter((_, i) => i !== index));
	  
		const newFormData = mentorshipData.map((item) => ({
		  ...item,
		  feature_availability: item.feature_availability.filter((_, i) => i !== index),
		  features: item.features.filter((_, i) => i !== index)
		}));
		setMentorshipData(newFormData);
	  };
	
	const handleFeatureEdit = (newValue, idx) => {
		const newFeatures = [...features];
		newFeatures[idx] = newValue;
		setFeatures(newFeatures);
	}

	const handlePlanFeatureEdit = (newValue, idx, feature_idx) => {
		const newPlan = [...mentorshipData];
		newPlan[idx].feature_availability[feature_idx] = newValue;
		setMentorshipData(newPlan);
	}
	
	return (
		<div className="mt-32 text-gray-700 dark:text-gray-200 container section rounded-3xl shadow-2xl dark:shadow-gray-600" id="mentorship-update">
			<h1 className="text-3xl font-bold text-secondary text-center pb-4 underline">Mentorship</h1>
			<div className=" grid grid-cols-2 gap-5">
				{mentorshipData.length !== 0 && mentorshipData.map((item, index) => (
					<div key={index} className="mb-4 p-4 border rounded-lg shadow grid gap-2">
						<label className="block text-sm font-medium ">Name</label>
						<input
						type="text"
						value={item.name}
						onChange={(e) => handleInputChange(index, 'name', e.target.value)}
						className="mt-1 block w-full px-3 py-2 border rounded-md dark:bg-gray-700"
						/>
						
						<label className="block text-sm font-medium ">Price</label>
						<input
						type="text"
						value={item.price}
						onChange={(e) => handleInputChange(index, 'price', e.target.value)}
						className="mt-1 block w-full px-3 py-2 border rounded-md dark:bg-gray-700"
						/>
						
						<label className="block text-sm font-medium ">Renewal (in words)</label>
						<input
						type="text"
						value={item.renewalInWords}
						onChange={(e) => handleInputChange(index, 'renewalInWords', e.target.value)}
						className="mt-1 block w-full px-3 py-2 border rounded-md dark:bg-gray-700"
						/>

						<label className="block text-sm font-medium ">Renewal (in # of days)</label>
						<input
						type="text"
						placeholder="-1, for one-time validity"
						value={item.renewal}
						onChange={(e) => handleInputChange(index, 'renewal', e.target.value)}
						className="mt-1 block w-full px-3 py-2 border rounded-md dark:bg-gray-700"
						/>

						<label className="block text-sm font-medium ">Recommended (Please make only one of them true)</label>
						<select
						className="mt-1 block w-full px-3 py-2 border rounded-md dark:bg-gray-700"
						onChange={(e) => handleInputChange(index, 'recommended')}
						defaultValue={item.recommended}>
							<option value={true}>True</option>
							<option value={false}>False</option>
						</select>
						{
							item.name !== 'सार' && (<>
									<label className="block text-sm font-medium ">Offer Price</label>
									<input
									type="text"
									value={item.offerPrice}
									onChange={(e) => handleInputChange(index, 'offerPrice', e.target.value)}
									className="mt-1 block w-full px-3 py-2 border rounded-md dark:bg-gray-700"
									/>
								</>
							)
						}
						</div>
					))}
			</div>

			{/*  */}
			
			
			<div className="grid grid-cols-4 gap-3 items-center justify-center text-xl text-center mb-2">
				<h1>Feature</h1>
				<h1>Plus</h1>
				<h1>Ultra</h1>
			</div>
			<div className="grid grid-cols-4 gap-3 ">
				{
					features.map((feature, index) => (
						<Fragment key={index}>
							<input
							key={index}
							value={feature} 
							onChange={(e) => handleFeatureEdit(e.target.value, index)}
							className="dark:bg-gray-700 px-3 py-2 border rounded-md" />

							{
								mentorshipData.map((mentorshipPlan, planIdx) => (
									<input 
									type="text"
									value={mentorshipPlan.feature_availability[index]}
									onChange={(e) => handlePlanFeatureEdit(e.target.value, planIdx, index)}
									className="dark:bg-gray-700 px-3 py-2 border rounded-md"/>
								))
							}
						<button
						type="button"
						onClick={() => removeFeature(index)}
						className="ml-2 text-red-500"
						>
							<FaCircleMinus />
						</button>
						</Fragment>
					))
				}
				{/* {mentorshipData.length !== 0 && mentorshipData.map((item, index) => {
					const feature = features[index];
					return (
					<div key={index} className="mb-2">
						<input
						value={feature} 
						onChange={(e) => handleFeatureEdit(e.target.value, index)}
						className="dark:bg-gray-700" />
						<button
							type="button"
							onClick={() => removeFeature(index)}
							className="ml-2 text-red-500"
						>
							<FaCircleMinus />
						</button>
					</div>
				)})} */}
				<button
					type="button"
					onClick={addFeature}
					className="my-4 bg-green-500 text-white px-4 py-2 rounded-md"
				>
					Add Feature
				</button>
			
				{/* Render the form here as described above */}
			</div>
			<button
			type="submit"
			onClick={handleSubmit}
			className="my-4 bg-blue-500 text-white px-4 py-2 rounded-md col-start-1"
			>
			Submit
			</button>
			</div>
			);
			// )
		}
		
		const PlansColumn = ({values , heading , features = false }) => {
			const navigate = useNavigate();
			const [price, setPrice ] = useState(values.price);
			const data = {
				price: values.price
			}
			const valueList = (features ? values : values.feature_availability);
			return (
				<div className="dark:text-white">
				<div className="">
				{/* Heading */}
				<h1 className={`text-xl font-bold tracking-wide ${values.features ? '' : ''}`}>{heading}</h1>
				{/* Price */}
				<div className={`py-8 flex items-baseline gap-1 justify-center ${features ? 'hidden' : ''}`}>
				<input type="text" value={price} onChange={(e) => {setPrice(e.target.value)}} className="w-[80px] bg-gray-700" placeholder="Price (₹)"/>
				<p className="font-light lowercase">/ {values.renewal} || {values.renewalInWords}</p>
				</div>
				</div>
				<ul role="list" className={`divide-y divide-gray-100 w-max-[300px] ${features ? 'font-light mt-32' : ''}`}>
				{
					valueList.map((value, idx) => (
						<li key={idx} className="py-4 flex justify-center">
						{
							value === 1 ? (<CheckIcon className="w-5 text-secondary"/>) : (<p>{value}</p>)
						}
						</li>
						))
					}
					</ul>
					</div>
					)
				}
				
				export default AdminMentorship;