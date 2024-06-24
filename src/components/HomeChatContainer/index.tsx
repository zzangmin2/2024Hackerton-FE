import {
  Container,
  Header,
  MessageText,
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
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { ChatRoomItemType } from "../../typings/db";
import Chat from "../Chat";
import useWebSocket from "../../hook/useWebSocket";

const HomeChatContainer = () => {
  const { messages, sendMessage } = useWebSocket("ws://localhost:8080/ws/chat");
  const { roomIndex } = useParams();
  const [inputValue, setInputValue] = useState("");
  const hasEntered = useRef(false);

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
      hasEntered.current = false;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (chatRoomDetail && !hasEntered.current) {
      const enterMessage = {
        type: "ENTER",
        roomId: chatRoomDetail.roomId,
        sender: "프론트유저",
        message: "",
        time: new Date().toString(),
      };

      console.log(enterMessage);
      sendMessage(enterMessage);
      hasEntered.current = true;
    }
  }, [chatRoomDetail]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;
    if (chatRoomDetail) {
      const newMessage = {
        type: "TALK",
        roomId: chatRoomDetail.roomId,
        sender: "프론트유저",
        message: inputValue,
        time: new Date().toString(),
      };

      console.log(newMessage);
      sendMessage(newMessage);
      setInputValue("");
    }
  };

  return (
    <Container>
      <Header>
        <HeaderAvatar src={profileImage} alt="avatar" />
        <MessageText>
          <p>{chatRoomDetail.name}</p>
        </MessageText>
      </Header>
      <Chat messages={messages} />
      <InputContainer>
        <Input
          type="text"
          placeholder="메시지를 입력해주세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SendButton onClick={handleSendMessage}>
          <SendIcon icon={faPaperPlane} />
        </SendButton>
      </InputContainer>
    </Container>
  );
};

export default HomeChatContainer;
