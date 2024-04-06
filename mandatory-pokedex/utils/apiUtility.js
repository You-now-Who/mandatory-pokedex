export default class ApiUtility {
    constructor(axios) {
        this.url = "https://pokeapi.co/api/v2"
        this.axios = axios;
    }

    async get(resource, endpoint) {
        /* 
            this returns the data of a resource
            endpoint: can be either the name or the ID of the resource.
        */
        try {
            const response = await this.axios.get(`${this.url}/${resource}/${endpoint}/`);
            return response.data;
        } catch (error) {
            console.error('Error fetching:', error);
            throw error;
        }
    }

    async getAll(resource, limit, offset) {
        /* 
            this returns the data of all resources
            limit: the number of resources to return
            offset: the number of resources to skip
        */
        try {
            const response = await this.axios.get(`${this.url}/${resource}/?limit=${limit}&offset=${offset}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching:', error);
            throw error;
        }
    }
}