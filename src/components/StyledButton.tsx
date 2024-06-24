// components/StyledButton.tsx
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  text: string;
  to: string; // 이동할 경로
}

const ButtonStyle = styled.button`
  width: 386px;
  height: 60px;
  background-color: #00A6DD;
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
    background-color: #0056b3;
  }
`;

const StyledButton: React.FC<ButtonProps> = ({ text, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return <ButtonStyle onClick={handleClick}>{text}</ButtonStyle>;
};

export default StyledButton;
