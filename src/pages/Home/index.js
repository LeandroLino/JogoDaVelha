import Game from "../../components/Game";
import { useState } from "react";
import Container from "./styles";

function Home() {
  const [currentPLayer, setCurrentPLayer] = useState(-1);
  return (
    <Container>
      <h1>Jogo Da Velha</h1>
      <div>Jogador Atual: {currentPLayer == -1 ? "X" : "O"}</div>
      <Game showCurrentPLayer={setCurrentPLayer} />
    </Container>
  );
}

export default Home;
