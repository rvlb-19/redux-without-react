const triggerSearch = (term) => {
  updateLastSearch(term);
  api.searchCharacter(term).then(response => addCharacter(response.data));
};

const triggerRemoveCharacter = (id) => {
  removeCharacter(id);
};
