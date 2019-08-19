import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { fetchMeetupRequest } from '~/store/modules/meetup/actions';

import { Container, Button, Meetup } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);

  useEffect(() => {
    async function loadMeetup() {
      try {
        dispatch(fetchMeetupRequest());
      } catch (error) {
        toast.error('Houve um erro ao carregar os meetups');
      }
    }

    loadMeetup();
  }, [dispatch]);

  return (
    <Container>
      <header>
        <h2>Meus meetups</h2>
        <Link to="/meetup">
          <Button>
            <MdAddCircleOutline size={20} />
            Novo meetup
          </Button>
        </Link>
      </header>
      {meetups ? (
        <ul>
          {meetups.map(meetup => (
            <Link key={String(meetup.id)} to={`/meetup/${meetup.id}`}>
              <Meetup past={meetup.past}>
                <strong>{meetup.title}</strong>
                <div>
                  <span>
                    {meetup.past ? 'Esse meetup já ocorreu' : meetup.data}
                  </span>
                  <MdChevronRight size={30} />
                </div>
              </Meetup>
            </Link>
          ))}
        </ul>
      ) : (
        <h3>Você não possuí nenhum meetup.</h3>
      )}
    </Container>
  );
}
