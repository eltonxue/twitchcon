import { FETCH_FAVORITES } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_FAVORITES:
      // return state.concat([action.payload.data]);

      // We want to create an ENTIRELY NEW state
      console.log('Going through favorites reducer');
      console.log(action.payload);
      return action.payload.data;
  }

  return state;
}
