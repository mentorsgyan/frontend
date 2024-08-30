import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo/logo.png";
import DarkLogo from "../../assets/logo/footer_logo.png";

const Hero = () => {   
    return (
        <div className="bg-white dark:bg-gray-800 overflow-hidden font-mukta">

        <div className="relative isolate px-6 pt-14 lg:px-8 flex flex-col md-900:flex-row items-center">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center md-900:mt-0 mt-32">
            <img src={Logo} alt="" className="w-1/2 invert-0 dark:hidden block" />
            <img src={DarkLogo} alt="" className="w-1/2 invert-0 hidden dark:block" />
            <h1 className="dark:block hidden text-4xl"><strong className="text-white tracking-widest">M E N T O R S</strong> &nbsp; <strong className="text-secondary tracking-widest">G Y A N</strong></h1>
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.{' '}
                <a href="#" className="font-semibold text-primary">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div> */}
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-semibold text-gray-900 dark:text-white sm:text-6xl">
                <strong className="text-secondary">आपकी</strong> तैयारी, <strong className="text-secondary">हमारी</strong> ज़िम्मेदारी
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                MentorsGyan में हमारा मिशन है विशेषज्ञ मेंटॉरशिप के माध्यम से, हम CGPSC परीक्षार्थियों को सही मार्गदर्शन प्रदान करने के लिए समर्पित हैं ताकि वे अपने लक्ष्यों को हासिल कर सकें।
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="#services" className="text-md font-semibold leading-6 text-gray-900 dark:text-white">
                और अधिक जानें <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
    );
};

export default Hero;
