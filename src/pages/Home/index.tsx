// src/pages/UserRegister/index2.tsx
import StyledButton from '../../components/StyledButton'; // StyledButton 컴포넌트 가져오기
import { 
  Container, LeftCard, RightCard, ProfileContainer, ChatContainer, 
  ChatRoomList, Profile, ChatRoomItem, GreetingContainer, 
  GreetingText, Title, Subtitle, ChatRoomItemText
} from './styles';
import profileImage from '../../image/문채현2.jpg'; // 이미지 가져오기

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
          <StyledButton text="채팅방 만들기" to="/create-chat-room" />
        </ProfileContainer>
      </LeftCard>
      <RightCard>
        <ChatContainer>
          <GreetingContainer>
            <GreetingText>
              <h1>안녕하세요!</h1>
              <h2>문채현 님,</h2>
              <p>
                YB CHAT은<br/>
                교내의 다양한 관심사를 가진 학우들과<br/>
                실시간 채팅을 할 수 있는 서비스예요.
              </p>
              <p>
                좌측 채팅 리스트를 확인하고<br/>
                채팅방에 입장하여 이야기를 나눠봐요!
              </p>
              <br />
              <p>
                혹시 원하는 채팅방이 없으신가요?
                <br />
                <a href="/create-chat-room">채팅방 만들기</a>
              </p>
            </GreetingText>
          </GreetingContainer>
        </ChatContainer>
      </RightCard>
    </Container>
  );
};

export default Index2;
