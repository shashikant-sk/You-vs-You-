import React from "react";
import styled from "styled-components";
import SignIn from "./SignIn";

const style = {
  Container: "bg-[#e5e6e9] h-screen flex select-none   w-screen",
  image: "h-[250px] w-[250px] object-cover ml-[100px]",
  Details: "flex flex-col items-center h-full justify-center",
  slogan: "text-5xl font-bold ",
};
const LoginPage = () => {
  return (
    <Container className={style.Container}>
      {/* Left side component */}
      <div className="w-[55%] h-full">
        <Details className={style.Details}>
          {/* Slogan */}
          <div className={style.slogan}>
            <h1>Sign In to Recharge Direct</h1>
          </div>
          {/* register here */}
          <div className="register text-xl mt-16">
            <span>If you don't have an account </span> <br />
            <span>
              {" "}
              You can{" "}
              <span className="register_text font-bold cursor-pointer text-[#101fe0]">
                {" "}
                Register here!
              </span>{" "}
            </span>
          </div>
          <ImageContainer>
            <img src="/assets/Saly-44.png" className={style.image} alt="" />
          </ImageContainer>
        </Details>
      </div>
      {/* Right side */}
      <div className="w-[45%] h-full flex mt-[200px]">
        <SignIn />
      </div>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div``;
const ImageContainer = styled.div``;

const Details = styled.div``;
