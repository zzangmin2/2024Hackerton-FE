import {
  Avatar,
  Message,
  MessageContainer,
  MessageContent,
  TextBubble,
  Timestamp,
} from "./styles";
import profileImage from "../../image/문채현2.jpg";

const Chat = () => {
  return (
    <>
      <MessageContainer>
        <Timestamp>2024년 6월 23일</Timestamp>
        <Message>
          <Avatar src={profileImage} alt="avatar" />
          <MessageContent>
            <p>상대방누군가</p>
            <TextBubble>상대방이 보낸 메세지</TextBubble>
          </MessageContent>
        </Message>
        <Message isSender>
          <MessageContent>
            <TextBubble isSender>내가 보낸 메세지</TextBubble>
          </MessageContent>
        </Message>
      </MessageContainer>
    </>
  );
};

export default Chat;
