import React, { useEffect, useState } from 'react';
import './App.css';
import { ContainerAnimation, RocketContainer, Rocket, SunContainer, Sun } from './styles';
import { ParkerIconSVG, SolarSystemIconSVG, RingsIconSVG, RocketIconSVG, AstronomerImg } from './components/svg-general';
import RocketImage from './assets/rocket.png';
import SunImage from './assets/sun.png'
import ContainerIcons from './components/container-icons';
import ContainerCards from './components/container-cards';
import ContainerOption from './components/container-option';
import OptionText from './components/option-text';
import CardsItem from './components/cards-item';
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
                  <div style={{height: '30%', position: 'relative', bottom: '30%', backgroundColor: 'blue'}}>
                    Let’s Explore the Sun with Parker Solar Probe
                  </div>
                </CardsItem>
              </ContainerCards>
            </>
          }
        </ContainerAnimation>
      );
  }
}

export default App;
