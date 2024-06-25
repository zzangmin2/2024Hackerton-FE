import styled from "styled-components";

// ----------index.tsx style-----------------
// 사용자 입력 Form
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 515px;
  height: 400px;
  background: #ffffff;
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

// 사용할 닉네임 입력 input
export const Input = styled.input`
  width: 276px;
  height: 57px;
  border: 1px solid #f7f7f7;
  border-radius: 10px;
  background-color: white;
  color: black;
  font-size: 18px;
  text-align: center;
  &::placeholder {
    color: #bababa;
    font-size: 18px;
    text-align: center;
  }
`;

// // 시작하기 버튼
// export const Button = styled.button`
//   width: 386px;
//   height: 60px;
//   background-color: #00a6dd;
//   color: white;
//   border-radius: 10px;
//   cursor: pointer;
//   font-size: 18px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-weight: 700;
//   &:hover {
//     background-color: #0056b3;
//   }
//   aria-label: "시작하기";
// `;

export const Title = styled.h1`
  font-size: 1.5em;
  color: #a8866b;
`;

export const ButtonWrapper = styled.div`
  width: 390px;
`;

export const RandomNameContainer = styled.div`
  > button {
    border: none;
    background: none;
    text-decoration: underline;
    font-weight: 700;
    color: #decbbb;
    cursor: pointer;
  }
  margin-bottom: 20px;
`;
