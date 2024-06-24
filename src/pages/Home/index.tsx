// src/pages/UserRegister/index2.tsx
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
import profileImage from "../../image/문채현2.jpg"; // 이미지 가져오기
// import HomeGreetingContainer from "../../components/HomeGreetingContainer";
import HomeChatContainer from "../../components/HomeChatContainer";
import { useContext, useEffect, useState } from "react";
import HomeCreateRoomModal from "../../components/HomeCreateRoomModal";
import { ChatRoomListContext, ModalContext } from "../../App";
import axios from "axios";
import { ChatRoomItemType } from "../../typings/db";

const Home = () => {
  const [userName, setUserName] = useState<string>();

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

  useEffect(() => {
    const localstorageUserName = localStorage.getItem("chatBoxUserName");
    if (localstorageUserName) {
      setUserName(localstorageUserName);
    }
  }, []);

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

  return (
    <>
      <Container>
        <LeftCard>
          <ProfileContainer>
            <Title>YB CHAT</Title>
            <Subtitle>MY PROFILE</Subtitle>
            <Profile>
              <img src={profileImage} alt="Profile" />
              <p>{userName}</p>
            </Profile>
            <Subtitle>CURRENT CHAT ROOM LIST</Subtitle>
            <ChatRoomList>
              {chatRoomList.map((item: ChatRoomItemType) => (
                <ChatRoomItem key={item.roomId}>
                  <img src={profileImage} alt="Chat Room" />
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
              <StyledButton text="채팅방 만들기" onClick={handleModal} />
            </ButtonWrapper>
          </ProfileContainer>
        </LeftCard>
        <RightCard>
          {/* <HomeGreetingContainer /> */}
          <HomeChatContainer />
        </RightCard>
      </Container>
      {modal ? <HomeCreateRoomModal /> : null}
    </>
  );
};

export default Home;
