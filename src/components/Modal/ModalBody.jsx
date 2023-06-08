import React from 'react';

import { BodyContainer } from './styles';

const ModalBody = ({children}) => {
    return(
      <BodyContainer>
        {children}
      </BodyContainer>
    )
}

export default ModalBody