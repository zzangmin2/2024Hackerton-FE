import {
  Avatar,
  EnterMessage,
  Message,
  MessageContainer,
  MessageContent,
  TextBubble,
  Timestamp,
} from "./styles";
import profileImage from "../../image/문채현2.jpg";
import { useEffect, useRef } from "react";
import { wsMessage } from "../../typings/db";
import dayjs from "dayjs";

interface ChatProps {
  messages: wsMessage[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const userName = localStorage.getItem("chatBoxUserName");

  useEffect(() => {
    console.log(messages);

    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // 날짜 형식을 변환하는 함수
  const formatDate = (dateString: string) => {
    return dayjs(dateString).format("YYYY년 MM월 DD일");
  };

  return (
    <>
      <MessageContainer>
        {messages.length >= 1 ? (
          messages.map((msg, index) => (
            <div key={index}>
              {/* 이전 메시지와 날짜가 다르면 Timestamp를 표시 */}
              {(index === 0 ||
                messages[index - 1].time.substring(0, 10) !==
                  msg.time.substring(0, 10)) && (
                <Timestamp>{formatDate(msg.time)}</Timestamp>
              )}
              <Message issender={(msg.sender === userName).toString()}>
                {msg.sender !== userName && (
                  <Avatar src={profileImage} alt="avatar" />
                )}
                <MessageContent>
                  {msg.sender !== userName && <p>{msg.sender}</p>}
                  {msg.type === "TALK" ? (
                    <TextBubble issender={(msg.sender === userName).toString()}>
                      {msg.message}
                    </TextBubble>
                  ) : (
                    <EnterMessage>{msg.message}</EnterMessage>
                  )}
                </MessageContent>
              </Message>
            </div>
          ))
        ) : (
          <></>
        )}
        <div ref={messagesEndRef} />
      </MessageContainer>
    </>
  );
};

export default Chat;
