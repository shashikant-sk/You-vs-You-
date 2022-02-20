import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { MdOutlineHorizontalRule } from "react-icons/md";
const style = {
  inputs: "border-none outline-none   bg-transparent w-[90%] ml-4 ",
  inputContainer: "bg-[#c0d4df]  shadow-lg rounded-xl w-[400px] py-4",
  Main: "flex flex-col items-center  space-y-8",
  signInBtn:
    "bg-[#4c63c9] mt-4 hover:bg-[#4c67df] shadow-2xl font-semibold w-[400px] text-center text-white text-2xl rounded-xl py-2 px-4 cursor-pointer",
  logoImage: "w-[60px] h-[40px] object-contain",
  logoContainer:
    "border-[1px] p-2 cursor-pointer border-[#aa9ea7] rounded-xl  hover:bg-white hover:shadow-2xl hover:translate-y-4 transition-all ease-in duration-300",
};
const SignIn = () => {
  const [Active, setActive] = useState(true);
  return (
    <div className="w-full flex flex-col h-screen items-center  ">
      <InputContainer className={style.Main}>
        <EmailContainer className="">
          {/* Email input */}
          <div className={style.inputContainer}>
            <input
              type="email"
              className={style.inputs}
              placeholder="Enter mail or phone number"
            />
          </div>
        </EmailContainer>
        {/* password */}
        <PasswordContainer className="">
          <div
            className={`${style.inputContainer} flex items-center justify-between`}
          >
            {/* inputs */}
            <input
              type={Active ? "password" : "text"}
              className={style.inputs}
              placeholder="Enter password"
            />
            {/* eye symbol */}
            <div className="mr-4" onClick={() => setActive(!Active)}>
              {Active ? (
                <FiEyeOff className="text-2xl text-gray-400  cursor-pointer" />
              ) : (
                <FiEye className="text-2xl text-gray-400  cursor-pointer" />
              )}
            </div>
            {/* recovery password */}
          </div>
          <div className="w-[400px] flex justify-end mt-2">
            <span className=" text-right  hover:text-[#101fe0]  text-gray-500 cursor-pointer">
              Recovery password
            </span>
          </div>
        </PasswordContainer>
      </InputContainer>
      {/* sign in btn */}
      <div className={style.signInBtn}>Sign in</div>

      {/* other media */}
      <span className="mt-4 text-lg">Or with other plat form</span>
      <div className="mt-8 flex items-center justify-around w-[400px]">
        {/* google */}
        <div className={style.logoContainer}>
          <img src="/assets/google.png" className={style.logoImage} alt="" />
        </div>
        {/* Apple */}
        <div className={style.logoContainer}>
          <img src="/assets/apple.png" className={style.logoImage} alt="" />
        </div>
        {/* Github */}
        <div className={style.logoContainer}>
          <img src="/assets/github.png" className={style.logoImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;

const EmailContainer = styled.div``;

const PasswordContainer = styled.div``;

const InputContainer = styled.div``;
