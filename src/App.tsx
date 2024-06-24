import { createContext, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
  box-sizing: border-box;
`;

interface ModalContextType {
  modal: boolean;
  setModal: (modal: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

function App() {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      <ModalContext.Provider value={{ modal, setModal }}>
        <Background>
          <Outlet />
        </Background>
      </ModalContext.Provider>
    </>
  );
}

export { ModalContext };
export default App;
