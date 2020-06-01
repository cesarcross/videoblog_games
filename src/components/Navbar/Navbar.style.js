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
  background: #2e4057;
  border: none;
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const HomeButton = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  background: #2e4057;
  /* background: #227088; */
  font-size: 1em;
  margin: 0;
  padding: 0;
  width: 100vw;

  h1 {
    font-size: 1.5rem;
    text-align: center;
  }

  a {
    display: flex;
    margin: auto;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 2rem;
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
  background: #ef5b62;
  text-align: center;
  padding: 10px 40px;
  font-size: 1.5em;
  border-bottom: 1px solid gray;

  @media screen and (min-width: 768px) {
    padding: 15px 20px;
    border: none;
    display: block;
  }
`;
