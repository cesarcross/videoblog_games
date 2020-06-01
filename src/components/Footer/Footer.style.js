import styled from "styled-components";

export const FootContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f28034;
  background: #ef5b62;
  height: 12vh;
  text-align: center;
  a {
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    height: 5vh;
    justify-content: space-evenly;
    align-items: center;
    a {
      font-size: 18px;
    }
  }
  @media screen and (min-width: 900px) {
    flex-direction: row;
    height: 5vh;
    justify-content: space-evenly;
    align-items: center;
    a {
      font-size: 18px;
    }
  }
`;

export const FootButton = styled.button`
  color: white;
  background: none;
  border: none;
  margin: 10px auto;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;
