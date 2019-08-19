import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import pt from 'date-fns/locale/pt';
import { format, parseISO, isBefore } from 'date-fns';
import api from '~/services/api';
import history from '~/services/history';
import { fetchMeetupSuccess, failureMeetup, newMeetupSuccess } from './actions';

export function* fetchMeetup() {
  try {
    const response = yield call(api.get, 'organizer');

    const meetups = response.data.map(meetup => ({
      ...meetup,
      past: isBefore(parseISO(meetup.date), new Date()),
      data: format(parseISO(meetup.date), "dd 'de' MMMM',' 'às' HH'h'", {
        locale: pt,
      }),
    }));

    yield put(fetchMeetupSuccess(meetups));
  } catch (error) {
    toast.error(`Erro ao listar meetups`);
    yield put(failureMeetup());
  }
}

export function* newMeetup({ payload }) {
  try {
    const { file_id, title, description, date, location } = payload;

    yield call(api.post, 'meetups', {
      file_id,
      title,
      description,
      date,
      location,
    });
    toast.success('Meetup criado com sucesso');
    yield put(newMeetupSuccess());
    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha ao cadastrar o meetup, verifique seus dados!');
  }
}

export default all([
  takeLatest('@meetup/FETCH_MEETUPS_REQUEST', fetchMeetup),
  takeLatest('@meetup/NEW_MEETUP_REQUEST', newMeetup),
]);
