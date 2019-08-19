import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  meetups: [],
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/FETCH_MEETUPS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@meetup/FETCH_MEETUPS_SUCCESS': {
        draft.loading = false;
        draft.meetups = action.payload.meetups;
        break;
      }
      case '@meetup/FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
