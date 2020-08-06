import styled from "styled-components";

export const Container = styled.div`
  background: green;
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: center;
  align-items: flex-start;
`;

export const Player = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  box-sizing: border-box;
`;

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  border: 1px solid grey;
  flex: 0 1 100px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  box-shadow: -1px 1px 5px black;
`;

export const Heading = styled.h2`
  flex: 1 1 100%;
`;

export const Button = styled.button`
  background: darkgreen;
  color: white;
  border: 1px solid lightgreen;
  border-radius: 5px;
  font-size: 24px;
  font-weight: bold;
  margin: 0 10px;
  padding: 5px;
  cursor: pointer;
`;
