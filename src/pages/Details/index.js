import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { MdModeEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';
import history from '~/services/history';

import { cancelMeetupRequest } from '~/store/modules/meetup/actions';

import { Container, Meetup } from './styles';

export default function Details({ match }) {
  const meetupId = Number(match.params.id);
  const meetups = useSelector(state => state.meetup.meetups);
  const dispatch = useDispatch();

  const meetup = meetups.find(m => m.id === meetupId);

  async function handleEdit() {
    history.push(`/meetup/edit/${meetupId}`);
  }

  async function handleCancel() {
    try {
      dispatch(cancelMeetupRequest());
    } catch (error) {
      toast.error('Houve um erro ao cancelar o meetup');
    }
  }

  return (
    <Container>
      <header>
        <h2>{meetup.title}</h2>
        <aside>
          <button type="button" className="edit" onClick={handleEdit}>
            <MdModeEdit size={20} />
            Editar
          </button>
          <button type="button" className="cancel" onClick={handleCancel}>
            <MdDeleteForever size={20} />
            Cancelar
          </button>
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
