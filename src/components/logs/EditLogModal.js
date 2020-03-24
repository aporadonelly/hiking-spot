import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateLog } from '../../actions/logActions';

const EditLogModal = ({ current, updateLog }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (current) {
      setName(current.name);
      setImage(current.image);
    }
  }, [current]);

  const onSubmit = () => {
    if (name === '') {
      M.toast({ html: 'Please enter Hiking Spot name' });
    } else {
      const updLog = {
        id: current.id,
        name,
        image,
        date: new Date()
      };

      updateLog(updLog);
      M.toast({ html: 'Hiking Spot updated' });

      // Clear Fields
      setName('');
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Edit Hiking Post</h4>
        <div className='row '>
          <div className='input-field'>
            <input
              type='text'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='input-field'>
            <input
              type='text'
              name='image'
              value={image}
              onChange={e => setImage(e.target.value)}
            />
            <label htmlFor='image' className='active'>
              Hiking Spot Image
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p></p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Update
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.log.current
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
