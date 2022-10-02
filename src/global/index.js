import { createGlobalStyle } from "styled-components";
import RobotoMedium from './Roboto-Medium.ttf'
import RobotoBold from './Roboto-Bold.ttf'
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Medium';
    src: url(${RobotoMedium});
  }
  @font-face {
    font-family: 'Roboto Bold';
    src: url(${RobotoBold});
  }
`

export default GlobalStyle;