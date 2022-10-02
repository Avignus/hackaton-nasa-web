import React, { useEffect, useState } from 'react';
import './App.css';
import { ContainerAnimation, RocketContainer, Rocket, SunContainer, Sun } from './styles';
import { ParkerIconSVG, SolarSystemIconSVG, RingsIconSVG, RocketIconSVG, AstronomerImg, ParkerSpacecraftImgContainer, ParkerSpacecraftSVG } from './components/svg-general';
import RocketImage from './assets/rocket.png';
import SunImage from './assets/sun.png'
import SolarSystemImg from './assets/Solar-system.png';
import ContainerIcons from './components/container-icons';
import ContainerCards from './components/container-cards';
import ContainerOption from './components/container-option';
import OptionText from './components/option-text';
import CardsItem from './components/cards-item';
import SpanBlue from './components/span-blue';
import ContainerAstronomer from './components/container-astronomer';
import ParkerSpacecraft from './assets/parker-solar-probe.png';
import ContainerParker from './components/container-parker';
import SolarSystemImgStyles from './components/solar-system-image';
import SolarSystemImgContainerStyles from './components/solar-system-img-container';
import ContainerSolarSystemText from './components/container-solar-system-text';

function App() {
  const [transitionSun, setTransitionSun] = useState(false);
  const [transitionSun2, setTransitionSun2] = useState(false);
  const [transitionPosition, setTransitionPosition] = useState(false);
  const [mouseHoverSelect, setMouseHoverSelect] = useState('');
  const [routeSelected, setRouteSelected] = useState('home');

  useEffect(() => {
    setTimeout(() => {
      setTransitionSun(true);
    }, 3500);
    setTimeout(() => {
      setTransitionSun2(true);
    }, 5000);
    setTimeout(() => {
      setTransitionPosition(true);
    }, 5500)
  }, []);
  switch(routeSelected) {
    case 'probe': 
    return (
      <div>teste</div>
    )
    default: 
      return (
        <ContainerAnimation>
          <RocketContainer>
            <Rocket shouldDisappear={transitionSun} src={RocketImage}/>
          </RocketContainer>
          <SunContainer transitionPosition={transitionPosition}>
            <Sun shouldCenter={transitionSun} shouldGoUp={transitionSun2} src={SunImage}/>
          </SunContainer>
          {
            transitionPosition && 
            <>
              <ContainerIcons>
                <ContainerOption onMouseEnter={() => setMouseHoverSelect('Parker Solar')} onMouseLeave={() => setMouseHoverSelect('')}>
                  <ParkerIconSVG isSelected={mouseHoverSelect === 'Parker Solar'} />
                  <OptionText onClick={() => setRouteSelected('probe')} isSelected={mouseHoverSelect === 'Parker Solar'}>
                    Parker Solar
                  </OptionText>
                </ContainerOption>
                <ContainerOption onClick={() => setRouteSelected('')} onMouseEnter={() => setMouseHoverSelect('Parker Probe Orbit')} onMouseLeave={() => setMouseHoverSelect('')}>
                  <SolarSystemIconSVG isSelected={mouseHoverSelect === 'Parker Probe Orbit'}/>
                  <OptionText isSelected={mouseHoverSelect === 'Parker Probe Orbit'}>
                    Parker Probe Orbit
                  </OptionText>
                </ContainerOption>
                <ContainerOption onMouseEnter={() => setMouseHoverSelect('Northern Lights')} onMouseLeave={() => setMouseHoverSelect('')}>
                  <RingsIconSVG isSelected={mouseHoverSelect === 'Northern Lights'}/>
                  <OptionText isSelected={mouseHoverSelect === 'Northern Lights'}>
                    Northern Lights
                  </OptionText>
                </ContainerOption>
                <ContainerOption onMouseEnter={() => setMouseHoverSelect('Challenge')} onMouseLeave={() => setMouseHoverSelect('')}>
                  <RocketIconSVG isSelected={mouseHoverSelect === 'Challenge'}/>
                  <OptionText isSelected={mouseHoverSelect === 'Challenge'}>
                    Challenge
                  </OptionText>
                </ContainerOption>
              </ContainerIcons>
              <ContainerCards>
                <CardsItem>
                  <AstronomerImg/>
                  <ContainerAstronomer>
                    Let’s Explore the <SpanBlue>Sun</SpanBlue> with <SpanBlue>Parker Solar Probe</SpanBlue>
                  </ContainerAstronomer>
                </CardsItem>
                <CardsItem>
                  <ParkerSpacecraftImgContainer>
                    {/* <img src={ParkerSpacecraft} alt="space-craft"/> */}
                    <img src={ParkerSpacecraft} alt="space-craft"/>
                  </ParkerSpacecraftImgContainer>
                  
                  <ContainerParker>
                    A scientific mission to unlock the mysteries of the <SpanBlue>Sun's corona </SpanBlue>and <SpanBlue>solar wind</SpanBlue>
                  </ContainerParker>
                </CardsItem>
                <CardsItem>
                  <SolarSystemImgContainerStyles>
                    {/* <img src={ParkerSpacecraft} alt="space-craft"/> */}
                    <SolarSystemImgStyles src={SolarSystemImg} alt="space-craft"/>
                  </SolarSystemImgContainerStyles>
                  <ContainerSolarSystemText>
                    A spacecraft that uses breakthrough technology and autonomy to endure heat and radiation like no other mission                  
                  </ContainerSolarSystemText>
                </CardsItem>
                <CardsItem marginLeft="239px" marginTop="120px">
                  <AstronomerImg/>
                  <ContainerAstronomer>
                    Let’s Explore the <SpanBlue>Sun</SpanBlue> with <SpanBlue>Parker Solar Probe</SpanBlue>
                  </ContainerAstronomer>
                </CardsItem>
                <CardsItem marginTop="120px">
                  <AstronomerImg/>
                  <ContainerAstronomer>
                    Let’s Explore the <SpanBlue>Sun</SpanBlue> with <SpanBlue>Parker Solar Probe</SpanBlue>
                  </ContainerAstronomer>
                </CardsItem>
              </ContainerCards>
            </>
          }
        </ContainerAnimation>
      );
  }
}

export default App;
