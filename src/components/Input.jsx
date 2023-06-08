import React from 'react';
import styled from 'styled-components';


const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  padding: 0.2em;
`;

const TextInput = styled.input`
`;

const Input = ({label, placeholder, onChange}) => {
    return(
      <InputContainer>
        <Label>{label}</Label>
        <TextInput aria-label="newItemName" onChange={onChange} placeholder={placeholder}/>
      </InputContainer>
    )
}

export default Input;