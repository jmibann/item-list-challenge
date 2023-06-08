import React from 'react';

import { FooterContainer } from './styles';

const ModalFooter = ({children}) => {
    return(
      <FooterContainer>
        {children}
      </FooterContainer>
    )
}

export default ModalFooter