import React, { useState } from 'react';
import axios from 'axios';
import { BACKEND_API, hindiCities } from '../../utility/Constants';
import { useNavigate } from 'react-router-dom';

const UserForm = ({ email , squeeze = false }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: email,
        phoneNumber: '',
        dateOfBirth: new Date(),
        gender: '',
		education_level: '12th',
        employment_status: 'कार्यरत',
        city: hindiCities[0],
		medium: "हिन्दी"
    });

	const [uploaded, setUploaded] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

	const navigate = useNavigate();

	const handleSqueezeSubmit = async (e) => {
		e.preventDefault();
		// await axios.post(BACKEND_API + `/user/saveUserData?testSeries=${squeeze}`, formData);
		const data = {
			price: 999,
			name: 'TEST-PRELIMS-1',
			phoneNumber: formData.phoneNumber,
			userData: formData
		}
		navigate("/checkout", {state: {data: data}});
	}

    const handleSubmit = async (e) => {
        e.preventDefault();
		if (uploaded === true) {
			history.go(-1);
			return;
		}
		const response = await axios.post(BACKEND_API + `/user/saveUserData?testSeries=${squeeze}`, formData);
		if (response.status === 201)
			setUploaded(true);
		history.go(-1);
    }

    return (
        <form onSubmit={squeeze ? handleSqueezeSubmit : handleSubmit} method='POST' className="mt-10 max-w-lg mx-auto p-4 bg-white dark:bg-gray-700  shadow-md rounded-md">
            {/* Personal Info */}
            <div className=' flex flex-col sm:flex-row gap-4 dark:text-white'>
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-gray-700 dark:text-white text-xl">पहला नाम :</label>
                    <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border dark:bg-gray-600 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary"
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-gray-700 dark:text-white text-xl">उपनाम:</label>
                    <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border dark:bg-gray-600 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary"
                    />
                </div>
            </div>
            {/* Contact Info */}
            <div className='flex flex-col sm:flex-row gap-4'>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 dark:text-white text-xl">ईमेल:</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border dark:bg-gray-600 border-gray-300 rounded-md shadow-sm dark:text-white focus:outline-none focus:ring-secondary focus:border-secondary"
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-gray-700 dark:text-white text-xl">फ़ोन नंबर:</label>
                    <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    maxLength="10"
                    pattern="\d{10}"
                    title="कृपया एक वैध 10-अंकीय फ़ोन नंबर दर्ज करें"
                    className="mt-1 block w-full px-3 py-2 border dark:bg-gray-600 border-gray-300 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary"
                    />
                </div>
            </div>
        
        {/* Biological Info */}
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 justify-evenly'>
                <div className="mb-4">
                    <label htmlFor="dateOfBirth" className="block text-gray-700 dark:text-white text-xl">जन्म तिथि:</label>
                    <input
                    selected={formData.dateOfBirth}
                    id="dateOfBirth"
                    name='dateOfBirth'
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    type='date'
					max={"2006-01-01"}
                    className="mt-1 block w-full px-3 py-2 border dark:bg-gray-600 dark:text-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary"
                    required
                    />
                </div>
					<div className="mb-4">
						<label className="block text-gray-700 dark:text-white text-xl">लिंग:</label>
							<div className="mt-1">
								<label className="inline-flex items-center">
									<input
									type="radio"
									name="gender"
									value="male"
									onChange={handleChange}
									required
									className="form-radio"
									/>
									<span className="ml-2 dark:text-white">Male</span>
								</label>
								<label className="inline-flex items-center ml-6">
									<input
									type="radio"
									name="gender"
									value="female"
									onChange={handleChange}
									required
									className="form-radio"
									/>
									<span className="ml-2 dark:text-white">Female</span>
								</label>
							</div>
					</div>
                </div>
				<div className='flex md:flex-row flex-col gap-4'>
					<div className="mb-4 w-full">
						<label htmlFor="state" className="block text-gray-700 dark:text-white text-xl"> शिक्षा का स्तर:</label>
						<select name="education_level" onChange={e => handleChange(e)} className='rounded-md dark:bg-gray-600 dark:text-white'>
							<option value="12th">12th</option>
							<option value="स्नातक">स्नातक</option>
							<option value="स्नातकोत्तर">स्नातकोत्तर</option>
							<option value="अन्य">अन्य</option>
						</select>
					</div>
					<div className="mb-4 w-full">
						<label htmlFor="state" className="block text-gray-700 dark:text-white text-xl"> रोज़गार की स्थिति:</label>
						<select name="employment_status" onChange={e => handleChange(e)} className='rounded-md dark:bg-gray-600 dark:text-white'>
							<option value="कार्यरत">कार्यरत</option>
							<option value="विद्यार्थी">विद्यार्थी</option>
							<option value="अन्य">अन्य</option>
						</select>
					</div>
				</div>
					
                <div className='flex gap-4 md:flex-row flex-col'>
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-gray-700 dark:text-white text-xl ">शहर:</label>
						<select name="city" onChange={e => handleChange(e)} className='rounded-md dark:bg-gray-600 dark:text-white'>
							{
								hindiCities.map((city, id) => (
									<option value={city}>{city}</option>
								))
							}
						</select>
                    </div>
					<div className="mb-4 md-900:ml-7">
                        <label htmlFor="medium" className="block text-gray-700 dark:text-white text-xl ">मीडियम:</label>
						<select name="medium" onChange={e => handleChange(e)} className='rounded-md dark:bg-gray-600 dark:text-white'>
							<option value="हिन्दी">हिन्दी</option>
							<option value="English">English</option>
						</select>
                    </div>
                </div>
				{
					squeeze ? (
						<button
						type="submit"
						className="w-full text-xl font-bold bg-secondary text-white py-2 px-4 rounded-md shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
						>
						Pay Now
						</button>
					) : (
						<button
						type="submit"
						className="w-full text-xl font-bold bg-secondary text-white py-2 px-4 rounded-md shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
						>
						{
							uploaded ? 'खरीदारी जारी रखें' : 'जमा करें'
						}
						</button>
					)
				}
        
        </form>
    );
};


export default UserForm;