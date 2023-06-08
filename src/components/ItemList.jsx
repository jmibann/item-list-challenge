import React from 'react';
import styled from 'styled-components';

import { Button } from './index';
import { COLORS } from '../constants/colors';

const Table = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 90%;
  padding: 0.2em;
  margin: 1em;
  border: 2px solid ${COLORS.tableGrey};
  border-radius: 0.5em;
`;

const TableHeader = styled.thead`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid ${COLORS.tableGrey};
  padding: 0.3em;
`;

const TableRow = styled.tr`
  display: flex;
  direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5em 0.2em 0.5em 0.2em;
  border-bottom: 2px solid ${COLORS.tableGrey};
  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.td`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tbody = styled.tbody`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`
const Tr = styled.tr``;

const Th = styled.th`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  color: ${COLORS.red};
`;

const ItemList = ({list, removeItem}) => {
  const {items} = list.read();

  return(
    <Table>
      <TableHeader>
        <Tr>
          <Th>
            Items
          </Th>
        </Tr>
      </TableHeader>
      <Tbody>
        { items?.length 
          ? items.map((item) => 
            <TableRow key={item.id}>
              <TableCell>
                {item.name}
                <Button onClick={() => removeItem(item.id)} color="red">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            )
          : <TableRow>
              <Th>
                <Span>
                  No items found
                </Span>
              </Th>
          </TableRow>
        }
      </Tbody>
    </Table>
  );
};

export default ItemList;