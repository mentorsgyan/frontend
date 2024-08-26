import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ebookPackageContentsEnglish = [
	{title: "Mathematics",bookPages: 286,solutionPages: 327, price: 500},
	{title: "Computer",bookPages: 256,solutionPages: 163, price: 500},
	{title: "Reasoning",bookPages: 345,solutionPages: 175, price: 500},
	{title: "English",bookPages: 113,solutionPages: 57, price: 500},
	{title: "Hindi",bookPages: 160,solutionPages: 92, price: 500},
	{title: "Biology", bookPages: 127, solutionPages: 104, price: 500},
	{title: "Chemistry", bookPages: 78, solutionPages: 54, price: 500},
	{title: "Physics", bookPages: 81, solutionPages: 62, price: 500},
	{title: "History", bookPages: 490, solutionPages: 387, price: 500},
	{title: "Geography", bookPages: 149, solutionPages: 147, price: 500},
	{title: "Polity", bookPages: 101, solutionPages: 230, price: 500},
	{title: "Static GK", bookPages: 117, solutionPages: '-', price: 500}
]

const ebookPackageContentsHindi = [
	{title: "गणित", bookPages: 286, solutionPages: 327, price: 500},
	{title: "कंप्यूटर", bookPages: 256, solutionPages: 163, price: 500},
	{title: "तर्कशक्ति", bookPages: 345, solutionPages: 175, price: 500},
	{title: "अंग्रेजी", bookPages: 113, solutionPages: 57, price: 500},
	{title: "हिंदी", bookPages: 160, solutionPages: 92, price: 500},
	{title: "जीवविज्ञान", bookPages: 127, solutionPages: 104, price: 500},
	{title: "रसायन विज्ञान", bookPages: 78, solutionPages: 54, price: 500},
	{title: "भौतिकी", bookPages: 81, solutionPages: 62, price: 500},
	{title: "इतिहास", bookPages: 490, solutionPages: 387, price: 500},
	{title: "भूगोल", bookPages: 149, solutionPages: 147, price: 500},
	{title: "राजनीति शास्त्र", bookPages: 101, solutionPages: 230, price: 500},
	{title: "स्थैतिक सामान्य ज्ञान", bookPages: 117, solutionPages: '-', price: 500}
]
    
