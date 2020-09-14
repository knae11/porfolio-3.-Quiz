import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #f1ebdd;
  border-radius: 10px;
  border: 2px solid gray;
  text-align: center;
  padding: 30px;

  p {
    font-size: 30px;
    font-weight: 700;
  }
  p > div {
    margin: 24px;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 16px;
    width: 50%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct ? "green" : !correct && userClicked ? "red" : "transparent"};
  }
`;
