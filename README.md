
# Description du projet
Ce projet est une application React permettant d’explorer des personnages provenant de deux univers populaires : One Piece et Naruto.
Les données sont récupérées via deux APIs externes, puis affichées sous forme de cartes interactives avec recherche, zoom détaillé et navigation complète.

L’application inclut également un formulaire de connexion avec validation, une page d’accueil visuelle et une gestion d’état basée sur @preact/signals-react.

# Fonctionnalités principales
- One Piece
  
    Affichage des 20 premiers personnages de l’API.

    Recherche par âge.

    Page de zoom avec détails (prime, crew, statut, etc.).

    Images personnalisées via un tableau statique.

- Naruto
  
    Affichage de tous les personnages de l’API.
    
    Recherche par ID.
    
    Page de zoom avec détails (jutsu, sexe, numéro ninja, etc.).

- Connexion
  
    Formulaire avec validation Bootstrap.
    
    Vérification dynamique des champs.
    
    Bouton reset complet.

- Navigation
  
    Menu responsive avec React Router.
    
    Accès rapide aux pages One Piece, Naruto, Accueil et Connexion.
  
# Technologies utilisées

- React

- Vite

- React Router

- Bootstrap 5

- FontAwesome

- @preact/signals-react

- APIs externes One Piece & Naruto

# APIs utilisées

- One Piece
  
    https://api.api-onepiece.com/v2/characters/fr

- Naruto

    https://dattebayo-api.onrender.com/characters

# Structure du projet

  src/
  │── App.jsx
  │── main.jsx
  │── Controller.jsx
  │── Signals.js
  │
  ├── Modele/
  │   ├── OnePiece.js
  │   └── Naruto.js
  │
  ├── NavBarPage/
  │   └── NavBarPage.jsx
  │
  ├── PageDAcceuil/
  │   └── PageDAcceuil.jsx
  │
  ├── PageListe1/
  │   └── PageListe1.jsx
  │
  ├── PageListe2/
  │   └── PageListe2.jsx
  │
  ├── Zoom/
  │   ├── PageZoom1.jsx
  │   └── PageZoom2.jsx
  │
  └── Connexion/
      └── Connexion.jsx
# Installation

Étape 1 : Cloner le projet

- git clone <url-du-projet>
- cd <nom-du-dossier>

Étape 2 : Installer les dépendances

- npm install
  
Étape 3 : Lancer le serveur de développement

- npm run dev

# Gestion d’état avec Signals

    Le fichier Signals.js contient plusieurs signaux utilisés dans toute l’application :
    
    personnage : liste One Piece
    
    zoomPerson : personnage One Piece sélectionné
    
    personnageNaruto : liste Naruto
    
    zoomPersonNaruto : personnage Naruto sélectionné
    
    Les signaux permettent une mise à jour automatique des composants sans utiliser useState.

# Recherche

- One Piece
  Recherche par âge via la fonction Controller.tri().
  
- Naruto
  Recherche par ID via la fonction Controller.tri1().
  
  Les résultats sont affichés ou masqués en manipulant les classes CSS.
  
# Zoom

Lorsqu’un utilisateur clique sur une carte, le personnage est stocké dans un signal, puis la page Zoom affiche toutes ses informations détaillées.

# Améliorations possibles
    Pagination des listes
    
    Recherche avancée (nom, crew, clan…)
    
    Mode sombre
    
    Système de favoris
    
    Stockage local (localStorage)
    
    Tests unitaires
