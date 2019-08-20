import React from 'react';
import { Link } from 'react-router-dom';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';

import { Container, EditButton, CancelButton } from './styles';

const meetup = [];

export default function Details() {
  return (
    <Container>
      <header>
        <h2>Meus meetups</h2>
        <Link to={`/meetup/edit/${meetup.id}`}>
          <EditButton>
            <MdModeEdit size={20} />
            Editar
          </EditButton>
        </Link>
        <CancelButton>
          <MdDeleteForever size={20} />
          Cancelar
        </CancelButton>
      </header>
    </Container>
  );
}
