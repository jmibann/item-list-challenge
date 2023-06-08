import React from 'react';

import { CloseIcon, HeaderContainer, CornerContainer} from './styles';

const ModalHeader = ({children, close}) => {
    return(
      <HeaderContainer>
        <CornerContainer>
          <CloseIcon onClick={close} position="right">
            X
          </CloseIcon>
        </CornerContainer>

        {children}

        <CornerContainer />
      </HeaderContainer>
    )
}

export default ModalHeader