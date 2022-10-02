import styled, {css, keyframes} from 'styled-components'
import { ReactComponent as ParkerIcon } from '../assets/Parker.svg'
import { ReactComponent as SolarSystemIcon } from '../assets/Solar-system.svg'
import { ReactComponent as RingsIcon } from '../assets/Rings.svg'
import { ReactComponent as RocketIcon } from '../assets/Rocket.svg'
import { ReactComponent as Astronomer } from '../assets/astronomer.svg'
import { ReactComponent as ParkerSpacecraftSVG } from '../assets/Parker-spacecraft.svg'

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

export { ParkerIconSVG, SolarSystemIconSVG, RingsIconSVG, RocketIconSVG, AstronomerImg, ParkerSpacecraftImgContainer, ParkerSpacecraftSVG }