
fetch("https://api.tvmaze.com/shows?page=0")
  .then((result) => result.json())
  .then((data) => {
    series = data.slice(0, 20);
    remplirGenres(extraireGenres(series));
    actualiserCatalogue();
  })
  .catch((error) => {
    console.log(error);
  });
let series = []

const catalogue = document.querySelector(".catalogue");
const champRecherche = document.getElementById("search");
const filtreGenre = document.getElementById("genre");
const boutonReset = document.getElementById("reset-btn");
const formulaireFiltres = document.querySelector(".catalogue__filters");

formulaireFiltres.addEventListener("submit", (e) => {
  e.preventDefault();
});

function afficherSeries(liste) {
  catalogue.textContent = "";

  if (liste.length === 0) {
    catalogue.textContent = "Aucune série trouvée";
    return;
  }

  liste.forEach((serie) => {
    const carte = document.createElement("article");
    carte.className = "card";

    const image = document.createElement("img");
    image.className = "card-image";
    image.src = serie.image ? serie.image.medium : "";
    image.alt = serie.name;

    const corps = document.createElement("div");
    corps.className = "card-body";

    const titre = document.createElement("h3");
    titre.className = "card-title";
    titre.textContent = serie.name;

    const genres = document.createElement("div");
    genres.className = "card-genres";
    (serie.genres || []).forEach((genre) => {
      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = genre;
      genres.appendChild(badge);
    });

    corps.appendChild(titre);
    corps.appendChild(genres);
    carte.appendChild(image);
    carte.appendChild(corps);
    catalogue.appendChild(carte);
  });
}

function extraireGenres(liste) {
  const genresUniques = [];
  liste.forEach((serie) => {
    (serie.genres || []).forEach((genre) => {
      if (!genresUniques.includes(genre)) {
        genresUniques.push(genre);
      }
    });
  });
  return genresUniques;
}

function remplirGenres(genres) {
  filtreGenre.innerHTML =
    '<option value="" class="text-slate-200">Tous les genres</option>';

  genres.forEach((genre) => {
    filtreGenre.innerHTML += `<option value="${genre}" class="text-slate-200">${genre}</option>`;
  });
}

function actualiserCatalogue() {
  const recherche = champRecherche.value.trim().toLowerCase();
  const genreChoisi = filtreGenre.value;

  const resultats = series.filter((serie) => {
    const nom = (serie.name || "").toLowerCase();
    const genres = serie.genres || [];

    const correspondNom = nom.includes(recherche);
    const correspondGenre = genreChoisi === "" || genres.includes(genreChoisi);

    return correspondNom && correspondGenre;
  });

  afficherSeries(resultats);
}

champRecherche.addEventListener("input", actualiserCatalogue);
filtreGenre.addEventListener("change", actualiserCatalogue);

boutonReset.addEventListener("click", () => {
  champRecherche.value = "";
  filtreGenre.value = "";
  actualiserCatalogue();
});
