import axios from "axios";

const API_PUBLIC_KEY = "a51337414d79664cac3f28a336641f7d";

export const getSuperheroComics = async (superheroId) => {
  const comicsUrl = `https://gateway.marvel.com/v1/public/characters/${superheroId}/comics?apikey=${API_PUBLIC_KEY}`;

  try {
    const response = await axios.get(comicsUrl);
    return response.data.data.results;
  } catch (error) {
    console.error("Error al obtener los cómics del comic:", error);
    return [];
  }
};
