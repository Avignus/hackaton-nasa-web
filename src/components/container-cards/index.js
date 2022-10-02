import styled, { css } from "styled-components";
const ContainerCards = styled.div`
  position: absolute;
  ${props => props.top && css`
    top: ${props.top}
  `}
  bottom: 10%;
  left: 26%;
  width: 50vw;
  height: 35vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export default ContainerCards;