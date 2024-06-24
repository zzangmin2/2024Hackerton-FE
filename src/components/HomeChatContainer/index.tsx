import { Container, Header, MessageContainer, Message, MessageContent, MessageText, Avatar, TextBubble, Timestamp, InputContainer, Input, SendButton, HeaderAvatar, SendIcon } from './styles';
import profileImage from '../../image/문채현2.jpg';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const HomeChatContainer = () => {
  return (
    <Container>
      <Header>
        <HeaderAvatar src={profileImage} alt="avatar" />
        <MessageText>
          <p>풋살할사람모여라</p>
        </MessageText>
      </Header>
      <MessageContainer>
        <Timestamp>2024년 6월 23일</Timestamp>
        <Message>
          <Avatar src={profileImage} alt="avatar" />
          <MessageContent>
            <p>상대방누군가</p>
            <TextBubble>
              상대방이 보낸 메세지
            </TextBubble>
          </MessageContent>
        </Message>
        <Message isSender>
          <MessageContent>
            <TextBubble isSender>
              내가 보낸 메세지
            </TextBubble>
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
