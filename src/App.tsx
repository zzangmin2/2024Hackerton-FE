import { createContext, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import {
  ChatRoomItemType,
  ChatRoomListContextType,
  ModalContextType,
} from "./typings/db";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
  box-sizing: border-box;
`;

const ModalContext = createContext<ModalContextType | undefined>(undefined);
const ChatRoomListContext = createContext<ChatRoomListContextType | undefined>(
  undefined
);

function App() {
  const [modal, setModal] = useState<boolean>(false);
  const [chatRoomList, setChatRoomList] = useState<ChatRoomItemType[]>([]);

  return (
    <>
      <ChatRoomListContext.Provider value={{ chatRoomList, setChatRoomList }}>
        <ModalContext.Provider value={{ modal, setModal }}>
          <Background>
            <Outlet />
          </Background>
        </ModalContext.Provider>
      </ChatRoomListContext.Provider>
    </>
  );
}

export { ModalContext, ChatRoomListContext };
export default App;
