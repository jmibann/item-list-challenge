import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalContainer, ModalBox, DefaultHeader, CloseIcon } from './styles';

const Modal = ({ children, isOpen, hasHeader, close }) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleEsc = useCallback((event) => {
    // eslint-disable-next-line no-mixed-operators
    if( event.key === "Esc" || event.key === "Escape" && isOpen){
      close();
    }
  }, [close, isOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    }
  }, [handleEsc]);

  const modalComponent = isOpen 
  ? <ModalContainer>
      <ModalBox>
        { !hasHeader && <DefaultHeader >
            <CloseIcon onClick={close}> X </CloseIcon>
          </DefaultHeader>
          }
        {children}
      </ModalBox>
  </ModalContainer>
  : null;

  return isMounted ? createPortal(modalComponent, document.body) : null;
}

export default Modal