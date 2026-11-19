const catalogue = document.querySelector(".catalogue");
console.log("catalogue =", catalogue);
export function afficherSeries(liste) {
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

    const description = document.createElement("p");
    description.className = "card-description";
    description.textContent = serie.summary || "";

    corps.appendChild(titre);
    corps.appendChild(genres);
    corps.appendChild(description);
    carte.appendChild(image);
    carte.appendChild(corps);
    catalogue.appendChild(carte);
  });
}