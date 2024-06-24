import {
  Container,
  Header,
  MessageContainer,
  Message,
  MessageContent,
  MessageText,
  Avatar,
  TextBubble,
  Timestamp,
  InputContainer,
  Input,
  SendButton,
  HeaderAvatar,
  SendIcon,
} from "./styles";
import profileImage from "../../image/문채현2.jpg";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { ChatRoomDetailContext, ChatRoomListContext } from "../../App";
import { useContext, useEffect } from "react";
import axios from "axios";
import { ChatRoomItemType } from "../../typings/db";

const HomeChatContainer = () => {
  const { roomIndex } = useParams();

  let roomInfo: ChatRoomItemType;
  // ChatRoomListContext 가져오기
  const chatRoomListContext = useContext(ChatRoomListContext);
  if (!chatRoomListContext) {
    throw new Error("ChatRoomListContext.Provider 없음");
  }
  const { chatRoomList } = chatRoomListContext;

  // ChatRoomDetailContext 가져오기
  const chatRoomDetailContext = useContext(ChatRoomDetailContext);
  if (!chatRoomDetailContext) {
    throw new Error("ChatRoomListContext.Provider 없음");
  }
  const { chatRoomDetail, setChatRoomDetail } = chatRoomDetailContext;

  if (roomIndex && chatRoomList.length >= 1) {
    roomInfo = chatRoomList[parseInt(roomIndex)];
  }

  const loadChatData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/chat/rooms/${roomInfo.roomId}`
      );
      setChatRoomDetail(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadChatData();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderAvatar src={profileImage} alt="avatar" />
        <MessageText>
          <p>{chatRoomDetail.name}</p>
        </MessageText>
      </Header>
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
      <InputContainer>
        <Input type="text" placeholder="메시지를 입력해주세요" />
        <SendButton>
          <SendIcon icon={faPaperPlane} />
        </SendButton>
      </InputContainer>
    </Container>
  );
};

export default HomeChatContainer;
