import styled from 'styled-components';

import { COLORS } from '../constants/colors';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${ props =>
     props.color === 'red' ? `${COLORS.red}` : `${COLORS.lightblue}`
    };
  color: ${props =>
    props.color === 'red' ? `${COLORS.red}` : `${COLORS.lightblue}`};
  margin: 0 1em;
  padding: 0.25em 1em;
  &:hover {
    transition-duration: 0.4s;
    background: ${props =>
      props.color === 'red' ? `${COLORS.red}` :`${COLORS.lightblue}`};
    color: ${COLORS.white};
  };
  &:active {
    background-color: ${props =>
      props.color === 'red' ? `${COLORS.red}` : `${COLORS.lightblue}`};
    transform: translateY(4px);
  }
  &:disabled{
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
}

`;

export default Button