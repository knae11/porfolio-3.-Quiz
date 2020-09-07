import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/illustrationbg.png";

export const GlobalStyle = createGlobalStyle`
  html{
    height:100%;
  }

  body{
    background-image: url(${BGImage});
    background-size: cover;
    margin:0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
*{
  box-sizing:border-box;
  font-family:font-family: 'Noto Sans JP', sans-serif;

}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #ffffff;
  }
  .score {
    color: #ffffff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    background-image: linear-gradient(180deg, #ffffff, #87f1ff);
    background-size: 100%;
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: yellow;
    border: 2px solid black;
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;
