import React from 'react';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
// import api from '~/services/api';

import { Container, Button, Meetup } from './styles';

function handleNewMeetup() {}

export default function Dashboard() {
  return (
    <Container>
      <header>
        <h2>Meus meetups</h2>
        <Button onClick={handleNewMeetup}>
          <MdAddCircleOutline size={20} />
          Meus meetups
        </Button>
      </header>

      <ul>
        <Meetup past>
          <strong>Meetup de React Native</strong>
          <span>24 de Junho, às 20h</span>
          <MdChevronRight size={30} />
        </Meetup>

        <Meetup>
          <strong>Meetup de NodeJS</strong>
          <span>17 de Julho, às 13h</span>
          <MdChevronRight size={30} />
        </Meetup>

        <Meetup>
          <strong>Meetup de ReactJS</strong>
          <span>30 de Agosto, às 20h</span>
          <MdChevronRight size={30} />
        </Meetup>
      </ul>
    </Container>
  );
}
