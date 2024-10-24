
import { useState } from "react";
import Logo from "../../assets/logo/logo.png";
import axios from "axios";
import {BACKEND_API} from "../../utility/Constants";
import { useNavigate } from "react-router-dom";

export default function TestLogin() {
	const [phoneNumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');
	const [invalidPassword, setInvalidPassword] = useState(false);
	const [loginStarted, setLoginStarted] = useState(false);
	const navigate = useNavigate();

	async function onLoginSubmit (e) {
		setLoginStarted(true);
		e.preventDefault();
		const data = {phoneNumber: phoneNumber, dob: password}
		// const allow = phoneNumber === "9039130180" && password === "12345678"
		const url = BACKEND_API + "/test-series/validate";
		const response = await axios.post(url, data);
		if (response.status === 200) {
			// Move to test page
			navigate(`/test/home?phoneNumber=${phoneNumber}`, {state: {loggedIn: true}});
		} else {
			setInvalidPassword(true);
			setLoginStarted(false);
		}
	}

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
		  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
			<img
			  alt="MentorsGyan"
			  src={Logo}
			  className="mx-auto h-28 w-auto"
			/>
			<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
			  Sign in to your account
			</h2>
		  </div>
		  <div className="my-5 sm:mx-auto sm:w-full sm:max-w-sm">
			{
				invalidPassword && (
					// <div className="w-full">
						<div className="text-center my-5 text-gray-700 bg-red-300/50 px-2 py-4 rounded-lg">
							आपका फ़ोन नंबर या पासवर्ड ग़लत है। कृपया पुन: प्रयास करें।
						</div>
					// </div>
				)
			}
			<div className="space-y-6">
			  <div>
				<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
				  Phone Number
				</label>
				<div className="mt-2">
				  <input
					id="phno"
					name="phno"
					type="text"
					maxLength="10"
                    pattern="\d{10}"
					required
					autoComplete="tel"
                    title="कृपया एक वैध 10-अंकीय फ़ोन नंबर दर्ज करें"
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
					className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
				  />
				</div>
			  </div>
  
			<div className="mb-4">
				<label htmlFor="password" className="block text-gray-700">जन्म तिथि:</label>
				<input
				id="password"
				name='password'
				value={password}
				onChange={(e) => {setPassword(e.target.value);}}
				type='date'
				max={"2006-01-01"}
				className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary"
				required
				/>
			</div>
  
			  <div>
				<button
				disabled={loginStarted}
					onClick={onLoginSubmit}
				  className={`${loginStarted ? 'bg-primary animate-pulse' : ''} flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary`}
				>
				{loginStarted ? 'Signing in...' : 'Sign in'}
				</button>
			  </div>
			</div>
			<p className="mt-10 text-center text-sm text-gray-500">
			क्या आपने अभी तक पंजीकरण नहीं कराया है?{' '}
			  <a href="/registration/test" className="font-semibold leading-6 text-secondary hover:text-primary">
			  यहाँ क्लिक करें
			  </a>
			</p>
		  </div>
		</div>
	)
  }
  