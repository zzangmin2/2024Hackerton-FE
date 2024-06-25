import {
  Avatar,
  BubbleContainer,
  EnterMessage,
  Message,
  MessageContainer,
  MessageContent,
  TextBubble,
  TimeText,
  Timestamp,
} from "./styles";
import { useEffect, useRef } from "react";
import { wsMessage } from "../../typings/db";
import dayjs from "dayjs";
import Gravatar from "react-gravatar";

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
                  <Avatar>
                    <Gravatar email={msg.sender} size={40} default="retro" />
                  </Avatar>
                )}
                <MessageContent>
                  {msg.sender !== userName && <p>{msg.sender}</p>}
                  <BubbleContainer>
                    {msg.sender === userName && msg.type === "TALK" && (
                      <TimeText>{dayjs(msg.time).format("HH:mm")}</TimeText>
                    )}
                    {msg.type === "TALK" ? (
                      <TextBubble
                        issender={(msg.sender === userName).toString()}
                      >
                        {msg.message}
                      </TextBubble>
                    ) : (
                      <EnterMessage>{msg.message}</EnterMessage>
                    )}

                    {msg.sender !== userName && msg.type === "TALK" && (
                      <TimeText>{dayjs(msg.time).format("HH:mm")}</TimeText>
                    )}
                  </BubbleContainer>
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
