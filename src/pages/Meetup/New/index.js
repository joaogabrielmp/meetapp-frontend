import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';

import ImageInput from '~/components/ImageInput';
import DatePicker from '~/components/DatePicker';

import { Container } from '../styles';

import { newMeetupRequest } from '~/store/modules/meetup/actions';

const schema = Yup.object().shape({
  file_id: Yup.number().required(),
  title: Yup.string().required('Insira o título do meetup'),
  description: Yup.string().required('Descreva o seu meetup'),
  date: Yup.date().required('Date is required'),
  location: Yup.string().required('Insira o local'),
});

export default function New() {
  const loading = useSelector(state => state.user.loading);
  const dispatch = useDispatch();

  function handleSubmit({ file_id, title, description, date, location }) {
    dispatch(newMeetupRequest(file_id, title, description, date, location));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <ImageInput name="file" />

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
