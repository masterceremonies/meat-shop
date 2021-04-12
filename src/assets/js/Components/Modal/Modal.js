import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { customStyles } from './settings';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';

Modal.setAppElement('#root');

const useStyles = makeStyles(() => ({
  button: {
    position: 'absolute',
    top: -5,
    right: -5
  },
}));

const ReactModal = ({ children, isOpen, close }) => {
  const classes = useStyles();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      style={customStyles}
      shouldCloseOnOverlayClick={false}
      close={close}
    >
      <div className="modal-wrapper">
        <IconButton className={classes.button} aria-label="close" onClick={close}>
          <CancelIcon />
        </IconButton>
        {children}
      </div>
    </Modal>
  );
};

ReactModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default ReactModal;
