const axios = require('axios');
import ApiUtility from '../utils/apiUtility';

export default class PokemonService {
    constructor() {
        this.apiUtility = new ApiUtility(axios);
    }

    async get(resource = null, endpoint = null) {
        /* 
        this returns the data of a Resource
        endpoint: can be either the name or the ID of the Resource.
        */
        if (resource === null || endpoint === null) {
            throw new Error('Resource and endpoint are required');
        }

        try {
            return await this.apiUtility.get(resource, endpoint);
        } catch (error) {
            console.error(`Error fetching ${resource}:`, error);
            throw error;
        }
    }

    async getAll(resource = null, limit = 10, offset = 0) {
        /* 
        this returns the data of {limit} Resources starting from {offset}
        */

        if (resource === null) {
            throw new Error('Resource are required');
        }

        try {
            return await this.apiUtility.getAll(resource, limit, offset);
        } catch (error) {
            console.error(`Error fetching All ${resource}:`, error);
            throw error;
        }
    }

}

