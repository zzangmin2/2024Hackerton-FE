import styled from "styled-components";
interface MessageProps {
  issender?: string;
}

// 메시지들을 담는 컨테이너.
export const MessageContainer = styled.div`
  color: black;
  height: 30rem;
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cbcbcb;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #818181;
  }
`;

// 개별 메시지
export const Message = styled.div<MessageProps>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin: 10px 0;
  ${({ issender }) =>
    issender === "true" &&
    `
    margin: 6px 0;
    justify-content: flex-end;
  `}

  p {
    text-align: start;
    font-weight: 700;
    margin: 0 0 5px 0; /* 상대방 이름과 메시지 사이의 간격을 증가 */
  }
`;

// 메시지의 내용
export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 0.75rem;
  }
`;

export const MessageText = styled.div`
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 0;
`;

// 아바타 이미지
export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  overflow: hidden;
`;

export const BubbleContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

// 말풍선
export const TextBubble = styled.div<MessageProps>`
  background-color: ${({ issender }) =>
    issender === "true" ? "#00A6DD" : "#F7F7F7"};
  color: ${({ issender }) => (issender === "true" ? "#FFF8F8" : "#000")};
  padding: 12px;
  border-radius: 10px;
  font-size: 12px;
  display: inline-block;
  white-space: pre-wrap;
  margin: ${({ issender }) =>
    issender === "true" ? "0 0 0 10px" : "0 10px 0 0"};
  position: relative;
`;

// 말풍선 오른쪽에 시간 표시
export const TimeText = styled.span`
  font-size: 0.75rem;
  color: #888;
  align-self: flex-end;
`;

export const EnterMessage = styled.div`
  height: 1rem;
  font-size: 0.75rem;
  color: #999;
`;

// 타임스탬프
export const Timestamp = styled.div`
  font-size: 10px;
  color: #c9c9c9;
`;
