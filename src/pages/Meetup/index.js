import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import ImageInput from '~/components/ImageInput';

import { Container } from './styles';

export default function Meetup({ match }) {
  const meetupId = Number(match.params.id);
  const meetups = useSelector(state => state.meetup.meetups);

  const meetup = meetups.find(m => m.id === meetupId);

  return (
    <Container>
      <ImageInput />
    </Container>
  );
}

Meetup.propTypes = {
  match: PropTypes.shape().isRequired,
};
