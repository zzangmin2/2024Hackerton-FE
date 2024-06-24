import { createContext, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import {
  ChatRoomDetailContextType,
  ChatRoomItemType,
  ChatRoomListContextType,
  ModalContextType,
} from "./typings/db";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
  overflow: hidden;
  box-sizing: border-box;
`;

const ModalContext = createContext<ModalContextType | undefined>(undefined);
const ChatRoomListContext = createContext<ChatRoomListContextType | undefined>(
  undefined
);
const ChatRoomDetailContext = createContext<
  ChatRoomDetailContextType | undefined
>(undefined);

function App() {
  const [modal, setModal] = useState<boolean>(false);
  const [chatRoomList, setChatRoomList] = useState<ChatRoomItemType[]>([]);
  const [chatRoomDetail, setChatRoomDetail] = useState<ChatRoomItemType>({
    roomId: "",
    name: "",
    roomUserCnt: 0,
    chatUserCnt: [],
  });

  return (
    <>
      <ChatRoomListContext.Provider value={{ chatRoomList, setChatRoomList }}>
        <ChatRoomDetailContext.Provider
          value={{ chatRoomDetail, setChatRoomDetail }}
        >
          <ModalContext.Provider value={{ modal, setModal }}>
            <Background>
              <Outlet />
            </Background>
          </ModalContext.Provider>
        </ChatRoomDetailContext.Provider>
      </ChatRoomListContext.Provider>
    </>
  );
}

export { ModalContext, ChatRoomListContext, ChatRoomDetailContext };
export default App;
