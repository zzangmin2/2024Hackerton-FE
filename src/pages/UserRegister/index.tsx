import React, { useState } from "react";
// import {
//   Form,
//   InputRow,
//   Input,
//   CheckButton,
//   Title,
//   ButtonWrapper,
// } from "./styles";
// import StyledButton from "../../components/StyledButton"; // StyledButton 경로
import { useNavigate } from "react-router-dom"; // useNavigate 훅 임포트
import RegisterForm from "../../components/RegisterForm";

const UserRegister = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Username:", username);
    localStorage.setItem("chatBoxUserName", username);
    navigate("/");
  };

  return (
    <RegisterForm
      handleSubmit={handleSubmit}
      title="CHAT BOX"
      placeholder={"사용할 닉네임을 입력해주세요"}
      value={username}
      setValue={setUsername}
      buttonText="시작하기"
    />
  );
};

export default UserRegister;
