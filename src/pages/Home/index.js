import Game from "../../components/Games";
import { useState } from "react";

function Home() {
  const [currentPLayer, setCurrentPLayer] = useState(-1);
  return (
    <>
      <div>Jogo Da Velha</div>
      <div>Jogador Atual: {currentPLayer == -1 ? "X" : "O"}</div>
      <Game showCurrentPLayer={setCurrentPLayer} />
    </>
  );
}

export default Home;
