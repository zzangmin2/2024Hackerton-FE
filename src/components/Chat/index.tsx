import {
  Avatar,
  Message,
  MessageContainer,
  MessageContent,
  TextBubble,
  Timestamp,
} from "./styles";
import profileImage from "../../image/문채현2.jpg";
import { useEffect, useRef } from "react";
import { wsMessage } from "../../typings/db";

interface ChatProps {
  messages: wsMessage[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <MessageContainer>
        <Timestamp>2024년 6월 23일</Timestamp>

        {messages.length >= 1 ? (
          messages.map((msg, index) => (
            <Message
              key={index}
              issender={(msg.sender === "프론트유저").toString()}
            >
              {msg.sender !== "프론트유저" && (
                <Avatar src={profileImage} alt="avatar" />
              )}
              <MessageContent>
                {msg.sender !== "프론트유저" && <p>{msg.sender}</p>}
                <TextBubble issender={(msg.sender === "프론트유저").toString()}>
                  {msg.message}
                </TextBubble>
              </MessageContent>
            </Message>
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
