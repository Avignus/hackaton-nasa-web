import React, { useEffect, useState } from 'react';
import './App.css';
import { ContainerAnimation, RocketContainer, Rocket, SunContainer, Sun } from './styles';
import { ParkerProbeOrbitSVG, NoodleSVG, ParkerIconSVG, SolarSystemIconSVG, RingsIconSVG, RocketIconSVG, AstronomerImg, ParkerSpacecraftImgContainer, ParkerSpacecraftSVG, PlanetsSVG, SunRocketSVG, RocketToTheSunImgContainer, AstronautIconSVG, VenusSVG } from './components/svg-general';
import SolarSystemHeader from './assets/solar-system-header.png';
import RocketImage from './assets/rocket.png';
import SunImage from './assets/sun.png'
import SunImageCartoon from './assets/sun-2.png'
import VenusImage from './assets/venus.png'
import AuroraImage from './assets/aurora.png';
import Yasmin from './assets/Yasmin.png';
import Igor from './assets/Igor.png';
import Felipe from './assets/Felipe.png'
import Joao from './assets/Joao.png';
import Abia from './assets/Abia.png';
import Kaua from './assets/Kaua.png';
import CapyImage from './assets/capy.png';
import NasaImage from './assets/nasa.png';
import CapyTeamImage from './assets/capy-team.png';
import SpaceAppsLogo from './assets/space-apps-logo.png'
import SpaceAppsImage from './assets/space-apps.png';
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
import RocketToTheSunImg from './assets/SunRocket.png'
import ContainerPlanetsText from './components/container-planets-text';
import ContainerTextRocket from './components/container-text-rocket';
import PlanetsImg from './assets/Planets.png'
import ContainerParkerSolarProbe from './components/container-parker-solar-probe';
import ParkerSolarProbeTitle from './components/parker-solar-probe-title';
import ContainerSolarProbeImage from './components/container-solar-probe-image';
import ContainerSolarProbeImageContainer from './components/container-solar-probe-image-container';
import FactsAboutContainer from './components/facts-about-container';
import ContentFactsAboutContainer from './components/content-facts-about-container';
import AboutTheMissionContainer from './components/about-the-mission-container';
import NoodleImageContainer from './components/noodle-image-container';
import AboutTheMissionContentContainer from './components/about-the-mission-content-container';
import ContainerParkerProbeOrbit from './components/container-parker-probe-orbit';
import ParkerProbeOrbitImageContainer from './components/parker-probe-orbit-img-container';
import SundAndVenusContainer from './components/sun-and-venus-container';
import SunCardContainer from './components/sun-card-container';
import CardGlass from './components/card-glass';
import HeaderPlanetContainer from './components/header-planet-container';
import TitleSunAndVenus from './components/title-sun-and-venus';
import ContentSunAndVenus from './components/content-sun-and-venus';
import ContainerNorthernLights from './components/container-northern-lights';
import NorthernLightsTitleContainer from './components/northern-lights-title';
import NorthernLightsTextContainer from './components/northern-lights-text-container';
import ContainerChallengeHeader from './components/challenge-container-header';
import ChallengeContainer from './components/challenge-container';
import ChallengeContainerText from './components/challenge-container-text';
import SolutionChallengeContainerTitle from './components/solution-challenge-container';
import SolutionChallengeTitle from './components/solution-challenge-title';
import SpaceAppsImageStyles from './components/space-apps-image';
import SolutionChallengeContent from './solution-challenge-content';
import SolutionChallengeTitleTeamContainer from './components/solution-challenge-title-team-container';
import SolutionChallengeCapybaraImage from './components/solution-challenge-capybara-image';
import ChallengeImageSolarSystem from './components/challenge-image-solar-system';
import SolutionChallengeTeamContainer from './components/solution-challenge-team-container';
import MembersCard from './components/members-card';
import MemberHeaderPhoto from './components/member-header-photo';
import MemberName from './components/member-name';
import MemberInfo from './components/member-info';
import CreditsContainer from './components/credits-container';
import MadeByContainer from './components/made-by-container';
function App() {
  const [transitionSun, setTransitionSun] = useState(false);
  const [transitionSun2, setTransitionSun2] = useState(false);
  const [transitionPosition, setTransitionPosition] = useState(false);
  const [mouseHoverSelect, setMouseHoverSelect] = useState('');
  const [routeSelected, setRouteSelected] = useState('parker solar');

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
              <ContainerOption onClick={() => setRouteSelected('home')} onMouseEnter={() => setMouseHoverSelect('Home')} onMouseLeave={() => setMouseHoverSelect('')}>
                <AstronautIconSVG isSelected={mouseHoverSelect === 'Home' || routeSelected === 'home'} />
                <OptionText onMouseEnter={() => setMouseHoverSelect('Home')} onMouseLeave={() => setMouseHoverSelect('')} onClick={() => setRouteSelected('home')} isSelected={mouseHoverSelect === 'Home' || routeSelected === 'home'}>
                  Home
                </OptionText>
              </ContainerOption>
              <ContainerOption onClick={() => setRouteSelected('parker solar')} onMouseEnter={() => setMouseHoverSelect('Parker Solar')} onMouseLeave={() => setMouseHoverSelect('')}>
                <ParkerIconSVG isSelected={mouseHoverSelect === 'Parker Solar' || routeSelected === 'parker solar'} />
                <OptionText onClick={() => setRouteSelected('parker solar')} isSelected={mouseHoverSelect === 'Parker Solar' || routeSelected === 'parker solar'}>
                  Parker Solar
                </OptionText>
              </ContainerOption>
              <ContainerOption onClick={() => setRouteSelected('parker probe orbit')} onMouseEnter={() => setMouseHoverSelect('Parker Probe Orbit')} onMouseLeave={() => setMouseHoverSelect('')}>
                <SolarSystemIconSVG isSelected={mouseHoverSelect === 'Parker Probe Orbit' || routeSelected === 'parker probe orbit'}/>
                <OptionText isSelected={mouseHoverSelect === 'Parker Probe Orbit' || routeSelected === 'parker probe orbit'}>
                  Parker Probe Orbit
                </OptionText>
              </ContainerOption>
              <ContainerOption onClick={() => setRouteSelected('northern lights')} onMouseEnter={() => setMouseHoverSelect('Northern Lights')} onMouseLeave={() => setMouseHoverSelect('')}>
                <RingsIconSVG isSelected={mouseHoverSelect === 'Northern Lights' || routeSelected === 'northern lights'}/>
                <OptionText isSelected={mouseHoverSelect === 'Northern Lights' || routeSelected === 'northern lights'}>
                  Northern Lights
                </OptionText>
              </ContainerOption>
              <ContainerOption onClick={() => setRouteSelected('challenge')} onMouseEnter={() => setMouseHoverSelect('Challenge')} onMouseLeave={() => setMouseHoverSelect('')}>
                <RocketIconSVG isSelected={mouseHoverSelect === 'Challenge' || routeSelected === 'challenge'}/>
                <OptionText isSelected={mouseHoverSelect === 'Challenge' || routeSelected === 'challenge'}>
                  Challenge
                </OptionText>
              </ContainerOption>
            </ContainerIcons>
            {
              routeSelected === 'home' && (
              <ContainerCards>
                `<CardsItem>
                  <AstronomerImg/>
                  <ContainerAstronomer>
                    Lets Explore the <SpanBlue>Sun</SpanBlue> with <SpanBlue>Parker Solar Probe</SpanBlue>
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
                    <SolarSystemImgStyles src={PlanetsImg} alt="space-craft"/>
                  </SolarSystemImgContainerStyles>
                  <ContainerSolarSystemText>
                    A spacecraft that uses <SpanBlue>breakthrough technology and autonomy to endure heat and radiation like no other mission</SpanBlue>
                  </ContainerSolarSystemText>
                </CardsItem>
                <CardsItem marginLeft="239px" marginTop="120px">
                  <div style={{width: '150px', height: '50%', backgroundColor: 'transparent', position: 'relative', bottom: '100px', right: '50px'}}>
                    <PlanetsSVG/>
                  </div>
                  <ContainerPlanetsText>
                  The first mission named for a living scientist: <SpanBlue>Dr. Eugene Parker</SpanBlue>, who theorized the existence of the solar wind                  </ContainerPlanetsText>
                </CardsItem>
                <CardsItem marginTop="120px">
                  <RocketToTheSunImgContainer>
                    <img src={RocketToTheSunImg} alt="sun-rocket"/>
                  </RocketToTheSunImgContainer>
                  <ContainerTextRocket>
                    A unique solar observatory that will orbit within <SpanBlue>4 million miles </SpanBlue>of our star's surface to directly study the formation of the <SpanBlue>solar wind</SpanBlue>
                  </ContainerTextRocket>
                </CardsItem>`
              </ContainerCards>
              )
            }
            {
              routeSelected === "parker solar" && (
                <ContainerParkerSolarProbe>
                  <ParkerSolarProbeTitle>Parker Solar Probe</ParkerSolarProbeTitle>
                  <ContainerSolarProbeImageContainer>
                    <ContainerSolarProbeImage src={ParkerSpacecraft} alt="parker-spacecraft"/>
                  </ContainerSolarProbeImageContainer>
                  <FactsAboutContainer>
                    <ParkerSolarProbeTitle>More facts about the probe</ParkerSolarProbeTitle>
                  </FactsAboutContainer>
                  <ContentFactsAboutContainer>
                    The satellite weighs about 685 kilograms of mass and it is 3 meters tall, that’s about 3 Adult Lions of weight and 6 golden retrievers of height! He is made of tungsten, niobium, molybdenum and sapphire, and it has two panels of superheated carbon-carbon composite sandwiching a lightweight 4.5-inch-thick carbon foam core. That's why it doesn't melt near the Sun!
                  </ContentFactsAboutContainer>
                  <AboutTheMissionContainer>
                    <NoodleImageContainer>
                      <NoodleSVG/>
                    </NoodleImageContainer>
                    <ParkerSolarProbeTitle>About the mission</ParkerSolarProbeTitle>
                  </AboutTheMissionContainer>
                  <AboutTheMissionContentContainer>
                    <span style={{color: 'white'}}>
                      The mission was conceived in 1958, but it took 60 years to develop the technology to make it happen. Designed and built at the Johns Hopkins Applied Physics Laboratory in Laurel, Maryland, Parker Solar Probe carries a heat shield, autonomous onboard "smarts" to keep the spacecraft facing the sun, and an efficient cooling system. Just a few months after launch, Parker Solar Probe became the closest human-made object to the sun, passing within 42.72 million kilometers from the sun's surface, that's 73655 spaghetti packages, imagine the price for that experiment!
                    </span>
                  </AboutTheMissionContentContainer>

                </ContainerParkerSolarProbe>
              )
            }
            {
              routeSelected === 'parker probe orbit' && (
                <ContainerParkerProbeOrbit>
                  <ParkerSolarProbeTitle>Parker Probe Orbit</ParkerSolarProbeTitle>
                  <ParkerProbeOrbitImageContainer>
                    <ParkerProbeOrbitSVG/>
                  </ParkerProbeOrbitImageContainer>
                  <SundAndVenusContainer>
                    <SunCardContainer>
                      <CardGlass>
                        <HeaderPlanetContainer>
                          <img src={SunImageCartoon} alt="venus" style={{width: '100px', height: '100px'}}/>
                          <TitleSunAndVenus>Sun</TitleSunAndVenus>
                        </HeaderPlanetContainer>
                        <ContentSunAndVenus>Our Sun is a hot glowing ball at the center of our solar system and without its energy, life as we know it could not exist here on our home planet. Measuring a “day” on the Sun is complicated because of the way it rotates. It doesn't spin as a single, solid ball. This is because the Sun’s surface isn't solid like Earth's. Instead, the Sun is made of super-hot, electrically charged gas called plasma. This plasma rotates at different speeds on different parts of the Sun.</ContentSunAndVenus>
                      </CardGlass>
                    </SunCardContainer>
                    <SunCardContainer>
                      <CardGlass>
                        <HeaderPlanetContainer>
                          <img src={VenusImage} alt="venus" style={{width: '100px', height: '100px'}}/>
                          <TitleSunAndVenus>Venus</TitleSunAndVenus>
                        </HeaderPlanetContainer>
                        <ContentSunAndVenus>NASA’s Parker Solar Probe has made multiple flybys of Venus. Also, the Parker Solar Probe uses the gravity center of Venus to keep his center of rotation the same everytime! On Feb. 9, 2022, NASA announced the spacecraft had captured its first visible light images of the surface of Venus from space during its February 2021 flyby. Venus is often called "Earth’s twin" because they’re similar in size and structure, but Venus has extreme surface heat and a dense, toxic atmosphere. If the Sun were as tall as a typical front door, Earth and Venus would each be about the size of a nickel.</ContentSunAndVenus>
                      </CardGlass>
                    </SunCardContainer>
                  </SundAndVenusContainer>
                </ContainerParkerProbeOrbit>
              )
            }
            {
              routeSelected === 'northern lights' && (
                <ContainerNorthernLights>
                  <NorthernLightsTitleContainer>
                    <ParkerSolarProbeTitle>Northern Lights</ParkerSolarProbeTitle>
                  </NorthernLightsTitleContainer>
                  <NorthernLightsTextContainer>
                    We know how far from the surface the collision happens based on the color of the aurora and the electromagnetic spectrum. We can also relate the occurrence of the auroras with the wind velocity of the sun, generally the faster the solar wind, the more disturbances in Earth's magnetic field, the easiest will be to see the Aurora. With this data we can try and foresee which days of the future will have an aurora or not.
                  </NorthernLightsTextContainer>
                  <img style={{marginTop: '50px'}} src={AuroraImage} alt="aurora"/>
                  <NorthernLightsTextContainer style={{marginTop: '50px'}}>
                    The aurora color depends on the height that the solar winds collide with the Earth gases. When the collision happens near the surface, the Aurora has a Red-ish coloration. When it happens really far from the surface, the Aurora gets a color resembling a blue and violet.
                  </NorthernLightsTextContainer>
                </ContainerNorthernLights>
              )
            }
            {
              routeSelected === 'challenge' && (
                <>
                  <ContainerChallengeHeader>
                    <ChallengeImageSolarSystem src={SolarSystemHeader} alt="solar-system"/>
                  </ContainerChallengeHeader>
                  <ChallengeContainer>
                    <ParkerSolarProbeTitle>Challenge</ParkerSolarProbeTitle>
                    <ChallengeContainerText>Our challenge is to develop interactive and creative ways to improve public knowledge about the many spacecraft currently exploring the Sun, and help nonscientists interpret data from these missions using creative, user-friendly, and inviting methods. Think about how you can make this information accessible to the public so people around the world can see, hear, or feel how important it is. Let your creativity take you into the future!</ChallengeContainerText>
                    <SolutionChallengeContainerTitle>
                      <SpaceAppsImageStyles src={SpaceAppsImage} alt="space-apps"/>
                      <SolutionChallengeTitle>Solution</SolutionChallengeTitle>
                    </SolutionChallengeContainerTitle>
                    <SolutionChallengeContent>We hope to bring out this helpful information and statistical reports from the satellite to the general public in an accessible manner, especially to the general user. We also want to develop a user-friendly mobile application and website associated with the data that NASA provides to the general public, like the speed of the wind in the Suns corolla, the temperature of the Suns surface and the KP index, all of that with a little bit of explanation.
                      But, for the most part, we want to encourage the earth’s citizens of all ages to learn about other things and to see other perspectives about the biggest star on our solar system by using our project.
                    </SolutionChallengeContent>
                    <SolutionChallengeTitleTeamContainer>
                      <ParkerSolarProbeTitle>Team</ParkerSolarProbeTitle>
                      <SolutionChallengeCapybaraImage src={CapyImage}/>
                    </SolutionChallengeTitleTeamContainer>
                    <SolutionChallengeTeamContainer>
                      <MembersCard>
                        <MemberHeaderPhoto src={Abia}/>
                        <MemberName>Abia Vitoria Ribeiro Bognola</MemberName>
                        <MemberInfo>UX/UI Designer</MemberInfo>
                        <MemberInfo>São Paulo/SP</MemberInfo>
                      </MembersCard>
                      <MembersCard>
                        <MemberHeaderPhoto src={Joao}/>
                        <MemberName>Abia Vitoria Ribeiro Bognola</MemberName>
                        <MemberInfo>UX/UI Designer</MemberInfo>
                        <MemberInfo>São Paulo/SP</MemberInfo>
                      </MembersCard>
                      <MembersCard>
                        <MemberHeaderPhoto src={Kaua}/>
                        <MemberName>Abia Vitoria Ribeiro Bognola</MemberName>
                        <MemberInfo>UX/UI Designer</MemberInfo>
                        <MemberInfo>São Paulo/SP</MemberInfo>
                      </MembersCard>
                      <MembersCard>
                        <MemberHeaderPhoto src={Igor}/>
                        <MemberName>Igor Henrique Gonçalves Rapozo</MemberName>
                        <MemberInfo>UX/UI Designer</MemberInfo>
                        <MemberInfo>São Paulo/SP</MemberInfo>
                      </MembersCard>
                      <MembersCard>
                        <MemberHeaderPhoto src={Felipe}/>
                        <MemberName>Abia Vitoria Ribeiro Bognola</MemberName>
                        <MemberInfo>UX/UI Designer</MemberInfo>
                        <MemberInfo>São Paulo/SP</MemberInfo>
                      </MembersCard>
                      <MembersCard>
                        <MemberHeaderPhoto src={Yasmin}/>
                        <MemberName>Abia Vitoria Ribeiro Bognola</MemberName>
                        <MemberInfo>UX/UI Designer</MemberInfo>
                        <MemberInfo>São Paulo/SP</MemberInfo>
                      </MembersCard>
                    </SolutionChallengeTeamContainer>
                    <CreditsContainer>
                      <MadeByContainer>
                        <span style={{marginBottom: "20px", color: 'white'}}>A challenge made by</span>
                        <div>
                          <img src={NasaImage} alt="nasa"/>
                          <img style={{marginLeft: "20px"}} src={SpaceAppsLogo} alt="nasa"/>
                        </div>
                      </MadeByContainer>
                      <MadeByContainer>
                        <span style={{marginBottom: "20px", color: 'white'}}>A job done by</span>
                        <div>
                          <img src={CapyTeamImage} alt="nasa"/>
                        </div>
                      </MadeByContainer>
                    </CreditsContainer>
                  </ChallengeContainer>
                </>
              )
            }
          </>
        }
      </ContainerAnimation>
    );
}

export default App;
