import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    /* flex-direction: row; */
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainText = styled.p`
  margin: 50px 25px;
  font-size: 22px;
  text-align: justify;

  @media screen and (min-width: 768px) {
    margin: 50px 40px;
  }
`;

export const AdUnitVertical = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    background: orange;
    border: 2px solid white;
    width: 160px;
    height: 600px;
    margin: 0 30px;
    /* Check the size of each flex item: https://css-tricks.com/snippets/css/a-guide-to-flexbox/ */
    flex: 1 0 auto;
  }
`;

export const AdUnitRectangle = styled.div`
  background: orange;
  border: 2px solid white;
  width: 320px;
  height: 100px;
  align-self: center;
  margin-bottom: 20px;
  display: none;

  @media screen and (min-width: 768px) {
    width: 728px;
    height: 90px;
    align-self: center;
    margin: 20px 0;
  }
`;

export const Search = styled.div`
  margin: 10px auto;
  padding: 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  width: 70vw;

  @media screen and (min-width: 768px) {
    width: 50vw;
  }
`;

export const SearchBar = styled.input`
  font-size: 1em;
  color: white;
  margin: 10px auto;
  padding: 1rem 1rem 1rem 3.5rem;
  width: 70vw;
  background: #ef5b62;
  /* background:  #1b296b; */
  border: none;
  border-radius: 3px;
  outline: none;

  ::placeholder {
    color: #ddd9e2;
  }

  &:hover {
    /* background: #2b3c7f;
     */
    background: #ef6e72;
    transition: background 0.5s;
  }

  @media screen and (min-width: 768px) {
    width: 50vw;
  }
`;
