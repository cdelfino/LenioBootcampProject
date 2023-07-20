export const getComicsFromLocalStorage = () => {
  const comics = [];
  for (let key in localStorage) {
    if (key.startsWith("comic_")) {
        console.log("se guardo");
      const id = key.split("_")[1];
      const title = localStorage.getItem(`comic_${id}_title`);
      const imageUrl = localStorage.getItem(`comic_${id}_imageUrl`); // Recuperar la URL de la imagen directamente
      const description = localStorage.getItem(`comic_${id}_description`);
      const isFavorite = localStorage.getItem(key) === "true";
      comics.push({ id, title, imageUrl, description, isFavorite });
    }
  }
  return comics;
};
