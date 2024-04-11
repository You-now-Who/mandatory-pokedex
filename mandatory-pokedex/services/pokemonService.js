import axios from 'axios';

class PokemonService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://pokeapi.co/api/v2',
    });
  }

  get(resource, id) {
    return this.api.get(`/${resource}/${id}`)
      .then(response => response.data);
  }

  getAll() {
    return this.api.get('/pokemon')
      .then(response => response.data.results);
  }
}

export default new PokemonService();