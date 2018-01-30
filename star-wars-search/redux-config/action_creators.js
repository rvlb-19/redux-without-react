const triggerSearch = (term) => {
  updateLastSearch(term);
  searchCharacter(term);
};

const triggerRemoveCharacter = (id) => {
  removeCharacter(id);
};
