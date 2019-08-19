import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Meetup({ match }) {
  const { id } = match.params;
  const meetup = useSelector(state => state.meetup);

  if (!id) {
    alert('new');
  } else {
    alert('edit');
  }

  console.log(meetup);

  return <Container />;
}

Meetup.propTypes = {
  match: PropTypes.shape().isRequired,
};
