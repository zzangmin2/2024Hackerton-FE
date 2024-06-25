// components/StyledButton.tsx
import { MouseEventHandler } from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  onClick:
    | MouseEventHandler<HTMLButtonElement>
    | ((event: React.FormEvent<HTMLFormElement>) => void);
}

const ButtonStyle = styled.button`
  /* width: 386px; */
  width: 100%;
  height: 60px;
  background-color: #a8866b;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;

  &:hover {
    background-color: #937963;
  }
`;

const StyledButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <ButtonStyle onClick={onClick}>{text}</ButtonStyle>;
};

export default StyledButton;
