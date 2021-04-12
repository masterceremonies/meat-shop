import React from 'react';

import { updateItem } from '../../Store/productsSlice';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Form from './Form';

const useStyles = makeStyles({
  root: {
    '& .MuiTextField-root': {
      margin: 10,
      width: 300,
    },
  },
});

const UpdateItem = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch()

  const handleSubmit = (data) => {
    dispatch(updateItem(data))
  }

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        Update item
      </Typography>
      <Form submit={handleSubmit} buttonLabel="Update" {...props} />
    </>
  );
};

export default UpdateItem;