import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import ImageInput from '~/components/ImageInput';

import { Container } from '../styles';

import { newMeetupRequest } from '~/store/modules/meetup/actions';

export default function New() {
  const loading = useSelector(state => state.user.loading);
  const dispatch = useDispatch();

  function handleSubmit({ file_id, title, description, location }) {
    dispatch(
      newMeetupRequest(
        file_id,
        title,
        description,
        '2019-08-23T15:00:00-03:00',
        location
      )
    );
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <ImageInput name="file" />

        <Input name="title" placeholder="Título do meetup" />
        <Input
          name="description"
          placeholder="Descrição completa"
          multiline
          rows="4"
        />
        <Input name="date" placeholder="Data do meetup" />
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
