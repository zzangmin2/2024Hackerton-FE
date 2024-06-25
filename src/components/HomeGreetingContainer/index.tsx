import { GreetingContainer, GreetingText } from "./styles";

const HomeGreetingContainer = () => {
  return (
    <>
      <GreetingContainer>
        <GreetingText>
          <h1>안녕하세요!</h1>
          <h2>문채현 님,</h2>
          <p>
            땅콩은
            <br />
            교내의 다양한 관심사를 가진 학우들과
            <br />
            실시간 채팅을 할 수 있는 서비스예요.
          </p>
          <p>
            좌측 채팅 리스트를 확인하고
            <br />
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
    </>
  );
};

export default HomeGreetingContainer;
