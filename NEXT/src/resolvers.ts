import Response from "./types";
import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character/'

const filterCharacters = async (args: { species: string, page: number  }) => {
    try {
        const response = await axios.get(`${API_URL}?page=${args.page}&species=${args.species}`);
        console.log("response ", response.data)
        return response.data as Response;
      } catch (error) {
        console.error('Error fetching user:', error);
        throw new Error('Failed to fetch user');
      }
};


export const root = {
    filterCharacters
};
