import Game from "../../components/Games";
import { useState } from "react";
import Container from "./styles";

function Home() {
  const [currentPLayer, setCurrentPLayer] = useState(-1);
  return (
    <Container>
      <div>Jogo Da Velha</div>
      <div>Jogador Atual: {currentPLayer == -1 ? "X" : "O"}</div>
      <Game showCurrentPLayer={setCurrentPLayer} />
    </Container>
  );
}

export default Home;
