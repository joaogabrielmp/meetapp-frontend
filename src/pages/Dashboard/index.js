import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import pt from 'date-fns/locale/pt';
import { format, parseISO, isBefore } from 'date-fns';
import { toast } from 'react-toastify';

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';

// import {} from '~/store/modules/meetup/actions';

import { Container, Button, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);
  // const dispatch = useDispatch();

  useEffect(() => {
    async function loadSchedule() {
      try {
        const response = await api.get('organizer', { params: { page } });
        const data = await response.data.map(meetup => ({
          ...meetup,
          defaultData: meetup.date,
          past: isBefore(parseISO(meetup.date), new Date()),
          data: format(parseISO(meetup.date), "dd 'de' MMMM',' 'às' HH'h'", {
            locale: pt,
          }),
        }));

        setMeetups(data);
      } catch (error) {
        toast.error('Houve um erro ao carregar os meetups');
      }
    }

    loadSchedule();
  }, [page]);

  // function handlePrev() {
  //   if (page > 1) {
  //     setPage(page - 1);
  //   }
  // }

  // function handleNext() {
  //   if (meetups.length >= 9) {
  //     setPage(page + 1);
  //   }
  // }

  console.log(meetups);

  return (
    <Container>
      <header>
        <h2>Meus meetups</h2>
        <Button>
          <MdAddCircleOutline size={20} />
          Novo meetup
        </Button>
      </header>
      {meetups.length > 0 ? (
        <ul>
          {meetups.map(meetup => (
            <Meetup key={String(meetup.id)} past={meetup.past}>
              <strong>{meetup.title}</strong>
              <div>
                <span>
                  {meetup.past ? 'Esse meetup já ocorreu' : meetup.data}
                </span>
                <MdChevronRight size={30} />
              </div>
            </Meetup>
          ))}
        </ul>
      ) : (
        <h3>Você não possuí nenhum meetup.</h3>
      )}
    </Container>
  );
}
