import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import pt from 'date-fns/locale/pt';
import { format, parseISO, isBefore } from 'date-fns';
import api from '~/services/api';
// import history from '~/services/history';
import { fetchMeetupSuccess, failureMeetup } from './actions';

export function* fetchMeetup() {
  try {
    const response = yield call(api.get, 'organizer');

    const meetups = response.data.map(meetup => ({
      ...meetup,
      defaultData: meetup.date,
      past: isBefore(parseISO(meetup.date), new Date()),
      data: format(parseISO(meetup.date), "dd 'de' MMMM',' 'às' HH'h'", {
        locale: pt,
      }),
    }));

    console.log(`saga${meetups[0]}`);

    yield put(fetchMeetupSuccess(meetups));
  } catch (error) {
    toast.error(`Erro ao listar meetups`);
    yield put(failureMeetup());
  }
}

export default all([takeLatest('@meetup/FETCH_MEETUPS_REQUEST', fetchMeetup)]);
