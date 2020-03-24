import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteLog, setCurrent } from '../../actions/logActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: 'Hiking Spot Deleted' });
  };

  return (
    <figure className='figure'>
      <img
        className='photo'
        src='https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      />
      <figcaption>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
          onClick={() => setCurrent(log)}
        >
          <h5>{log.message}</h5>
        </a>
      </figcaption>

      <div className='button-container'>
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons red-text'>delete</i>
        </a>
      </div>
    </figure>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
