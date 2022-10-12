import React from 'react';
import Cell, { CellProps } from './Cell';

const FooterCell = ({ children, ...props }: CellProps) => {
  return <Cell {...props}>{children}</Cell>;
};

export default FooterCell;
