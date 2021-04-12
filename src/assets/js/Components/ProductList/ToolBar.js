import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { fade, makeStyles } from '@material-ui/core/styles';

import Modal from '../../Components/Modal/Modal'
import CreateNewItem from '../Forms/CreateNewItem'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.red,
    padding: theme.spacing(2, 0),
    boxSizing: 'border-box'
  },
  button: {
    backgroundColor: '#AA3C3B',
    '&:hover': {
      backgroundColor: fade('#AA3C3B', 0.75),
    },
  },
}));

const ToolBar = () => {
  const classes = useStyles();

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () =>{
    setIsOpen(false);
  }

  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={9}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={ <AddIcon />}
              onClick={openModal}
            >
              Add new item
            </Button>
          </Grid>
        </Grid>
      </div>
      <Modal
        isOpen={modalIsOpen}
        close={closeModal}
      >
        <CreateNewItem close={closeModal} />
      </Modal>
    </>
  );
}

export default ToolBar;
