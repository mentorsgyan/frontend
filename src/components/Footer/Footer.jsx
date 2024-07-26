import React from "react";
import footerLogo from "../../assets/logo/footer_logo.png";

import {FaInstagram,  FaLocationArrow,  FaYoutube,  FaMobileAlt,  FaTelegramPlane} from "react-icons/fa";

const FooterLinks = [
  {
    title: "सेवाएं",
    link: "/#services",
  },
  {
    title: "मार्गदर्शन",
    link: "/#mentorship",
  },
  {
    title: "ई-लाइब्रेरी",
    link: "/#e-library",
  },
  {
    title: "टेस्ट सीरीज़",
    link: "/#test-series",
  },
  {
    title: "गोपनीयता पालिसी",
    link: "/policy"
  }
];

const SocialMedia = [
    {
        name: "Instagram",
        icon: <FaInstagram className="text-4xl"/>,
        link: "https://www.instagram.com/mentors_gyan/"
    },
    {
        name: "Youtube",
        icon: <FaYoutube className="text-4xl text-red-500"/>,
        link: "https://www.youtube.com/@mentorsgyan"
    },
    {
        name: "Telegram",
        icon: <FaTelegramPlane className="text-4xl text-blue-300"/>,
        link: "https://t.me/mentorsgyan"
    },
]

const Footer = () => {
  return (
    <div className="text-white">
        {/* For adding black film */}
      <div className="bg-black opacity-70 backdrop-blur-sm relative">
        <div className="flex items-baseline">
          <img src={footerLogo} alt="" className="absolute h-[300px] -z-50 blur" />
        </div>
        <div className="container ">
          <div className="grid md:grid-cols-3 pt-5">
            {/* company details */}
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                <img src={footerLogo} alt="" className="max-w-[70px] opacity-100 " />
                MentorsGyan
              </h1>
              <p>
                
              </p>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  महत्वपूर्ण लिंक
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                        key={link.title}
                      >
                        <a href={link.link}><span>{link.title}</span></a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
              </div>

              {/* social links */}

              <div>
                <div className="flex items-center gap-3 mt-6">
                  {
                      SocialMedia.map(data => (
                          <a href={data.link} key={data.name}>
                              {data.icon}
                          </a>
                      ))
                  }
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>OM-505, हर्ष किंगडम, अशोक नगर, सरकंडा, बिलासपुर, छत्तीसगढ़ - 495001</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <FaMobileAlt />
                    <p>+91 9039130180</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;