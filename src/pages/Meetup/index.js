import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Meetup({ match }) {
  const meetupId = Number(match.params.id);
  const meetups = useSelector(state => state.meetup.meetups);

  const meetup = meetups.find(m => m.id === meetupId);

  if (!meetupId) {
    alert('new');
  } else {
    alert(`edit${meetupId}`);
  }

  return <Container />;
}

Meetup.propTypes = {
  match: PropTypes.shape().isRequired,
};
