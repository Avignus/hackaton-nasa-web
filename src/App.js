import logo from './logo.svg';
import './App.css';
import { ContainerAnimation, RocketContainer, Rocket, SunContainer, Sun } from './styles';
import RocketImage from './assets/rocket.png';
import SunImage from './assets/sun.png'
function App() {
  return (
    <ContainerAnimation>
      <RocketContainer>
        <Rocket src={RocketImage}/>
      </RocketContainer>
      <SunContainer>
        <Sun src={SunImage}/>
      </SunContainer>
    </ContainerAnimation>
  );
}

export default App;
