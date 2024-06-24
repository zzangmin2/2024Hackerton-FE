import { useContext, useState } from "react";
import RegisterForm from "../RegisterForm";
import styled from "styled-components";
import axios from "axios";
import { ChatRoomListContext, ModalContext } from "../../App";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (roomname.length < 2) {
      alert("최소 2글자 이상 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8080/chat/room?name=${roomname}`
      );
      console.log("방 생성", response.data);
      setChatRoomList([...chatRoomList, response.data]);
      setModal(false);
    } catch (error) {
      console.error(error);
    }
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
        <button
          onClick={() => {
            setModal(!modal);
          }}
        >
          닫기
        </button>
      </ModalBackground>
    </>
  );
};

export default HomeCreateRoomModal;
