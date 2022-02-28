import React from "react";
import styled from "@emotion/styled";
import { RecoilRoot } from "recoil";

import { Header } from "./components/Header";
import DebugObserver from "./utils/DebugObserver";

const Main = () => {
  return (
    <Container>
      <Header title="Github" />
      hi
    </Container>
  );
};

function App() {
  return (
    <RecoilRoot>
      <DebugObserver />
      <Main />
    </RecoilRoot>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  color: #fff;
  flex-direction: column;
  background-color: #1a1a1d;
`;

/*
  Contemporary and Bold
  #1A1A1D
  #4E4E50
  #6F2232
  #950740
  #C3073F
*/
