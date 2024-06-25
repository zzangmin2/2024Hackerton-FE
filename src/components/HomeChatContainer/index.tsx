import {
  Container,
  Header,
  MessageText,
  InputContainer,
  Input,
  SendButton,
  SendIcon,
} from "./styles";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { ChatRoomDetailContext, ChatRoomListContext } from "../../App";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { ChatRoomItemType } from "../../typings/db";
import Chat from "../Chat";
import useWebSocket from "../../hook/useWebSocket";
import dayjs from "dayjs";

const HomeChatContainer = () => {
  const { roomIndex } = useParams();
  // 방 정보 ( 방 이름 .. ) 상태
  const [roomInfo, setRoomInfo] = useState<ChatRoomItemType | null>(null);
  // 채팅 입력 값 상태
  const [inputValue, setInputValue] = useState("");

  // 최초 입장 상태
  const hasEntered = useRef(false);

  // ChatRoomListContext 가져오기
  const chatRoomListContext = useContext(ChatRoomListContext);
  if (!chatRoomListContext) {
    throw new Error("ChatRoomListContext.Provider 없음");
  }
  const { chatRoomList } = chatRoomListContext;

  // ChatRoomDetailContext 가져오기
  const chatRoomDetailContext = useContext(ChatRoomDetailContext);
  if (!chatRoomDetailContext) {
    throw new Error("ChatRoomDetailContext.Provider 없음");
  }
  const { chatRoomDetail, setChatRoomDetail } = chatRoomDetailContext;

  // localStorage에서 userName과 sessionId가져오기
  const sessionId = localStorage.getItem("chatBoxSessionId");
  const userName = localStorage.getItem("chatBoxUserName");

  // WebSocket 훅 사용
  const { messages, sendMessage, setMessages } = useWebSocket(
    "ws://localhost:8080/ws/chat",
    roomInfo?.roomId || null
  ); // 수정된 부분: roomInfo?.roomId를 useWebSocket에 전달

  //페이지 이동할 때마다 roomInfo 수정하기
  useEffect(() => {
    const loadChatInfo = async (roomIdx: number) => {
      try {
        const room = chatRoomList[roomIdx];
        const response = await axios.get(
          `http://localhost:8080/chat/room/${room.roomId}`
        );
        setRoomInfo(room);
        setChatRoomDetail(response.data);
        setMessages([]);
        hasEntered.current = false;
      } catch (error) {
        console.error(error);
      }
    };

    if (roomIndex && chatRoomList.length >= 1) {
      const roomIdx = parseInt(roomIndex, 10);
      if (!isNaN(roomIdx) && roomIdx >= 0 && roomIdx < chatRoomList.length) {
        loadChatInfo(roomIdx);
      }
    }
  }, [roomIndex, chatRoomList, setChatRoomDetail, setMessages]);

  //채팅방 최초 입장확인 함수
  const isFirstEntry = async (roomId: string) => {
    try {
      if (sessionId) {
        const response = await axios.get(
          `http://localhost:8080/chat/${roomId}/isUserInRoom`,
          {
            headers: {
              "session-id": sessionId,
            },
          }
        );

        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  };

  //채팅방 최초 입장 시에 type:"ENTER"인 데이터 보내기
  useEffect(() => {
    const checkFirstEntry = async () => {
      if (roomInfo && userName && !hasEntered.current) {
        hasEntered.current = true;

        const isExistingUser = await isFirstEntry(roomInfo.roomId);
        if (!isExistingUser) {
          const enterMessage = {
            type: "ENTER",
            roomId: roomInfo.roomId,
            sender: userName,
            message: "입장",
            time: dayjs().format("YYYY년 MM월 DD일 HH:mm"),
          };

          sendMessage(enterMessage);
        }
      }
    };

    checkFirstEntry();
  }, [roomInfo, userName, sendMessage]);

  // 메세지 전송하기
  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;
    if (roomInfo && userName) {
      const newMessage = {
        type: "TALK",
        roomId: roomInfo.roomId,
        sender: userName,
        message: inputValue,
        time: new Date().toString(),
      };

      sendMessage(newMessage);
      setInputValue("");
    }
  };

  return (
    <Container>
      <Header>
        <MessageText>
          <p>{chatRoomDetail?.name}</p>
          <div>
            <div className="active" />
            <p>{chatRoomDetail?.chatUserCnt} users</p>
          </div>
        </MessageText>
      </Header>
      <Chat messages={messages} />{" "}
      {/* 수정된 부분: messages가 올바르게 전달되는지 확인 */}
      <InputContainer>
        <Input
          type="text"
          placeholder="메시지를 입력해주세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SendButton onClick={handleSendMessage}>
          <SendIcon icon={faPaperPlane} inputLength={inputValue.length} />
        </SendButton>
      </InputContainer>
    </Container>
  );
};

export default HomeChatContainer;
