import { createGlobalStyle } from "styled-components";
import RobotoMedium from './Roboto-Medium.ttf'
import RobotoBold from './Roboto-Bold.ttf'
import NordecoBold from './Nordeco-Bold.ttf'
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Medium';
    src: url(${RobotoMedium});
  }
  @font-face {
    font-family: 'Roboto Bold';
    src: url(${RobotoBold});
  }
  @font-face {
    font-family: 'Nordeco Bold';
    src: url(${NordecoBold});
  }
`

export default GlobalStyle;