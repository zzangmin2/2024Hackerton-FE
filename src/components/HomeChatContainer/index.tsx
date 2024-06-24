import {
  Container,
  Header,
  //   MessageContainer,
  //   Message,
  //   MessageContent,
  MessageText,
  //   Avatar,
  //   TextBubble,
  //   Timestamp,
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
import Chat from "../Chat";

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
    throw new Error("chatRoomDetailContext.Provider 없음");
  }
  const { chatRoomDetail, setChatRoomDetail } = chatRoomDetailContext;

  //페이지 이동할 때마다 roomInfo 수정하기
  useEffect(() => {
    if (roomIndex && chatRoomList.length >= 1) {
      roomInfo = chatRoomList[parseInt(roomIndex)];
      loadChatInfo();
    }
  }, [roomIndex, chatRoomList]);

  const loadChatInfo = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/chat/room/${roomInfo.roomId}`
      );
      setChatRoomDetail(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadChatInfo();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderAvatar src={profileImage} alt="avatar" />
        <MessageText>
          <p>{chatRoomDetail.name}</p>
        </MessageText>
      </Header>
      <Chat />
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
