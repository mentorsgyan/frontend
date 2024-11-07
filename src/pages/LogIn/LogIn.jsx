import React, { useRef, useState } from "react";
import Logo from "../../assets/logo/logo.png";

import { MdEmail } from "react-icons/md";
import OTPInput from "otp-input-react";

const LogIn = () => {
  const [isOTPsent, setisOTPsent] = useState(false);
  return (
    <main className="h-screen flex sm:flex-row items-center gap-6 flex-col">
      <div className="hidden sm:h-full sm:w-3/5 w-full bg-white sm:flex flex-col gap-10 justify-center items-center">
        <img src={Logo} alt="Logo" className="h-auto sm:w-4/5 w-3/5" />
        <h1 className="text-3xl text-center font-semibold text-gray-900 dark:text-white sm:text-6xl">
          आपकी <strong className="text-secondary">तैयारी</strong>, हमारी
          <strong className="text-secondary"> ज़िम्मेदारी</strong>
        </h1>
      </div>
      <div className="grow h-full sm:h-full sm:w-2/5 w-full sm:bg-gray-300 flex justify-center items-center">
        <div className="w-[98%] flex items-center flex-col gap-14 ">
          <img
            src={Logo}
            alt="Logo"
            className="sm:hidden block
             h-auto sm:w-4/5 w-3/5"
          />

          <div className="font-bold text-4xl">LOGIN</div>

          <div className="w-1/2">
            {!isOTPsent ? (
              <WithoutOTP setisOTPsent={setisOTPsent} />
            ) : (
              <WithOTP />
            )}
          </div>

          <div className="flex items-center w-full">
            <hr className="flex-1 border-t border-black" />
            <span className="px-3 text-black font-medium">OR</span>
            <hr className="flex-1 border-t border-black" />
          </div>
          <form className="flex w-1/2 items-center ">
            <MdEmail className="h-10 w-14 bg-white" />
            <button
              type="submit"
              className="w-full bg-secondary font-semibold h-10 sm:text-sm text-xs"
            >
              Login with Google
            </button>
          </form>
        </div>
      </div>
      <div className="bg-gray-300 w-full block sm:hidden h-20 pt-4">
        <h1 className="text-3xl text-center font-semibold text-gray-900 dark:text-white sm:text-6xl">
          आपकी <strong className="text-secondary">तैयारी</strong>, हमारी
          <strong className="text-secondary"> ज़िम्मेदारी</strong>
        </h1>
      </div>
    </main>
  );
};

export default LogIn;



function WithoutOTP({ setisOTPsent }) {
  const inputRef = useRef();

  const handleonChange = () => {
    if (inputRef.current.value.length === 10) {
      inputRef.current.setCustomValidity("");
    } else {
      inputRef.current.setCustomValidity(
        "Please enter a valid 10-digit mobile number"
      );
    }
    inputRef.current.checkValidity();
  };
  const handleGetOtpClick = (e) => {
    e.preventDefault();
    setisOTPsent(true);
  };
  return (
    <form action="" className="flex flex-col gap-4">
      <input
        required
        ref={inputRef}
        onChange={handleonChange}
        type="tel"
        placeholder="Enter your mobile number"
        className="outline-none border-none text-sm bg-gray-300 sm:bg-white sm:text-sm"
        autoFocus
      />
      <button
        onClick={handleGetOtpClick}
        type="submit"
        className="w-full bg-secondary font-semibold h-10 sm:text-sm text-xs"
      >
        Get OTP
      </button>
    </form>
  );
}

function WithOTP() {
  const [OTP, setOTP] = useState("");
  return (
    <div className="flex flex-col gap-4 items-center">
      <OTPInput
        value={OTP}
        onChange={setOTP}
        autoFocus
        OTPLength={4}
        otpType="number"
        disabled={false}
        secure
      />
      <button type="submit" className="w-full bg-secondary font-semibold h-10">
        Enter OTP
      </button>
    </div>
  );
}
