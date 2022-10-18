import styled from 'styled-components';

export const Wraper = styled.div`
  margin: 0 auto;
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const ButtonsItem = styled.li`
  margin-right: 10px;
`;

export const BtnStyle = styled.button`
  position: relative;
  display: block;
  color: black;
  font-size: 14px;
  font-family: 'montserrat';
  text-decoration: none;
  border: 2px solid blue;
  padding: 10px 40px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 1s all ease;
  cursor: pointer;

  &:hover {
    background-color: yellow;
    color: blue;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

export const GeneralText = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 0;
  margin-bottom: 5px;
  margin-right: 5px;
  text-align: left;
`;

export const WrapperText = styled.div`
  margin: 0 auto;
  min-width: 50px;
  display: flex;
  flex-direction: column;
`;