const PremiumELibraryPage = () => {

	const [english, setEnglish] = useState(true);

	const navigate = useNavigate();
	const data = {
		price: 500,
		id: 'Special-12',
		name: 'EBOOKS-Special 12'
	}

	const handleChange = (event) => {
		const language = event.target.value;
		setEnglish(language === 'English');
		onLanguageChange(language);
	};

	function handleBuyNow () {
		navigate("/checkout", {state: {data: data}});
	}

	return (
		<div className="bg-gray-800 text-white flex flex-col items-center gap-10">
			{/* Floating purchase button */}
			<div className="flex flex-col fixed right-2 lg:right-28 bottom-28 items-center justify-center">
			
				<button className="bg-secondary p-3 text-xl animate-bounce font-bold rounded-full" onClick={handleBuyNow}>{english ? 'Buy Now' : 'अभी खरीदें'}</button>
			</div>

			<div className="flex flex-col fixed right-2 lg:right-28 top-10 items-center justify-center">
				<select
					value={english ? "English" : "Hindi"}
					onChange={handleChange}
					className="block w-full px-4 py-2 text-md text-white bg-gray-800 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary"
				>
					<option value="English">English</option>
					<option value="Hindi">हिंदी</option>
				</select>
			</div>

			{/* Heading */}
			<h1 className="text-secondary text-5xl text-center font-bold tracking-tight capitalize pt-10 underline underline-offset-8">Mentorsgyan <strong className="text-white font-mono underline underline-offset-4">{english ? 'Special' : 'स्पेशल'}</strong> 12</h1>
			<div className="flex items-center justify-center">
				{/* Text section */}
				{/* Image section */}
				<img 
				className="md-900:order-2 order-1"
				src="https://firebasestorage.googleapis.com/v0/b/mentorsgyan-51f21.appspot.com/o/resources%2Febooks.png?alt=media&token=0298aada-a1c6-40a8-b0da-27d03b81047b" 
				alt="ebooks" />
			</div>
			{/*  Package description */}
			{/* Large media */}
			
			{/* Small media */}
			<div className="container border rounded-2xl shadow-2xl shadow-gray-500 my-10">
				{
					english ? <h2 className="text-3xl text-center text-secondary my-4 underline underline-offset-4">MentorsGyan brings you <strong className="text-gray-200">Special 12</strong> E-books series.</h2>

					: <h2 className="text-3xl text-center text-secondary my-4 underline underline-offset-4">MentorsGyan आपके लिए पेश करता है <strong className="text-gray-200">स्पेशल 12</strong> ई-बुक्स सीरीज</h2>

				}
				
				
				{
					english ? (
					<div className="mt-10 mb-10">
						<p className="text-center text-2xl font-bold leading-10 tracking-wide">Our <strong className="text-secondary">Special 12 </strong>E-Books series helps you clear various <strong className="text-secondary">Competitive Exams.</strong></p>
						<p className="text-xl text-center leading-10 tracking-wide">These books are full of optional <strong className="text-secondary">MCQ based Questions</strong>. <strong className="text-secondary">Moreover, </strong>this series also provides you solution booklets too!</p>
						<p className="text-xl text-center leading-10 tracking-wide">Now, <strong className="text-gray-300">CGPSC, CG Vyapam, ADEO, Hosterl Warden, and CG SI </strong> exams are easy!</p>
					</div>
					) : (
					<div className="mt-10 mb-10">
						<p className="text-center text-2xl font-bold leading-10 tracking-wide">हमारी <strong className="text-secondary">स्पेशल 12 </strong>ई-बुक्स सीरीज विभिन्न <strong className="text-secondary">प्रतिस्पर्धी परीक्षाओं</strong> को <strong className="text-secondary">पास</strong> करने के लिए <strong className="text-secondary">आवश्यक</strong> हैं ।</p>
						<p className="text-xl text-center leading-10 tracking-wide">ये पुस्तकें वस्तुनिष्ठ प्रकार के <strong className="text-secondary">MCQ प्रैक्टिस प्रश्नो</strong> से भरपूर हैं । <strong className="text-secondary">इतना ही नहीं</strong> इनके साथ समाधान पुस्तिकाएँ भी दी गई हैं ।</p>
						<p className="text-xl text-center leading-10 tracking-wide">तो अब, <strong className="text-gray-300">CGPSC, CG Vyapam, ADEO, होस्टल वार्डन, और CG SI जैसे विभिन्न परीक्षाओं की तैयारी</strong> आसान है ।</p>
					</div>
					)
				}
				
				

				{/* Book contents */}
				
				<ul className="grid grid-cols-2 lg:hidden gap-x-8">
					{
						Array.from({length: ebookPackageContentsEnglish.length}, (_, idx) => {
							const book= english ? ebookPackageContentsEnglish[idx] : ebookPackageContentsHindi[idx]
							return (
								<li key={idx} className="tracking-wide py-5 text-justify">
									<strong className="text-xl text-primary">{book.title}</strong>  <strong className="text-amber-600 tracking-wide text-xl">@ ₹{book.price}/-</strong> 
									</li>
							)
						})
					}
					<div className="flex gap-5 justify-center my-2 col-span-2 p-2 border-2 rounded-lg">
						<p className="text-secondary text-bold text-xl">{english ? 'TOTAL' : 'कुल'}</p>
						<div className="flex gap-2">
							<p className="text-bold text-xl text-primary animate-bounce">₹500 /-</p>
							<p className="text-bold text-xl line-through">6000</p>
						</div>
					</div>
				</ul>
				<div className="lg:grid grid-cols-4 items-center justify-center py-5 hidden">
					{/* Headings */}
					<h1 className="text-2xl text-primary text-center border border-gray-400 py-2">SUBJECT</h1>
					<h1 className="text-2xl text-primary text-center border border-gray-400 py-2">CONTENT</h1>
					<h1 className="text-2xl text-primary text-center border border-gray-400 py-2">SOLUTION</h1>
					<h1 className="text-2xl text-primary text-center border border-gray-400 py-2">PRICE</h1>
					{
						Array.from({length: ebookPackageContentsEnglish.length}, (_, idx) => (
							<BookContentRenderer key={idx} book={english ? ebookPackageContentsEnglish[idx] : ebookPackageContentsHindi[idx]} pages={english ? 'Pages' : 'पेज'}/>
						))
					}
					<div className="col-start-4 flex justify-evenly mt-4 p-2 border-2 rounded-lg">
						<p className="text-secondary text-bold text-xl">{english ? 'TOTAL' : 'कुल'}</p>
						<div className="flex gap-2">
							<p className="text-bold text-xl text-primary animate-bounce">₹500 /-</p>
							<p className="text-bold text-xl line-through">₹6000</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const BookContentRenderer = ({book, pages}) => {
	return (
		<>
			<p className="text-center text-lg border border-gray-400 py-1">{book.title}</p>
			<p className="text-center text-lg border border-gray-400 py-1">{book.bookPages} {pages}</p>
			<p className="text-center text-lg border border-gray-400 py-1">{book.solutionPages} {pages}</p>
			<p className="text-center text-lg border border-gray-400 py-1">₹{book.price}/-</p>
		</>
	)
}

export default PremiumELibraryPage;