import styled from "styled-components";

export const NavContainer = styled.div`
  background: #222222;
  color: white;
  margin: 0;
  padding: 0;
`;

export const MobButton = styled.button`
  font-size: 30px;
  color: white;
  background: black;
  border: none;
  cursor: pointer;
  outline: none;
  /* width: 100%; */

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const HomeButton = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  background: #222222;
  font-size: 1em;
  margin: 0;
  padding: 0;
  width: 100vw;

  a {
    display: flex;
    ${"" /* width: 100%; */}

    img {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    a {
      width: 100%;
    }
  }
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  height: ${({ toggle }) => (toggle ? "200px" : "0px")};
  overflow: hidden;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    display: flex;
    height: auto;
    margin: 0;
  }
`;

export const NavButton = styled.li`
  display: flex;
  flex: 20%;
  ${"" /* background: #f28034;  */}
  background: #EF5B62;
  text-align: center;
  padding: 10px 0;
  font-size: 1.5em;
  border-bottom: 1px solid gray;

  @media screen and (min-width: 768px) {
    padding: 15px 20px;
    border: none;
    display: block;
  }
`;
