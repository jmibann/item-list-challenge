import React, { useState, Suspense } from 'react';
import styled from 'styled-components';

import { createResource } from './utils';
import { getItems, addItem, deleteItem } from './services';
import { COLORS } from './constants/colors';

import { 
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ItemList,
  Spinner,
} from './components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100%;
  padding: 2em 2em 0 2em;
  /* background-color: bisque; */
`;

const Title = styled.h2`
  color: ${COLORS.purple};
`;


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(() => createResource(getItems()));
  const [itemName, setItemName] = useState(null);

  const handleOnClick = () => setIsOpen(prev => !prev);

  const handleOnChange = (event) => {
    setItemName(event.target.value);
  };

  const addNewItem = () => {
    if(!itemName || !itemName.length){
      return;
    }
    const updatedList = createResource(addItem(itemName))
    setItems(updatedList);
    setItemName(null);
    setIsOpen(false);
  };

  const removeItem = (id) => {
    const updatedList = createResource(deleteItem(id))
    setItems(updatedList);
  }

  return (
    <Container>
      <Title> Item List</Title>
      <Button onClick={handleOnClick}>Add Item</Button>

      <Suspense fallback={<Spinner />}>
        <ItemList list={items} removeItem={removeItem}/>
      </Suspense>

      <Modal isOpen={isOpen} close={handleOnClick} hasHeader>
        <ModalHeader close={handleOnClick}>
            Add a new item
        </ModalHeader>

        <ModalBody>
          <Input
            label="Item"
            placeholder="Enter item name"
            onChange={handleOnChange}
        />
        </ModalBody>
        
        <ModalFooter>
          <Button onClick={handleOnClick}>Cancel</Button>
          <Button onClick={addNewItem} disabled={!itemName || !itemName.length}>Save</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default App;
