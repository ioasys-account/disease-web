import React from 'react';
import PropTypes from 'prop-types';
import {
  TableCell, TableRow, TableHead, Typography,
} from '@material-ui/core';

const TableHeader = ({ headCells }) => (
  <TableHead>
    <TableRow>
      <TableCell padding="checkbox" />
      {headCells.map((headCell) => (
        <TableCell
          key={headCell.id}
          align={headCell.numeric ? 'right' : 'left'}
          padding={headCell.disablePadding ? 'none' : 'default'}
        >
          <Typography>{headCell.label}</Typography>
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

TableHeader.propTypes = {
  headCells: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableHeader;
