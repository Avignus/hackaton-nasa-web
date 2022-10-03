import styled, {keyframes} from "styled-components"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const ContainerChallengeHeader = styled.div`
  background-color: transparent;
  height: 36vh;
  width: 30vw;
  transform: rotate(90deg);
  position: absolute;
  bottom: 34%;
  left: 75.3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-in;
`

export default ContainerChallengeHeader;
