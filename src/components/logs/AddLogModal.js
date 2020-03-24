import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = ({ addLog }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const onSubmit = () => {
    if (name === '') {
      M.toast({ html: 'Please enter hiking spots.' });
    } else {
      const newLog = {
        name,
        image,
        date: new Date()
      };

      addLog(newLog);

      M.toast({ html: 'Hiking spot added.' });

      // Clear Fields
      setName('');
      setImage('');
    }
  };

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter Hiking Spot</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Hiking Spot
            </label>
          </div>
          <div className='input-field'>
            <input
              type='text'
              name='image'
              value={image}
              onChange={e => setImage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Hiking Spot Image
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Save
        </a>
      </div>
    </div>
  );
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

export default connect(null, { addLog })(AddLogModal);
