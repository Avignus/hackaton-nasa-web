import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const ContainerIcons = styled.div`
 display: flex; 
 flex-direction: column; 
 align-items: center; 
 justify-content: space-around; 
 width: 300px; 
 height: 800px; 
 position: absolute; 
 bottom: 30%; 
 left: 1%;
 animation: ${fadeIn} 0.5s forwards;
`

export default ContainerIcons;