import styled, { css } from "styled-components";

const OptionText = styled.span`
  ${props => props.isSelected ? css`
    color: #66DAFF;
  ` : css`  
    color: white;
  `}
  text-align: center;
`

export default OptionText;