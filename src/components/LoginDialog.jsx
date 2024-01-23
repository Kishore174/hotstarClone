import React, { useState } from "react";
import Home from "./home";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const LoginDialog = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isLoginButtonVisible, setLoginButtonVisible] = useState(true);
  const [mobileNumber, setMobileNumber] = useState("");
  const [isMobileNumberValid, setIsMobileNumberValid] = useState(true);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [loginFail, setLoginFail] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const toggleDialog = () => {
    setLoginButtonVisible(!isLoginButtonVisible);
    setMobileNumber("");
    setOtp(["", "", "", ""]);
    setIsOtpVisible(false);
    setLoginSuccess(false);
  };

  const handleMobileNumberChange = (e) => {
    const newMobileNumber = e.target.value;
    setMobileNumber(newMobileNumber);
    setIsMobileNumberValid(newMobileNumber.length === 10);
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const showOtp = () => {
    setIsOtpVisible(true);
  };

  const handleSubmit = () => {
    setLoginFail(true);

    setLoginSuccess(true);
  };
  

  const close = () => {
    // toggleDialog();
    // navigate("/dashboard");
    console.log("hit");
    setDialogOpen(true);
    setLoginFail(true);
    setLoginButtonVisible(true);
    console.log("after", isDialogOpen, "d", loginSuccess);
  };

  return (
    <div>
      <Home />
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        {isDialogOpen && (
          <div className="text-white text-center bg-gray-800 p-8 rounded-lg">
            {loginFail === false && (
              <>
                <div className="relative">
                  <button
                    onClick={() => {
                      close();
                    }}
                    className="absolute right-0 my-30"
                  >
                    <IoClose className="text-white cursor-pointer" size={20} />
                  </button>
                </div>

                <h1 className="text-2xl font-bold mb-4">
                  Login or Sign up to Continue
                </h1>

                <div className="flex items-center mt-4">
                  <input
                    type="text"
                    placeholder="+91"
                    className="w-[15%] p-2  bg-transparent  border border-gray-600 rounded mr-2"
                  />
                  <input
                    type="text"
                    placeholder="Enter your mobile number"
                    value={mobileNumber}
                    onChange={handleMobileNumberChange}
                    className={`  bg-transparent  w-full p-2 border ${
                      isMobileNumberValid ? "border-gray-600" : "border-red-500"
                    } rounded`}
                  />
                </div>

                {!isMobileNumberValid && (
                  <p className="text-red-500 text-sm mt-2">
                    Please enter a valid 10-digit mobile number.
                  </p>
                )}

                {!isOtpVisible && (
                  <button
                    className="px-16 py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={showOtp}
                    disabled={!isMobileNumberValid}
                  >
                    Get OTP
                  </button>
                )}

                {isOtpVisible && (
                  <>
                    <div className="flex mt-4">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength="1"
                          placeholder="0"
                          value={digit}
                          onChange={(e) =>
                            handleOtpChange(index, e.target.value)
                          }
                          className="w-1/8 p-2 text-white bg-transparent border border-gray-600 rounded mx-1 text-center"
                        />
                      ))}
                    </div>

                    <button
                      className="px-16 py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </>
                )}
              </>
            )}
            {loginSuccess && (
              <>
                <h1 className="text-2xl font-bold mb-4">Login Successful!</h1>
                <FaCheckCircle className="text-5xl text-green-500 mb-4 size-30   ml-16" />

                <button
                  className="px-16 py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => {
                    toggleDialog();
                    navigate("/dashboard");
                  }}
                >
                  Close
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {isLoginButtonVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-3xl font-bold">Login To Distney+ Hotstar</h1>
            <button
              className="mt-4 px-16 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => {
                toggleDialog();
                setLoginFail(false);
                setDialogOpen(true);
              }}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginDialog;
