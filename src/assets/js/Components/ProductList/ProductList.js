import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { getComparator, stableSort } from './utils';
import { TableContainer, Paper, Table } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ToolBar from './ToolBar';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Modal from '../Modal/Modal';
import UpdateItem from '../Forms/UpdateItem';
import {removeItem} from '../../Store/productsSlice';
import {useDispatch} from 'react-redux';

const useStyles = makeStyles({
  root: {
    padding: '15px'
  },
  table: {
    minWidth: 650,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
});

const ProductList = ({ products }) => {
  const classes = useStyles();

  const dispatch = useDispatch()

  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('item');


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleEditItem = (item) => {
    setIsOpen(true);
    setCurrentItem(item)
  }

  const handleDeleteItem = (id) => {
    if ( window.confirm('Do you really want to delete?')) {
      dispatch(removeItem(id))
    }
  }

  const closeModal = () =>{
    setIsOpen(false);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const computedData = () => {
    if (rowsPerPage > 0) {
      return stableSort(products, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    }
    return products
  }

  return (
    <div className={classes.root}>
      <ToolBar />
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" >
          <Header
            classes={classes}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <Body
            list={computedData()}
            handleEditItem={handleEditItem}
            handleDeleteItem={handleDeleteItem}
          />
          <Footer
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            quantity={products.length}
          />
        </Table>
      </TableContainer>
      <Modal
        isOpen={modalIsOpen}
        close={closeModal}
      >
        <UpdateItem close={closeModal} currentItem={currentItem} />
      </Modal>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
