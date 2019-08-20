import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { zonedTimeToUtc } from 'date-fns-tz';

import ImageInput from '~/components/ImageInput';
import DatePicker from '~/components/DatePicker';

import { editMeetupRequest } from '~/store/modules/meetup/actions';

import { Container } from '../styles';

const schema = Yup.object().shape({
  // file_id: Yup.number().required(),
  title: Yup.string().required('Insira o título do meetup'),
  description: Yup.string().required('Descreva o seu meetup'),
  date: Yup.date().required('Insira uma data'),
  location: Yup.string().required('Insira o local'),
});

export default function Edit({ match }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loading);
  const meetupId = Number(match.params.id);
  const meetups = useSelector(state => state.meetup.meetups);

  const meetupFind = meetups.find(m => m.id === meetupId);

  const currentMeetup = {
    title: meetupFind.title,
    description: meetupFind.description,
    date: zonedTimeToUtc(meetupFind.defaultDate),
    location: meetupFind.location,
    file_id: meetupFind.file.id,
    file: {
      url: meetupFind.file.url,
    },
  };

  function handleSubmit({ file_id, title, description, date, location }) {
    dispatch(editMeetupRequest(file_id, title, description, date, location));
  }

  return (
    <Container>
      <Form schema={schema} initialData={currentMeetup} onSubmit={handleSubmit}>
        <ImageInput name="file_id" />
        {/* <img src={currentMeetup.file_url} alt={currentMeetup.title} /> */}

        <Input name="title" placeholder="Título do meetup" />
        <Input name="description" placeholder="Descrição completa" multiline />
        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <button type="submit">
          {loading ? (
            'Salvando...'
          ) : (
            <>
              <MdAddCircleOutline size={20} />
              Salvar meetup
            </>
          )}
        </button>
      </Form>
    </Container>
  );
}

Edit.propTypes = {
  match: PropTypes.shape().isRequired,
};
