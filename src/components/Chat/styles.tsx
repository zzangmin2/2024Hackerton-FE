import styled from "styled-components";
interface MessageProps {
  isSender?: boolean;
}

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

// 개별 메시지
export const Message = styled.div<MessageProps>`
  display: flex;
  align-items: flex-start;
  margin: 10px 0;
  ${({ isSender }) =>
    isSender &&
    `
    justify-content: flex-end;
  `}

  p {
    font-weight: 700;
    margin: 0 0 5px 0; /* 상대방 이름과 메시지 사이의 간격을 증가 */
  }
`;

// 메시지의 내용
export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 14px;
  }
`;

export const MessageText = styled.div`
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 0;
`;

// 아바타 이미지
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

//말풍선
export const TextBubble = styled.div<MessageProps>`
  background-color: ${(props) => (props.isSender ? "#00A6DD" : "#F7F7F7")};
  color: ${(props) => (props.isSender ? "#FFF8F8" : "#000")};
  padding: 12px;
  border-radius: 10px;
  font-size: 12px;
  max-width: 100%; /* 말풍선의 최대 너비를 증가 */
  display: inline-block;
  white-space: pre-wrap;
`;

// 타임스탬프
export const Timestamp = styled.div`
  font-size: 11px;
  text-align: center;
  color: #999;
  margin: 10px 0;
  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ddd;
    margin: auto;
  }

  &::before {
    margin-right: 20px;
  }

  &::after {
    margin-left: 20px;
  }

  display: flex;
  align-items: center;
  width: 100%;
`;
