import React from 'react';

import { addNewItem } from '../../Store/productsSlice';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Form from './Form';

const CreateNewItem = (props) => {

  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    dispatch(addNewItem(data))
  }

  return (
    <>
      <Typography variant="h6">
        Create new item
      </Typography>
      <Form submit={handleSubmit} buttonLabel="Create" {...props} />
    </>
  );
};

export default CreateNewItem;