import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 300px;

  display: flex;
  justify-content: center;
  align-items: center;

  .BlackBackground {
    margin-top: -115px;

    width: 100vw;
    height: 100vh;
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.8);
  }
`;

Container.Menu = styled.div`
    position: relative;

    width: 320px;
    height: 140px;

    >button{
        width: 50%;
        height: 100px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 40%;

    background: #fff;
    -webkit-box-shadow: 0px 5px 16px -3px #000000;
    box-shadow: 0px 5px 16px -3px #000000;

    border-radius: 10px;
    padding: 15px;

    font-size: 2em;
    color: #000;
  }
`;

export default Container;
