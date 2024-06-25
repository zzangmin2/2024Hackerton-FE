import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonWrapper, Form, RandomNameContainer, Title } from "./styles";
import StyledButton from "../../components/StyledButton";

const adjectives: string[] = [
  "귀여운",
  "매혹적인",
  "매운",
  "영리한",
  "행복한",
  "활기찬",
  "재미있는",
  "사랑스러운",
  "용감한",
  "강력한",
  "우아한",
  "빛나는",
  "친절한",
  "신비로운",
  "호기심 많은",
  "즐거운",
];
const nouns: string[] = [
  "땅콩",
  "호두",
  "아몬드",
  "잣",
  "캐슈",
  "피스타치오",
  "마카다미아",
];

const getRandomElement = (array: string[]): string =>
  array[Math.floor(Math.random() * array.length)];

const generateRandomName = (): string => {
  const adjective = getRandomElement(adjectives);
  const noun = getRandomElement(nouns);
  const number = Math.floor(Math.random() * 1000) + 1; // 1부터 1000까지의 랜덤 숫자
  return `${adjective} ${noun} ${number}`;
};

const UserRegister: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    setUsername(generateRandomName());
  }, []);

  const handleGenerateNewName = (): void => {
    setUsername(generateRandomName());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (username.length < 2) {
      alert("최소 2글자 이상 입력해주세요.");
      return;
    }

    console.log("Submitted Username:", username);
    localStorage.setItem("chatBoxUserName", username);
    navigate("/intro");
  };

  return (
    <Form>
      <Title>땅콩</Title>
      <div>
        서비스를 이용하기 전, <br /> 땅콩이 서비스에서 사용할 이름을 지어줄게요
      </div>
      <RandomNameContainer>
        <h2>{username}</h2>
        <button onClick={handleGenerateNewName}>
          혹시 이름이 마음에 안드시나요?
        </button>
      </RandomNameContainer>
      <ButtonWrapper>
        <StyledButton text="서비스 입장하기" onClick={handleSubmit} />
      </ButtonWrapper>
    </Form>
  );
};

export default UserRegister;
