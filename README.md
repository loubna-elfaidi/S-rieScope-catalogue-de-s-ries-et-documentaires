# SérieScope

Catalogue en ligne de séries et de documentaires pour une médiathèque. Application web sur une seule page (SPA), développée en HTML5, CSS (Tailwind CSS ou Bootstrap) et JavaScript Vanilla.

## Contexte

Les visiteurs de la médiathèque peuvent parcourir le catalogue, rechercher une série par son nom et retrouver les titres d'un genre. L'équipe peut ajouter une série depuis l'interface. Les séries ajoutées sont conservées dans un tableau JavaScript jusqu'au rechargement de la page.

## API utilisée

**TVmaze** : API publique et gratuite, sans clé d'accès.

- Endpoint : `GET https://api.tvmaze.com/shows?page=0`
- Documentation : https://www.tvmaze.com/api
- Données exploitées : `name`, `language`, `status`, `genres` (tableau), `image.medium` (objet imbriqué)
- Les 20 premières séries de la réponse sont conservées dans un tableau JavaScript.

## Fonctionnalités

- Chargement du catalogue au démarrage avec `fetch()`, `async/await` et `try...catch`
- Messages de chargement, d'erreur et de confirmation
- Cartes de séries : affiche, titre, langue, statut et genres sous forme de badges
- Affiche de remplacement et valeurs par défaut pour les données manquantes
- Recherche par nom, sans distinction de casse
- Filtre par genre (option « Tous les genres »), combiné avec la recherche
- Bouton de réinitialisation des critères
- Message d'état vide lorsqu'aucune série ne correspond
- Formulaire d'ajout d'une série (titre, langue, genre) avec validation
- Interface responsive (desktop, tablette, mobile) et navigation au clavier

### Bonus

- Sauvegarde des séries ajoutées dans `localStorage`
- Fiche détaillée : note moyenne, jours et heure de diffusion, chaîne et pays

## Technologies

- HTML5 sémantique
- Tailwind CSS / Bootstrap
- JavaScript Vanilla (ES6+)
- Git, GitHub (GitFlow) et Jira
- Figma (zoning et maquettes desktop et mobile)

## Structure du projet

```
SerieScope/
├── index.html
├── script.js
├── style.css
├── images/
│   └── placeholder.png
└── README.md
```

## Lancement

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/loubna-elfaidi/S-rieScope-catalogue-de-s-ries-et-documentaires.git
   ```
2. Ouvrir le dossier dans VS Code.
3. Lancer `index.html` avec l'extension **Live Server** (clic droit puis « Open with Live Server »).
4. Une connexion Internet est nécessaire pour récupérer les données de l'API TVmaze.

## Organisation du travail (GitFlow)

- `main` : version stable
- `develop` : intégration des fonctionnalités
- Branches de fonctionnalités :
  - `feature/layout`
  - `feature/fetch-shows`
  - `feature/filter-by-genre`
  - `feature/add-show`
- Aucun commit direct sur `main` ou `develop` : tout passe par des Pull Requests.
- Suivi des tâches dans Jira : À faire, En cours, En revue, Terminé.

## Organisation du JavaScript

- Récupération des données (`fetchShows`)
- Affichage des cartes (`renderShows`), réutilisé pour le catalogue complet, les résultats filtrés et les séries ajoutées
- Recherche et filtrage (`filterShows`)
- Validation du formulaire (`validateForm`) et ajout d'une série (`addShow`)
- Événements gérés avec `addEventListener()`

## Planning

- Lancement : 9 novembre 2026
- Rendu : 13 novembre 2026 à 17h00

## Auteur

Projet individuel réalisé par [loubna-elfaidi](https://github.com/loubna-elfaidi) dans le cadre de la formation YouCode.