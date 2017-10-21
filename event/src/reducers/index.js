import { combineReducers } from 'redux';

import FavoritesReducer from './reducer_favorites.js';

export default combineReducers({
  favorites: FavoritesReducer
});
