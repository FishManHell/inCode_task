import styled from "styled-components";

export const MainBlockPost = styled.section`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 50px 0 50px;
  border-top: 1px solid #000000;
  color: #000000;
  font-weight: 600;
  
  &:hover {
    background-color: rgba(255, 0, 0, 0.3)
  }
`

export const TextPost = styled.span`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100px;
  border-radius: 10px;
  padding: 10px 0;
  margin: 10px 0;
  background: ${props => props.background}
`