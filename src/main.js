import { getAll } from "./services/serieService.js";
import { state } from "./data/store.js";
import { afficherSeries } from "./ui/cards.js";
import { remplirGenres, remplirLangues } from "./ui/filters.js";
import { formAjout, verifierNom } from "./ui/form.js";
const champRecherche = document.getElementById("search");
const filtreGenre = document.getElementById("genre");
const filtreLangue = document.getElementById("language");

async function chargerSeries() {
  const criteres = {
    name: champRecherche.value,
    genre: filtreGenre.value,
    language: filtreLangue.value
  };

  const resultat = await getAll(criteres);
  setSeries(resultat);
  afficherSeries(state.series);
}


state.series  = await getAll();

remplirGenres(state.series);
remplirLangues(state.series);
afficherSeries(state.series);

champRecherche.addEventListener("input", chargerSeries);
filtreGenre.addEventListener("change", chargerSeries);
filtreLangue.addEventListener("change", chargerSeries);

formAjout.addEventListener("submit", (event) => {
  event.preventDefault();

  const nom = verifierNom();
  console.log(nom);
});