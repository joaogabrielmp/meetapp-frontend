import React from 'react';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
// import api from '~/services/api';

import { Container, Button, Meetup } from './styles';

function handleNewMeetup() {}

const meetups = [''];

export default function Dashboard() {
  return (
    <Container>
      <header>
        <h2>Meus meetups</h2>
        <Button onClick={handleNewMeetup}>
          <MdAddCircleOutline size={20} />
          Novo meetup
        </Button>
      </header>
      {meetups.length > 0 ? (
        <ul>
          <Meetup past>
            <strong>Meetup de React Native</strong>
            <div>
              <span>Esse meetup já ocorreu</span>
              <MdChevronRight size={30} />
            </div>
          </Meetup>

          <Meetup>
            <strong>Meetup de NodeJS</strong>
            <div>
              <span>17 de Julho, às 13h</span>
              <MdChevronRight size={30} />
            </div>
          </Meetup>

          <Meetup>
            <strong>Meetup de ReactJS</strong>
            <div>
              <span>30 de Agosto, às 20h</span>
              <MdChevronRight size={30} />
            </div>
          </Meetup>
        </ul>
      ) : (
        <h3>Você não possuí nenhum meetup.</h3>
      )}
    </Container>
  );
}
