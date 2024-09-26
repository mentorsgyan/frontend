export const SLIDER_SETTINGS = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true
};

export const hindiCities = ["रायपुर","दुर्ग","बिलासपुर","कोरबा","राजनांदगांव","जगदलपुर","अम्बिकापुर","रायगढ़","जशपुर","कोरिया","सुरजपुर","बलरामपुर","सुकमा","कोंडागांव","बीजापुर","नारायणपुर","दंतेवाड़ा","बस्तर","महासमुंद","गरियाबंद","बालोद","बेमेतरा","मोहला मानपुर अंबागढ़ चौकी","खैरागढ़","राजनांदगांव","धमतरी","कांकेर","मुँगेली","गौरेला पेंड्रा मरवाही","कबीर धाम","सक्ति","सारंगढ़ बिलईगढ़","मनेंद्रगढ़ चिरमिरी भरतपुर", "अन्य"].sort((a, b) => a > b);

export const englishCities = ["Raipur","Durg","Bilaspur","Korba","Rajnandgaon","Jagdalpur","Ambikapur","Raigarh","Jashpur","Koriya","Surajpur","Balrampur","Sukma","Kondagaon","Bijapur","Narayanpur","Dantewada","Bastar","Mahasamund","Gariaband","Balod","Bemetara","Mohla Manpur Ambagarh Chouki","Khairagarh","Rajnandgaon","Dhamtari","Kanker","Mungeli","Gaurela Pendra Marwahi","Kabirdham","Sakti","Sarangarh Bilaigarh","Manendragarh Chirmiri Bharatpur"].sort((a, b) => a > b);

export const QuestionStatus = Object.freeze({
	UNVISITED: 'UNVISITED',
	VISITED: 'VISITED',
	MARKED_FOR_REVIEW: 'MARKED_FOR_REVIEW',
	SUBMITTED: 'SUBMITTED'
})

export const UploadDirectory = Object.freeze({
	USER_DATA: 'user-data',
	TEST_SERIES_QP: 'test-series-test',
	TEST_SERIES_LIST: 'test-series-list',
	COUPONS: 'coupons',
	PAID_EBOOKS: 'paid-ebooks',
	MENTORSHIP: 'mentorship',
	COURSE: 'course',
	TEST_SERIES_ENROLLMENT: 'test-series-enrollment',
	LEADS_DATA: 'lead-user-data'
});



const TestingMode = Object.freeze({
	LOCAL_BACKEND: 'LOCAL_BACKEND',
	HEROKU_BACKEND: "HEROKU_BACKEND",
	PRODUCTION: "PRODUCTION"
});

const mode = TestingMode.LOCAL_BACKEND;
// const mode = TestingMode.PRODUCTION;
// const mode = TestingMode.HEROKU_BACKEND;

export const BACKEND_API = mode === TestingMode.LOCAL_BACKEND ? "http://localhost:5000" : "https://mentorsgyan-backend-a58bdc6d7b98.herokuapp.com";
export const RAZORPAY_KEY = mode === TestingMode.PRODUCTION ? 'rzp_live_Xv2gJDseLminWd' : 'rzp_test_YxRzwHzrJ4PIkW';