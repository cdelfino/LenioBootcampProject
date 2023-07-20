export const getSuperheroesFromLocalStorage = () => {
  const superheroes = [];
  for (let key in localStorage) {
    if (key.startsWith("superhero_")) {
      const id = key.split("_")[1];
      const name = localStorage.getItem(`superhero_${id}_name`); // Obtener el nombre del superhéroe del localStorage
      const isFavorite = localStorage.getItem(key) === "true";
      superheroes.push({ id, name, isFavorite });
    }
  }
  return superheroes;
};
