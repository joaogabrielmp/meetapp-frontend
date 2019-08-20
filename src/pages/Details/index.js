import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdModeEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';

import { Container, EditButton, CancelButton, Meetup } from './styles';

export default function Details({ match }) {
  const meetupId = Number(match.params.id);
  const meetups = useSelector(state => state.meetup.meetups);

  const meetup = meetups.find(m => m.id === meetupId);

  async function handleEdit() {
    // history.push('/dashboard');
    // <Link to={`/meetup/edit/${meetup.id}`}>
  }

  async function handleCancel() {
    // try {
    //   await api.delete(`meetups/${id}`);
    //   toast.success('Meetup foi cancelado com sucesso');
    //   history.push('/dashboard');
    // } catch (err) {
    //   toast.error('Error cancelling meetup, please try again');
    // }
  }

  return (
    <Container>
      <header>
        <h2>{meetup.title}</h2>
        <aside>
          <EditButton onClick={handleEdit}>
            <MdModeEdit size={20} />
            Editar
          </EditButton>
          <CancelButton onClick={handleCancel}>
            <MdDeleteForever size={20} />
            Cancelar
          </CancelButton>
        </aside>
      </header>

      <Meetup>
        <img src={meetup.file.url} alt={meetup.title} />
        <p>{meetup.description}</p>
        <p>
          Caso queira participar como palestrante do meetup envie um e-mail para
          organizacao@meetapp.com.br.
        </p>
        <div>
          <span>
            <MdEvent size={17} />
            {meetup.date}
          </span>
          <span>
            <MdPlace size={17} />
            {meetup.location}
          </span>
        </div>
      </Meetup>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape().isRequired,
};
