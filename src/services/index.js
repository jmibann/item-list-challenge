
import { v4 as uuidv4 } from 'uuid';

const DELAY = 2000;

let ITEMS = [
  {name: "item 2", id: uuidv4() },
  {name: "item 3", id: uuidv4() }
];

const removeItem = (id) => {
  ITEMS = ITEMS.filter( item => id !== item.id);
  return ITEMS;
};

const createItem = (name) => {
  const newItem = { id: uuidv4(), name };

  ITEMS = [...ITEMS, {...newItem}];
  return ITEMS;
}

export const getItems = async () =>  new Promise((res, rej) => {
  setTimeout(() => {
    return res({items: ITEMS})
  }, DELAY);
});

export const deleteItem = async (id) => new Promise((res, rej) => {
  setTimeout(() => {
    return res({ items: removeItem(id) });
  }, DELAY);
});

export const addItem = async (name) => new Promise((res, rej) => {
  setTimeout(() => {
    return res({ items: createItem(name) });
  }, DELAY);
});