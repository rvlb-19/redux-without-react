const actionTypes = {
  ADD_CHARACTER: 'ADD_CHARACTER',
  REMOVE_CHARACTER: 'REMOVE_CHARACTER',
  SEARCH: 'SEARCH',
};

const addCharacter = term => (dispatch, getState, { api }) => (
  api.searchCharacter(term)
    .then(response => dispatch({ type: actionTypes.ADD_CHARACTER, payload: response.data })
  )
);

const removeCharacter = id => ({ type: actionTypes.REMOVE_CHARACTER, id });

const updateLastSearch = term => ({ type: actionTypes.SEARCH, payload: term });
