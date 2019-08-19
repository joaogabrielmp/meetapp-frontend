import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { MdAddCircleOutline } from 'react-icons/md';

import ImageInput from '~/components/ImageInput';

import { Container } from '../styles';

export default function New() {
  const loading = useSelector(state => state.user.loading);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    // dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <ImageInput name="file" />

        <Input name="title" placeholder="Título do meetup" />
        <Input name="description" placeholder="Descrição completa" />

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

New.propTypes = {
  match: PropTypes.shape().isRequired,
};
