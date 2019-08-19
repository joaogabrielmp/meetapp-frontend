import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Meetup({ match }) {
  const { id } = match.params;

  if (!id) {
    alert('new');
  } else {
    alert('edit');
  }

  return <Container />;
}

Meetup.propTypes = {
  match: PropTypes.shape().isRequired,
};
