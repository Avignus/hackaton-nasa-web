import styled, { css } from "styled-components";
const CardsItem = styled.div`
  height: 395px;
  width: 349px;
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Nordeco Bold';
  font-size: 28px;
  color: white;
  text-align: center;
  margin-left: 50px;
  ${props => props.marginLeft && css`
    margin-left: ${props.marginLeft};
  `}
  ${props => props.marginTop && css`
    margin-top: ${props.marginTop};
  `}
`

export default CardsItem;