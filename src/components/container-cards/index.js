import styled, { css, keyframes } from "styled-components";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
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
  animation: ${fadeIn} 0.5s ease-in;
`

export default ContainerCards;