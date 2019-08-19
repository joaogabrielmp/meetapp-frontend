import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pt from 'date-fns/locale/pt';
import { format, parseISO, isBefore } from 'date-fns';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { storeMeetups } from '~/store/modules/meetup/actions';

import api from '~/services/api';

import { Container, Button, Meetup } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get('organizer');
        const data = await response.data.map(meetup => ({
          ...meetup,
          defaultData: meetup.date,
          past: isBefore(parseISO(meetup.date), new Date()),
          data: format(parseISO(meetup.date), "dd 'de' MMMM',' 'às' HH'h'", {
            locale: pt,
          }),
        }));

        setMeetups(data);
        dispatch(storeMeetups(data));
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
      {meetups.length > 0 ? (
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
