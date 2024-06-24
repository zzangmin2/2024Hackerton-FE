import "./App.css";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
  box-sizing: border-box;
`;

function App() {
  return (
    <>
      <Background>
        <Outlet />
      </Background>
    </>
  );
}

export default App;
