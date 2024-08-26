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

export const userInfoFields = [
    {
        name: "Name",
        regex: "alphabetess",
        subfields: [
            {
                name: "First name",
                type: "text",
                id: "firstname"
            },
            {
                name: "Last name",
                type: "text",
                id: "lastname"
            }
        ],
        editable: true
    },
    {
        name: "Contact Info",
        regex: "alphabetess",
        subfields: [
            {
                name: "Email Address",
                type: "email",
                id: "email"
            },
            {
                name: "Mob. No.",
                type: "text",
                id: "phoneNo"
            }
        ],
        editable: true
    },
    {
        name: "Biological",
        regex: "numeric age regex",
        subfields: [{
            name: "DOB",
            type: "date",
            id: 'dob'
        }, {
            name: "Gender",
            type: "dropdown",
            value: ["Male", "Female", "Prefer not to say"],
            id: 'gender'
        }],
        editable: true,
    },
    {
        name: "Place",
        regex: "Alphabetic",
        subfields: [{
            name: "City",
            type: "dropdown",
            value: ["Bilaspur", "Raipur", "Durg"],
            id: 'city'
        }, {
            name: "State",
            type: "dropdown",
            value: ["Chhattisgarh", "Female", "Prefer not to say"],
            id: 'state'
        }
    ],
        editable: true,
    }
]

const TestingMode = Object.freeze({
	LOCAL_BACKEND: 'LOCAL_BACKEND',
	HEROKU_BACKEND: "HEROKU_BACKEND",
	PRODUCTION: "PRODUCTION"
});

// const mode = TestingMode.LOCAL_BACKEND;
const mode = TestingMode.PRODUCTION;
// const mode = TestingMode.HEROKU_BACKEND;

export const BACKEND_API = mode === TestingMode.LOCAL_BACKEND ? "http://localhost:5000" : "https://mentorsgyan-backend-a58bdc6d7b98.herokuapp.com";
export const RAZORPAY_KEY = mode === TestingMode.PRODUCTION ? 'rzp_live_Xv2gJDseLminWd' : 'rzp_test_YxRzwHzrJ4PIkW';