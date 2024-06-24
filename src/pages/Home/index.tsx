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

const Index2 = () => {
  return (
    <Container>
      <LeftCard>
        <ProfileContainer>
          <Title>YB CHAT</Title>
          <Subtitle>MY PROFILE</Subtitle>
          <Profile>
            <img src={profileImage} alt="Profile" />
            <p>문채현</p>
          </Profile>
          <Subtitle>CURRENT CHAT ROOM LIST</Subtitle>
          <ChatRoomList>
            <ChatRoomItem>
              <img src={profileImage} alt="Chat Room" />
              <div>
                <p className="chatRoomItemTitle">풋살할사람모여라</p>
                <ChatRoomItemText>그래 내일 봐!</ChatRoomItemText>
              </div>
            </ChatRoomItem>
            <ChatRoomItem>
              <img src={profileImage} alt="Chat Room" />
              <div>
                <p className="chatRoomItemTitle">풋살할사람모여라</p>
                <ChatRoomItemText>나 할래 나나나나~</ChatRoomItemText>
              </div>
            </ChatRoomItem>
          </ChatRoomList>
          <ButtonWrapper>
            <StyledButton text="채팅방 만들기" to="/create-chat-room" />
          </ButtonWrapper>
        </ProfileContainer>
      </LeftCard>
      <RightCard>
        {/* <HomeGreetingContainer /> */}
        <HomeChatContainer />
      </RightCard>
    </Container>
  );
};

export default Index2;
