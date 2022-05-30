import styled from "styled-components";

const Wrapper = styled.h1`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  color: tomato;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <div>
      <Wrapper>Seungmin Jeong</Wrapper>
    </div>
  );
}

export default App;
