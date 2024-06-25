import StyledButton from "../../components/StyledButton"; // StyledButton 컴포넌트 가져오기
import {
  Container,
  LeftCard,
  RightCard,
  ProfileContainer,
  ChatRoomList,
  Profile,
  ChatRoomItem,
  Title,
  Subtitle,
  ChatRoomItemText,
  ButtonWrapper,
} from "./styles";
import { useContext, useEffect, useMemo } from "react";
import HomeCreateRoomModal from "../../components/HomeCreateRoomModal";
import {
  ChatRoomDetailContext,
  ChatRoomListContext,
  ModalContext,
} from "../../App";
import axios from "axios";
import { ChatRoomItemType } from "../../typings/db";
import { Outlet, useNavigate } from "react-router-dom";
import Gravatar from "react-gravatar";

const Home = () => {
  const navigate = useNavigate();
  // const [userName, setUserName] = useState<string>();
  const userName = useMemo(() => localStorage.getItem("chatBoxUserName"), []);
  // modalContext 가져오기
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error("ModalContext.Provider 없음");
  }
  const { modal, setModal } = modalContext;

  // ChatRoomListContext 가져오기
  const chatRoomListContext = useContext(ChatRoomListContext);
  if (!chatRoomListContext) {
    throw new Error("ChatRoomListContext.Provider 없음");
  }
  const { chatRoomList, setChatRoomList } = chatRoomListContext;

  // ChatRoomDetailContext 가져오기
  const chatRoomDetailContext = useContext(ChatRoomDetailContext);
  if (!chatRoomDetailContext) {
    throw new Error("ChatRoomDetailContext.Provider 없음");
  }
  const { chatRoomDetail, setChatRoomDetail } = chatRoomDetailContext;

  // useEffect(() => {
  //   const localstorageUserName = localStorage.getItem("chatBoxUserName");
  //   if (localstorageUserName) {
  //     setUserName(localstorageUserName);
  //   }
  // }, []);

  const loadChatRoomList = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/chat/rooms`);
      setChatRoomList(response.data);
      setModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadChatRoomList();
  }, []);

  const handleModal = () => {
    setModal(!modal);
  };

  const handleNavigation = (callback: () => void) => {
    if (chatRoomDetail.roomId.length >= 1) {
      const confirmLeave = window.confirm("채팅방을 나가시겠습니까?");
      setChatRoomDetail({
        roomId: "",
        name: "",
        roomUserCnt: 0,
        chatUserCnt: [],
      });
      if (!confirmLeave) return;
    }
    callback();
  };

  return (
    <>
      <Container>
        <LeftCard>
          <ProfileContainer>
            <Title>
              <img src="/images/DDKlogo.png" alt="땅콩로고" />
              <span>땅콩</span>
            </Title>
            <Subtitle>MY PROFILE</Subtitle>
            <Profile onClick={() => handleNavigation(() => navigate("/intro"))}>
              <Gravatar email={userName} size={40} default="retro" />
              <p>{userName}</p>
            </Profile>
            <Subtitle>CURRENT CHAT ROOM LIST</Subtitle>
            <ChatRoomList>
              {chatRoomList.map((item: ChatRoomItemType) => (
                <ChatRoomItem
                  key={item.roomId}
                  onClick={() =>
                    handleNavigation(() => {
                      const roomIndex = chatRoomList.findIndex(
                        (room) => room.roomId === item.roomId
                      );
                      if (roomIndex !== -1) {
                        navigate(`/chat/${roomIndex}`);
                      } else {
                        console.error("roomId를 찾을 수 없습니다");
                      }
                    })
                  }
                >
                  <div>
                    <p className="chatRoomItemTitle">{item.name}</p>
                    <ChatRoomItemText>
                      {item.roomUserCnt} users
                    </ChatRoomItemText>
                  </div>
                </ChatRoomItem>
              ))}
            </ChatRoomList>
            <ButtonWrapper>
              <StyledButton
                text="채팅방 만들기"
                onClick={() => handleNavigation(handleModal)}
              />
            </ButtonWrapper>
          </ProfileContainer>
        </LeftCard>
        <RightCard>
          <Outlet />
        </RightCard>
      </Container>
      {modal ? <HomeCreateRoomModal /> : null}
    </>
  );
};

export default Home;
