import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const StyledTableRow  = withStyles(() => ({
  head: {
    backgroundColor: '#E8B3B9',
    color: '#AA3C3B',
    height: 60,
  }
}))(TableRow);

const headCells = [
  { id: 'productId', align: 'left', disablePadding: false, label: 'ID' },
  { id: 'item', align: 'left', disablePadding: false, label: 'Item' },
  { id: 'productSize', align: 'center', disablePadding: false, label: 'Product Size' },
  { id: 'plu_upc', align: 'center', disablePadding: false, label: 'Plu UPC' },
  { id: 'price', align: 'center', disablePadding: false, label: 'Price' },
  { id: 'catId', align: 'center', disablePadding: false, label: 'Category' },
  { id: 'uom', align: 'center', disablePadding: false, label: 'UOM' },
];

const Header = (props) => {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return  (
    <TableHead>
      <StyledTableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="right">Actions</TableCell>
      </StyledTableRow>
    </TableHead>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default Header;
