import React from 'react';
import styled, { keyframes } from 'styled-components'

import { COLORS } from '../constants/colors';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 500px;
`;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const Loader = styled.div`
  border: 0.5em solid ${COLORS.purple};
  border-top: 0.5em solid ${COLORS.grey};
  border-radius: 50%;
  width: 2.28571429rem;
  height: 2.28571429rem;
  animation: ${spin} 0.6s linear infinite;
`

const Spinner = () => (
  <Container>
    <Loader data-testid="spinner"/>
  </Container>
)

export default Spinner;