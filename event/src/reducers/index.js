import { combineReducers } from 'redux';
import FavoritesReducer from './reducer_favorites';

export default combineReducers({
  favorites: FavoritesReducer
});
