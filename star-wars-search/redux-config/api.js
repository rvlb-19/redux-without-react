const ROOT_URL = 'https://swapi.co/api';

const api = {
  searchCharacter: (character) => axios.get(`${ROOT_URL}/people?search=${character}`),
};
