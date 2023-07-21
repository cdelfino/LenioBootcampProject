export const getComicsFromLocalStorage = () => {
  const comics = [];
  for (let key in localStorage) {
    if (key.startsWith("comic_")) {
      console.log("se guardo");
      const id = key.split("_")[1];
      const title = localStorage.getItem(`comic_${id}_title`);
      const isFavorite = localStorage.getItem(key) === "true";
      const imageUrl = localStorage.getItem(`comic_${id}_imageUrl`); // Recuperar la URL de la imagen directamente
      const description = localStorage.getItem(`comic_${id}_description`); // Recuperar la URL de la imagen directamente

      comics.push({ id, title, description, imageUrl, isFavorite });
    }
  }
  console.log(comics, "comics");
  return comics;
};
