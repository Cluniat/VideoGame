# Game Index
Application web développée en VueJs dans un style retro-gaming présentant un catalogue de jeux vidéos. 

## Utilisation
```
git clone https://github.com/Cluniat/VideoGame.git
cd video-game
npm install
npm run serve
```

## Choix techniques
 - Trello : Outil de gestion de projet en ligne 
 https://trello.com/b/5qh8Upll/page-jeux-vid%C3%A9o-apollo
 
 - Lunacy : Outil de création de maquette qui aide la transition de la conception au développement.
 
 - feature branch: Workflow adapté au travail réalisé ici
 
 - VueJs: Framework front adapté au travail réalisé ici
 
 - VueX : Permet la création d'un store qui met en place des variables globales pouvant donc être appelées ou modifiées sur l'ensemble du projet
 
 - axios : Permet de mettre en place les appels à l'API
 
 - postman : Logiciel permettant de tester les appels API 
 
 - igdb : API contenant une base de donnée de jeux vidéos
 
 - cors anywhere: Serveur proxy 
 https://cors-anywhere.herokuapp.com/
 
 Depuis le 13 février 2018, igdb permet de gérer les problèmes de CORS (Cross Origin Resource Sharing) uniquement dans sa version payante. Ici pour contourner le problème il a été fait appel à un serveur proxy ajoutant "Access Allow Origin: {Nom de domaine]" dans le header de  la requête http qui lui a été transmise. 
 
  
## Travail réalisé
 - rechercher: Barre de recherche
 
 - affichage des 50 meilleurs jeux: Au niveau de la page d'acceuil du site
 
 - filtrer par lettre alphabetique: Affiche uniquement les jeux dont le titre débute par la lettre sélectionnée par l'utilisateur
 
 - fenêtre modale: Au clique sur un jeu, elle s'ouvre et contient la description de ce jeu.   
 
 - pagination: mise en place d'un bouton permettant de faire apparaitre les jeux suivants 
## Amélioration
- composant de notation : Il est possible d'ajouter dans la modale l'affichage de la notation du jeu, par exemple avec des étoiles

- Mise en place du sass : Permet de simplifier, d'organiser et de dynamiser le CSS

- Gérer les appels API de manière globale

