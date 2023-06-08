import styled from "styled-components";

import { COLORS } from '../../constants/colors';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  left: 0%;
  right: 0;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color:${COLORS.transparentBlack};
`
export const ModalBox = styled.div`
  width: 50%;
  height: 50%;
  background-color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 0.5em;
  overflow: hidden;
`
export const DefaultHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: center;
`

export const CloseIcon = styled.button`
  padding: 5px;
  background-color: ${COLORS.transparent};
  border-radius: 0.5em;
  border: 0 ;
  &:hover {
    transition-duration: 0.4s;
    background: ${COLORS.iconHoverBackground};
    color: ${COLORS.black};
  }
`
export const HeaderContainer = styled.div`
  height: 2em;
  border-top-right-radius: 0.5em;
  border-top-left-radius: 0.5em;
  padding: 0.2em;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.01em solid ${COLORS.divisoryGrey};
  color: ${COLORS.purple};
  font-weight: bold;
`

export const CornerContainer = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: end;
`

export const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const FooterContainer = styled.div`
  height: 3em;
  border-bottom-right-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  padding: 0.2em;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-top: 0.01em solid ${COLORS.divisoryGrey};
`