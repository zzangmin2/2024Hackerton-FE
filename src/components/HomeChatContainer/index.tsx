import {
  Container,
  Header,
  MessageText,
  InputContainer,
  Input,
  SendButton,
  SendIcon,
  CommandDisplay,
  WordRelayGameRule,
} from "./styles";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { ChatRoomDetailContext, ChatRoomListContext } from "../../App";
import {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import axios from "axios";
import { ChatRoomItemType } from "../../typings/db";
import Chat from "../Chat";
import useWebSocket from "../../hook/useWebSocket";
import useCheckLunchKeyword from "../../hook/useCheckLunchKeyword";
import useCheckWordRelayGame from "../../hook/useCheckWordRelayGame";
import useCreateMessage from "../../hook/useCreateMessage";

const HomeChatContainer = () => {
  const { roomIndex } = useParams();
  const [roomInfo, setRoomInfo] = useState<ChatRoomItemType | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [isCommand, setIsCommand] = useState(false);
  const [wordRelayGameState, setWordRelayGameState] = useState<boolean>(false);
  const hasEntered = useRef(false);

  const chatRoomListContext = useContext(ChatRoomListContext);
  if (!chatRoomListContext) {
    throw new Error("ChatRoomListContext.Provider 없음");
  }
  const { chatRoomList } = chatRoomListContext;

  const chatRoomDetailContext = useContext(ChatRoomDetailContext);
  if (!chatRoomDetailContext) {
    throw new Error("ChatRoomDetailContext.Provider 없음");
  }
  const { chatRoomDetail, setChatRoomDetail } = chatRoomDetailContext;

  const sessionId = useMemo(() => localStorage.getItem("chatBoxSessionId"), []);
  const userName = useMemo(() => localStorage.getItem("chatBoxUserName"), []);

  const { messages, sendMessage, setMessages } = useWebSocket(
    "ws://localhost:8080/ws/chat",
    roomInfo?.roomId || null
  );

  const createMessage = useCreateMessage(roomInfo, userName);
  const { checkLunchKeyword, loading: lunchLoading } = useCheckLunchKeyword(
    roomInfo,
    userName,
    sendMessage
  );
  const checkWordRelayGame = useCheckWordRelayGame(
    roomInfo,
    userName,
    sendMessage,
    wordRelayGameState,
    setWordRelayGameState
  );

  useEffect(() => {
    if (lunchLoading) {
      setInputValue("");
      setInputValue("학식을 가져오는 중 ..");
    }
  }, [lunchLoading]);

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

  const isFirstEntry = useCallback(
    async (roomId: string) => {
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
    },
    [sessionId]
  );

  useEffect(() => {
    const checkFirstEntry = async () => {
      if (roomInfo && userName && !hasEntered.current) {
        hasEntered.current = true;

        const isExistingUser = await isFirstEntry(roomInfo.roomId);
        if (!isExistingUser) {
          const enterMessage = createMessage("입장", "ENTER");

          sendMessage(enterMessage);
        }
      }
    };

    checkFirstEntry();
  }, [roomInfo, userName, sendMessage, isFirstEntry]);

  const handleSendMessage = useCallback(async () => {
    if (inputValue.trim() === "") return;
    if (roomInfo && userName) {
      const newMessage = createMessage(inputValue, "TALK");
      sendMessage(newMessage);
      await checkLunchKeyword(inputValue);
      await checkWordRelayGame(inputValue);

      setInputValue("");
      setIsCommand(false);
    }
  }, [
    inputValue,
    roomInfo,
    userName,
    sendMessage,
    createMessage,
    checkLunchKeyword,
    checkWordRelayGame,
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.startsWith("/학식") || value.startsWith("/끝말잇기")) {
      setIsCommand(true);
    } else {
      setIsCommand(false);
    }
  };

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        handleSendMessage();
      }
    },
    [handleSendMessage]
  );

  return (
    <Container>
      <Header>
        <MessageText>
          <p>{chatRoomDetail?.name}</p>
          <div>
            <div className="active" />
            <p>{chatRoomDetail?.roomUserCnt} users</p>
          </div>
        </MessageText>
      </Header>
      <Chat messages={messages} />
      <InputContainer>
        {isCommand && inputValue.startsWith("/끝말잇기") && (
          <WordRelayGameRule>
            Tip !
            <br />
            처음 시작 시
            <b>
              <br /> /끝말잇기 ![제시 단어]
            </b>
            <br />
            형태로 입력해주세요!
          </WordRelayGameRule>
        )}
        {isCommand && (
          <CommandDisplay>
            {inputValue.startsWith("/학식") ? "/학식" : "/끝말잇기"}
          </CommandDisplay>
        )}
        <Input
          type="text"
          placeholder="메시지를 입력해주세요"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          isCommand={isCommand}
          disabled={lunchLoading} // 입력 필드 비활성화
        />
        <SendButton onClick={handleSendMessage} disabled={lunchLoading}>
          <SendIcon icon={faPaperPlane} inputLength={inputValue.length} />
        </SendButton>
      </InputContainer>
    </Container>
  );
};

export default HomeChatContainer;
