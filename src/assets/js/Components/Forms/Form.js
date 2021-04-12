import React, {useState} from 'react';
import PropTypes from 'prop-types';

import TextInput from './Components/TextInput';
import Button from '@material-ui/core/Button';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '& .MuiTextField-root': {
      margin: 10,
      width: 300,
    },
  },
  buttonWrapper: {
    margin: '20px 0 0 0',
    textAlign: 'center',
  },
  button: {
    width: '50%',
    backgroundColor: '#AA3C3B',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: fade('#AA3C3B', 0.75),
    },
  },
});

const Form = ({ buttonLabel, currentItem, submit, close }) => {
  const classes = useStyles();

  const [state, setState] = useState(currentItem);

  const setStateHandler = (data) => {
    setState({...state, [data.name]: data.value})
  }

  const sendDataHandler = e => {
    e.preventDefault();
    const data = {
      productSize: state.productSize,
      item: state.item,
      plu_upc: state.plu_upc,
      price: state.price,
      productId: state.productId,
      catId: state.catId,
      uom: state.uom,
    }
    submit(data)
    close();
  }

  return (
    <form className={classes.root} onSubmit={sendDataHandler}>
      <TextInput
        name="productId"
        label="ID"
        onSubmit={setStateHandler}
        initValue={state.productId || ''}
        required
        type="number"
      />
      <TextInput
        name="item"
        label="Item"
        onSubmit={setStateHandler}
        initValue={state.item || ''}
        required
      />
      <TextInput
        name="productSize"
        label="Product Size"
        onSubmit={setStateHandler}
        initValue={state.productSize || ''}
      />
      <TextInput
        name="plu_upc"
        label="Plu UPC"
        onSubmit={setStateHandler}
        initValue={state.plu_upc || ''}
      />
      <TextInput
        name="price"
        label="Price"
        onSubmit={setStateHandler}
        initValue={state.price || ''}
      />
      <TextInput
        name="catId"
        label="Category"
        onSubmit={setStateHandler}
        initValue={state.catId || ''}
      />

      <TextInput
        name="uom"
        label="UOM"
        onSubmit={setStateHandler}
        initValue={state.uom || ''}
      />

      <div className={classes.buttonWrapper}>
        <Button
          type='submit'
          variant="contained"
          className={classes.button}
          disabled={!state.item || !state.productId}
        >
          {buttonLabel}
        </Button>
      </div>
    </form>
  );
};

Form.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  currentItem: PropTypes.object,
};

Form.defaultProps  = {
  currentItem: {}
}

export default Form;