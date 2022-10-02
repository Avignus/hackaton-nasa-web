import styled, { css, keyframes } from 'styled-components';
import BGImage from './assets/background.png'

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
`
const Sun = styled.img`
  position: relative;
  width: 400px;
  height: 400px;
  background-color: transparent;
`

const SunContainer = styled.div`
  width: 14%;
  height: 55%;
  position: relative;
  bottom: 103%;
  right: -89%;
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
`
export { ContainerAnimation, Rocket, RocketContainer, SunContainer, Sun };