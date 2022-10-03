import styled, {css, keyframes} from 'styled-components'
import { ReactComponent as ParkerIcon } from '../assets/Parker.svg'
import { ReactComponent as SolarSystemIcon } from '../assets/Solar-system.svg'
import { ReactComponent as RingsIcon } from '../assets/Rings.svg'
import { ReactComponent as RocketIcon } from '../assets/Rocket.svg'
import { ReactComponent as Astronomer } from '../assets/astronomer.svg'
import { ReactComponent as ParkerSpacecraftSVG } from '../assets/Parker-spacecraft.svg'
import { ReactComponent as Planets } from '../assets/Planets.svg'
import { ReactComponent as SunRocket } from '../assets/SunRocket.svg'
import { ReactComponent as Astronaut } from '../assets/Astronaut.svg'
import { ReactComponent as Noodle } from '../assets/macarrao.svg';
import { ReactComponent as ParkerProbeOrbit } from '../assets/parker-probe-orbit-image.svg';
import { ReactComponent as Sun } from '../assets/sun.svg';
import { ReactComponent as Venus } from '../assets/venus.svg';
import { ReactComponent as Lion } from '../assets/lion.svg';

const changeColor = keyframes`
  from {
    fill: white;
  }
  to {
    fill: #66DAFF;
  }
`
const changeColorDefault = keyframes`
  from {
    fill: #66DAFF;
  }
  to {
    fill: white;
  }
`

const AstronautIconSVG = styled(Astronaut)`
  animation: ${changeColorDefault} 0.3s forwards;
  &:hover {
    animation: ${changeColor} 0.3s forwards;
  }
  ${props => props.isSelected && css`
    animation: ${changeColor} 0.3s forwards;
  `}
`
const ParkerIconSVG = styled(ParkerIcon)`
  animation: ${changeColorDefault} 0.3s forwards;
  &:hover {
    animation: ${changeColor} 0.3s forwards;
  }
  ${props => props.isSelected && css`
    animation: ${changeColor} 0.3s forwards;
  `}
`
const SolarSystemIconSVG = styled(SolarSystemIcon)`
  animation: ${changeColorDefault} 0.3s forwards;
  &:hover {
    animation: ${changeColor} 0.3s forwards;
  }
  ${props => props.isSelected && css`
    animation: ${changeColor} 0.3s forwards;
  `}
`
const RingsIconSVG = styled(RingsIcon)`
  animation: ${changeColorDefault} 0.3s forwards;
  &:hover {
    animation: ${changeColor} 0.3s forwards;
  }
  ${props => props.isSelected && css`
    animation: ${changeColor} 0.3s forwards;
  `}
`
const RocketIconSVG = styled(RocketIcon)`
  animation: ${changeColorDefault} 0.3s forwards;
  &:hover {
    animation: ${changeColor} 0.3s forwards;
  }
  ${props => props.isSelected && css`
    animation: ${changeColor} 0.3s forwards;
  `}
`
const AstronomerImg = styled(Astronomer)`
  width: 600px;
  height: 600px;
  position: relative;
  bottom: 30%;
`
const ParkerSpacecraftImgContainer = styled.div`
  width: 600px;
  height: 600px;
  position: relative;
  bottom: 25%;
`
const RocketToTheSunImgContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  bottom: 25%;

`

const PlanetsSVG = styled(Planets)`
  width: 250px;
  height: 250px;
`

const SunRocketSVG = styled(SunRocket)`
  width: 300px;
  height: 300px;
`

const NoodleSVG = styled(Noodle)`
  width: 100%;
  height: 100%;
`
const ParkerProbeOrbitSVG = styled(ParkerProbeOrbit)`
  width: 100%;
  height: 100%;
`

const SunSVG = styled(Sun)`
  width: 100px;
  height: 150px;
  fill: orange;
  background-color: orange;
  border-radius: 50%;
`

const VenusSVG = styled(Venus)`
  width: 100px;
  height: 100px;
  fill: orange;
  border-radius: 50%;
`

const LionSVG = styled(Lion)`
  width: 100px;
  height: 100px;
`
export { 
  AstronautIconSVG,
  ParkerIconSVG, 
  SolarSystemIconSVG, 
  RingsIconSVG, 
  RocketIconSVG, 
  AstronomerImg, 
  ParkerSpacecraftImgContainer, 
  ParkerSpacecraftSVG, 
  PlanetsSVG, 
  SunRocketSVG,
  NoodleSVG,
  RocketToTheSunImgContainer,
  ParkerProbeOrbitSVG,
  SunSVG,
  VenusSVG,
  LionSVG,
}