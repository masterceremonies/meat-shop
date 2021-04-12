import React from 'react';
import PropTypes from 'prop-types';

import {makeStyles, withStyles} from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  icons: {
    '& > svg': {
      margin: theme.spacing(0.5),
    },
  },
}));

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const Body = ({ list, handleEditItem, handleDeleteItem }) => {
  const classes = useStyles();

  return (
    <TableBody>
      {list.map((row) => (
        <StyledTableRow key={row.productId+row.item}>
          <TableCell >{row.productId}</TableCell>
          <TableCell component="th" scope="row">{row.item}</TableCell>
          <TableCell align="center">{row.productSize}</TableCell>
          <TableCell align="center">{row.plu_upc}</TableCell>
          <TableCell align="center">{row.price}</TableCell>
          <TableCell align="center">{row.catId}</TableCell>
          <TableCell align="center">{row.uom}</TableCell>
          <TableCell align="right" className={classes.icons}>
            <IconButton className={classes.button} aria-label="edit" onClick={() => handleEditItem(row)}>
              <EditIcon  />
            </IconButton>
            <IconButton className={classes.button} aria-label="delete" onClick={() => handleDeleteItem(row.productId)}>
              <DeleteIcon  />
            </IconButton>
          </TableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  )
};

Body.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleEditItem: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
};

export default Body;
