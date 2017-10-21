import { FETCH_FAVORITES } from '../actions/index';

export default function(state = null, action) {
  console.log('Fetch Weather Action received', action);

  switch (action.type) {
    case FETCH_FAVORITES:
      // return state.concat([action.payload.data]);

      // We want to create an ENTIRELY NEW state
      console.log('Going through favorites reducer');
      return action.payload.data;
  }

  return state;
}
