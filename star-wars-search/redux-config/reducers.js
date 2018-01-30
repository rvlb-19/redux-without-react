const characters = (state = [], action) => {
  switch(action.type) {
  case actionTypes.ADD_CHARACTER:
    return [ ...state, ...action.payload.results ];
  case actionTypes.REMOVE_CHARACTER:
     return state.filter((item, id) => (id != action.id));
  default:
    return state;
  }
};

const lastSearch = (state = '', action) => {
  switch(action.type) {
    case actionTypes.SEARCH:
      return action.payload;
    default:
      return state;
  }
};
