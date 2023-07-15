import axios from "axios";

const API_PUBLIC_KEY = "a51337414d79664cac3f28a336641f7d";

export const getSuperheroes = async () => {
  const apiUrl = `https://gateway.marvel.com/v1/public/characters?apikey=${API_PUBLIC_KEY}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data.data.results;
  } catch (error) {
    console.log("Error al obtener los datos de los superhéroes:", error);
    return [];
  }
};
