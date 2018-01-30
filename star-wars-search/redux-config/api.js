const ROOT_URL = 'https://swapi.co/api';

const API = {
  searchCharacter: (character) => axios.get(`${ROOT_URL}/people?search=${character}`),
};
