import axios from "axios";

const API_PUBLIC_KEY = "a51337414d79664cac3f28a336641f7d";
const LIMIT = 100;

export const getSuperheroes = async (searchTerm) => {
  if (!searchTerm) {
    const allSuperheroesUrl = `https://gateway.marvel.com/v1/public/characters?apikey=${API_PUBLIC_KEY}&limit=${LIMIT}&orderBy=-modified`;
    try {
      const response = await axios.get(allSuperheroesUrl);
      return response.data.data.results;
    } catch (error) {
      console.log("Error al obtener los datos de los superhéroes:", error);
      return [];
    }
  }

  const encodedSearchTerm = encodeURIComponent(searchTerm);
  const apiUrl = `https://gateway.marvel.com/v1/public/characters?apikey=${API_PUBLIC_KEY}&limit=${LIMIT}&nameStartsWith=${encodedSearchTerm}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data.data.results;
  } catch (error) {
    console.log("Error al obtener los datos de los superhéroes:", error);
    return [];
  }
};
