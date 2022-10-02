import styled, { css, keyframes } from 'styled-components';
import BGImage from './assets/background.png'

const transitionPosition = keyframes`
  from {
    bottom: 103%;
    right: -89%;
  }
  to {
    bottom: 103%;
    right: -89%;
  }
`
const diagonalHalfCenterAnimation = keyframes`
  to {
    transform: translate(-95%, 40%);
    height: 1200px;
    width: 1300px;
  }
`
const diagonalHalfCenterAnimationBack = keyframes`
  from {
    transform: translate(-100%, 40%);
    height: 1200px;
    width: 1300px;
  }
  to {
    transform: translate(30%, -30%);
   
  }
`
const diagonalAnimation = keyframes`
  to {
    transform: translate(100%, -90%);
  }
`
const ContainerAnimation = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-image: url(${BGImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat; 
  overflow: hidden;
`

const RocketContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 100%;
  position: relative;
  animation: ${diagonalAnimation} 5s forwards;
`
const Rocket = styled.img`
  position: relative;
  width: 150px;
  height: 200px;
  animation: ${diagonalAnimation} 5s forwards;
  ${props => props.shouldDisappear && css`
    display: none;
  `}
`
const Sun = styled.img`
  position: relative;
  width: 400px;
  height: 400px;
  background-color: transparent;
  ${props => props.shouldCenter && css`
    animation: ${diagonalHalfCenterAnimation} 1s forwards;
  `}
  ${props => props.shouldGoUp && css`
    animation: ${diagonalHalfCenterAnimationBack} 1s forwards;
  `}

`

const SunContainer = styled.div`
  width: 14%;
  height: 55%;
  position: relative;
  ${props => props.transitionPosition ? css`
    animation: ${transitionPosition} 1s forwards;
  ` : css`
    bottom: 103%;
    right: -89%;
  `}
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
`
export { ContainerAnimation, Rocket, RocketContainer, SunContainer, Sun };