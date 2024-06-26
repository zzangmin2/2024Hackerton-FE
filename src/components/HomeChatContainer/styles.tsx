import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface InputProps {
  isCommand: boolean;
}

// 전체 채팅 컨테이너
export const Container = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

// 채팅방 제목
export const Header = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f7f7f7;
`;

// 메시지들을 담는 컨테이너.
export const MessageContainer = styled.div`
  text-align: left;
  color: black;
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

interface MessageProps {
  issender?: string;
}

// 개별 메시지
export const Message = styled.div<MessageProps>`
  display: flex;
  align-items: flex-start;
  margin: 10px 0;
  ${({ issender }) =>
    issender === "true" &&
    `
    justify-content: flex-end;
  `}

  p {
    font-weight: 700;
    margin: 0 0 5px 0; /* 상대방 이름과 메시지 사이의 간격을 증가 */
  }
`;

export const MessageText = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  width: 100%;
  margin: 0 10px 10px 10px;

  div {
    display: flex;
    align-items: center;
  }

  div.active {
    width: 10px;
    height: 10px;
    background-color: #32e522;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

// 입력창과 버튼
export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f7f7f7;
  position: relative;
`;

// 입력창의 스타일
export const Input = styled.input<InputProps>`
  color: black;
  margin-top: 2%;
  flex: 1;
  background-color: white;
  border: none;
  margin-left: 1%;
  margin-right: 3%;
  &:focus {
    outline: none;
  }
`;

export const WordRelayGameRule = styled.div`
  position: absolute;
  bottom: 3rem;
  font-size: 0.75rem;
  padding: 10px;
  border-radius: 10px;
  background-color: #e6f7ff;
  color: #007298;
`;

export const CommandDisplay = styled.div`
  /* position: absolute; */
  margin-top: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 2px 5px;
  font-size: 14px;
  color: #717171;
  font-weight: 700;
`;

// 전송 버튼
export const SendButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

// 전송 버튼 아이콘 스타일을 정의합니다.
export const SendIcon = styled(FontAwesomeIcon)<{ inputLength: number }>`
  margin-top: 11px;
  font-size: 22px;
  color: ${({ inputLength }) => (inputLength > 0 ? "#A8866B" : "#cccccc")};
`;

// 헤더 부분의 아바타 이미지 스타일
export const HeaderAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 10px;
`;
