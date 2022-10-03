import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const ContainerParkerSolarProbe = styled.div`
  height: 86vh;
  width: 50vw;
  position: absolute;
  bottom: 9%;
  left: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-in;
`

export default ContainerParkerSolarProbe;