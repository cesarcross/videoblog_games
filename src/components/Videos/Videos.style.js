import styled from "styled-components";

export const VideosCointainer = styled.div`
  /* background: #444; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* border: 1px solid white; */
  margin: 0 auto;
  width: 90vw;

  a {
    margin: 10px;
    padding: 0;

    img {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    a {
      width: 20vw;
      margin: 10px 5px;
    }
  }
`;

export const VideoTitle = styled.p`
  margin-top: 5px;
  font-size: 1em;

  @media screen and (min-width: 768px) {
    /* display: none; */
  }
`;
