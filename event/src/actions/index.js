export const FETCH_FAVORITES = 'FETCH_FAVORITES';

export function fetchFavorites(username) {
  console.log('Fetching favorites');

  // Redux-promise middleware
  return {
    type: FETCH_FAVORITES,
    payload: request
  };
}
