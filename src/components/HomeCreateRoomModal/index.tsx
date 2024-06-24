import { useState } from "react";
import RegisterForm from "../RegisterForm";
import { styled } from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* 검정색 배경에 투명도 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeCreateRoomModal = () => {
  const [roomname, setRoomname] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(roomname);
  };

  return (
    <>
      <ModalBackground>
        <RegisterForm
          handleSubmit={handleSubmit}
          title="방 생성하기"
          placeholder={"생성할 방 이름을 입력해주세요"}
          value={roomname}
          setValue={setRoomname}
          buttonText="만들기"
        />
      </ModalBackground>
    </>
  );
};

export default HomeCreateRoomModal;
