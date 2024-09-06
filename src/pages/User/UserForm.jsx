import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_API } from '../../utility/Constants';

const UserForm = ({email}) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: email,
        phoneNumber: '',
        dateOfBirth: new Date(),
        gender: '',
        state: '',
        city: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userDataResponse = await axios.post(BACKEND_API + "/user/saveUserData", formData);
            if (userDataResponse.status === 201) {
                alert("Your data is saved");
            } else {
                alert("Cannot save your data. Please try again later.")
            }
        } catch (error) {
            alert("Some error occurred");
            console.error("Error Occured: ", error);
        }
        history.back();
    }
    
    return (
        <form onSubmit={handleSubmit} className="mt-10 max-w-lg mx-auto p-4 bg-white dark:bg-gray-700  shadow-md rounded-md">
            {/* Personal Info */}
            <div className=' flex flex-col sm:flex-row gap-4'>
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
                    className="mt-1 block w-full px-3 py-2 border dark:bg-gray-600 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary"
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
                    className="mt-1 block w-full px-3 py-2 border dark:bg-gray-600 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary"
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
                    className="mt-1 block w-full px-3 py-2 border dark:bg-gray-600 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary"
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
                                <span className="ml-2">Male</span>
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
                                <span className="ml-2">Female</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-gray-700 dark:text-white text-xl">शहर:</label>
                        <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border dark:bg-gray-600 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="state" className="block text-gray-700 dark:text-white text-xl"> राज्य:</label>
                        <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:bg-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary"
                        />
                    </div>
                </div>
        <button
        type="submit"
        className="w-full text-xl font-bold bg-secondary text-white py-2 px-4 rounded-md shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
        >
        जमा करें
        </button>
        </form>
    );
};


export default UserForm;