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
    <figure className='figure' style={{ borderRadius: '10px' }}>
      <figcaption>
        <img
          className='photo'
          src={log.image}
          style={{ borderRadius: '10px' }}
        />
        <h5 className='center' style={{ marginTop: '20px' }}>
          {log.name}
        </h5>

        <a
          href='#edit-log-modal'
          style={{ marginTop: '20px' }}
          className='modal-trigger grey-text'
          onClick={() => setCurrent(log)}
        >
          <i className='material-icons grey-text'>edit</i>
        </a>
        <a
          href='#!'
          onClick={onDelete}
          className='secondary-content'
          style={{ marginTop: '10px' }}
        >
          <i className='material-icons red-text'>delete</i>
        </a>
      </figcaption>

      <div className=''>
        {/* <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons red-text'>delete</i>
        </a> */}
      </div>
    </figure>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
