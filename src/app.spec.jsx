import React from 'react';
import {render, screen, waitForElementToBeRemoved, fireEvent, findByText, findByRole, waitFor} from '@testing-library/react';

import App from './App';
import * as mockServices from './services';

jest.mock('./services');

const MOCK_ITEMS = [
  {name: "mocked item 2", id: "1" },
  {name: "mocked item 3", id: "2" }
]

describe("Should render App", () => {
  it("Should render a title, button, spinner, and table", async () => {
    mockServices.getItems.mockResolvedValueOnce(Promise.resolve({items: MOCK_ITEMS}))

    render(<App />);
    
    expect(screen.getByText(/item list/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByTestId('spinner')).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId('spinner'))

    expect(screen.getByText(/items/i)).toBeInTheDocument();
  });

  it("Should create a new item", async () => {
    const newItem = { name: 'NEW_TEST_ITEM', id: 'xyz-123'};

    mockServices.getItems.mockResolvedValueOnce(Promise.resolve({items: MOCK_ITEMS}))
    mockServices.addItem.mockResolvedValueOnce(Promise.resolve({
      items: [...MOCK_ITEMS, newItem],
    }));

    render(<App />);
    await waitForElementToBeRemoved(() => screen.queryByTestId('spinner'));

    expect(screen.queryByText(newItem.name)).not.toBeInTheDocument();
    
    fireEvent.click(screen.getByText(/add item/i));
    
    const input = await screen.findByLabelText(/newitemname/i);
    fireEvent.change(input, {target: {value: newItem.name}});
    fireEvent.click(screen.getByText(/save/i));

    await waitFor(() => expect(mockServices.addItem).toHaveBeenCalledTimes(1));

    expect(await screen.findByText(newItem.name)).toBeInTheDocument();
  });

  it("Should not create a new item with no name", async () => {
    mockServices.getItems.mockResolvedValueOnce(Promise.resolve({items: MOCK_ITEMS}))

    render(<App />);
    await waitForElementToBeRemoved(() => screen.queryByTestId('spinner'));

   
    fireEvent.click(screen.getByText(/add item/i));    
    fireEvent.click(screen.getByText(/save/i));

    expect(screen.getByText(/save/i)).toBeInTheDocument();
  });

  it("Should open and close modal", async () => {
    mockServices.getItems.mockResolvedValueOnce(Promise.resolve({items: MOCK_ITEMS}))

    render(<App />);
    await waitForElementToBeRemoved(() => screen.queryByTestId('spinner'));

   
    fireEvent.click(screen.getByText(/add item/i));    
    expect(screen.getByText(/save/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/cancel/i));
    expect(screen.)
  });
})