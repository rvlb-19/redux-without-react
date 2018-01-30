const actionTypes = {
  ADD_CHARACTER: 'ADD_CHARACTER',
  REMOVE_CHARACTER: 'REMOVE_CHARACTER',
  SEARCH: 'SEARCH',
};

const addCharacter = term => store.dispatch({
  type: actionTypes.ADD_CHARACTER,
  payload: API.searchCharacter(term),
});

const removeCharacter = id => store.dispatch({ type: actionTypes.REMOVE_CHARACTER, id });

const updateLastSearch = term => store.dispatch({ type: actionTypes.SEARCH, payload: term });
