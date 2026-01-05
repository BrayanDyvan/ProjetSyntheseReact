# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  
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
