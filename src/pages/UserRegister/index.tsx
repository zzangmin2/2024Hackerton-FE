import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 임포트
import RegisterForm from "../../components/RegisterForm";

const UserRegister = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username.length < 2) {
      alert("최소 2글자 이상 입력해주세요.");
      return;
    }

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
