import styled from 'styled-components';

// ----------index.tsx style-----------------
// 사용자 입력 Form
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 515px;
  height: 351px;
  background: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 48px 100px rgba(17, 12, 46, 0.05);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// InputRow: 입력 필드와 버튼을 같은 줄에 정렬하기 위한 컨테이너.
export const InputRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

// 중복확인 버튼
export const CheckButton = styled.button`
  width: 96px;
  height: 60px;
  margin-left: 12px;
  background-color: #FFFFFF;
  color: #00A6DD;
  border: 1px solid #00A6DD;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  &:hover {
    background-color: #00A6DD;
    color: white;
  }
`;

// 사용할 닉네임 입력 input
export const Input = styled.input`
  width: 276px;
  height: 57px;
  border: 1px solid #F7F7F7;
  border-radius: 10px;
  background-color: white;
  color: black;
  font-size: 18px;
  text-align: center;
  &::placeholder {
    color: #BABABA;
    font-size: 18px;
    text-align: center;
  }
`;

// 시작하기 버튼
export const Button = styled.button`
  width: 386px;
  height: 60px;
  background-color: #00A6DD;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  &:hover {
    background-color: #0056b3;
  }
  aria-label: "시작하기";
`;

// DAELIM CHAT
export const Title = styled.h1`
  font-size: 1.5em;
  color: #00A6DD;
  margin-bottom: 40px;
`;
