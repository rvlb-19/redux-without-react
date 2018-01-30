const searchCharacter = (term) => store.dispatch({ type: actionTypes.ADD_CHARACTER, payload: term });
const removeCharacter = (id) => store.dispatch({ type: actionTypes.REMOVE_CHARACTER, id });
const updateLastSearch = (term) => store.dispatch({ type: actionTypes.SEARCH, payload: term });
