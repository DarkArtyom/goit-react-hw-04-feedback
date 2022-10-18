import { Fragment } from 'react';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <Fragment>
      <p>{message}</p>
    </Fragment>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};
