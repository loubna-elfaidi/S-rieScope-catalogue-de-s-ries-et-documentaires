const filtreGenre = document.getElementById("genre");
const filtreLangue = document.getElementById("language");

export function remplirGenres(series) {
  const genres = [];

  series.forEach((serie) => {
    serie.genres.forEach((genre) => {
      if (!genres.includes(genre)) {
        genres.push(genre);
      }
    });
  });

  filtreGenre.textContent = "";

  const optionTous = document.createElement("option");
  optionTous.value = "";
  optionTous.textContent = "Tous les genres";
  filtreGenre.appendChild(optionTous);

  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    filtreGenre.appendChild(option);
  });
}

export function remplirLangues(series) {
  const langues = [];

  series.forEach((serie) => {
    if (serie.language && !langues.includes(serie.language)) {
      langues.push(serie.language);
    }
  });

  langues.sort();

  filtreLangue.textContent = "";

  const optionToutes = document.createElement("option");
  optionToutes.value = "";
  optionToutes.textContent = "Toutes les langues";
  filtreLangue.appendChild(optionToutes);

  langues.forEach((langue) => {
    const option = document.createElement("option");
    option.value = langue;
    option.textContent = langue;
    filtreLangue.appendChild(option);
  });
}