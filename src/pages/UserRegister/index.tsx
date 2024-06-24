import React, { useState } from 'react';
import { Form, InputRow, Input, CheckButton, Title } from './styles';
import StyledButton from '../../components/StyledButton'; // StyledButton 경로
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트

const UserRegister = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleCheckUsername = () => {
    console.log("Checking Username:", username);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted Username:", username);
    navigate('/index2'); // 폼 제출 후 페이지 이동
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>DAELIM CHAT</Title>
      <InputRow>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="사용할 닉네임을 입력해주세요"
        />
        <CheckButton onClick={handleCheckUsername}>중복확인</CheckButton>
      </InputRow>
      <StyledButton text="시작하기" to="/user-home" /> {/* 이동할 경로 설정 */}
    </Form>
  );
};

export default UserRegister;
