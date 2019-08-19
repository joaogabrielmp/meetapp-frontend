export function fetchMeetupRequest() {
  return {
    type: '@meetup/FETCH_MEETUPS_REQUEST',
  };
}

export function fetchMeetupSuccess({ data }) {
  return {
    type: '@meetup/FETCH_MEETUPS_SUCCESS',
    payload: data,
  };
}

export function failureMeetup() {
  return {
    type: '@meetapp/FAILURE',
  };
}
