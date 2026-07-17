# Trouve ton artisan

## Présentation du projet

**Trouve ton artisan** est une application web réalisée dans le cadre de ma formation de développeur web et web mobile.

L'objectif du projet est de proposer une plateforme permettant aux utilisateurs de rechercher et de consulter des artisans de la région Auvergne-Rhône-Alpes.

L'application permet notamment de découvrir des artisans, de les rechercher selon différents critères, de consulter les artisans les mieux notés et d'accéder à une fiche détaillée pour chaque artisan.

Le projet repose sur une architecture comprenant un frontend développé avec React, une API REST développée avec Node.js et Express, ainsi qu'une base de données MySQL administrée avec Sequelize.

---

## Fonctionnalités

L'application propose les fonctionnalités suivantes :

- Affichage de la liste des artisans
- Affichage des artisans les mieux notés
- Recherche d'un artisan
- Recherche par métier et par ville
- Filtrage des artisans par catégorie
- Catégories : Alimentation, Bâtiment, Fabrication et Services
- Consultation de la fiche détaillée d'un artisan
- Affichage du métier et de la ville de l'artisan
- Affichage de la note des artisans
- Navigation entre les différentes pages de l'application
- Gestion des URL inexistantes avec une page d'erreur 404
- Interface responsive adaptée aux ordinateurs, tablettes et smartphones

---

## Technologies utilisées

### Frontend

- React
- Vite
- React Router
- Axios
- Bootstrap
- CSS

### Backend

- Node.js
- Express
- Sequelize

### Base de données

- MySQL
- phpMyAdmin
- MySQL Workbench

### Outils de développement

- Visual Studio Code
- Git
- GitHub
- XAMPP
- Figma
- Vercel

---

## Architecture du projet

Le projet est organisé en deux parties principales :

- `frontend/` : contient l'application frontend développée avec React
- `src/` : contient les éléments du backend et de l'API REST

Le frontend communique avec l'API afin de récupérer les informations concernant les artisans, les catégories et les spécialités enregistrées dans la base de données MySQL.

---

## Installation du projet

### 1. Récupérer le projet

Cloner le dépôt GitHub sur votre ordinateur puis ouvrir le projet dans Visual Studio Code.

### 2. Installer les dépendances du backend

Depuis un terminal ouvert à la racine du projet :

```bash
npm install
```

### 3. Installer les dépendances du frontend

Se déplacer dans le dossier `frontend` :

```bash
cd frontend
```

Puis installer les dépendances :

```bash
npm install
```

---

## Configuration de la base de données

Le projet utilise une base de données MySQL.

Pour utiliser le projet en local :

1. Démarrer Apache et MySQL avec XAMPP.
2. Créer la base de données nécessaire au projet.
3. Importer les données et les tables nécessaires au fonctionnement de l'application.
4. Configurer les informations de connexion à la base de données.

Les principales données utilisées par l'application concernent notamment :

- les artisans ;
- les catégories ;
- les spécialités.

La connexion à la base de données est configurée à l'aide des variables d'environnement présentes dans un fichier `.env`.

Exemple de configuration :

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=nom_de_la_base
```

Les valeurs doivent être adaptées à l'environnement local utilisé.

**Important :** le fichier `.env` contient des informations de configuration et ne doit pas être publié dans le dépôt GitHub.

---

## Lancement de l'application

### Backend

Depuis la racine du projet, installer les dépendances puis lancer le serveur avec la commande:

```bash
npm start
```

### Frontend

Depuis le dossier `frontend`, lancer l'application avec la commande :

```bash
npm run dev
```

Vite indique ensuite dans le terminal l'adresse locale permettant d'accéder à l'application.

---

## Pages principales

L'application comprend notamment les pages suivantes :

- Page d'accueil
- Liste des artisans
- Fiche détaillée d'un artisan
- Page d'erreur 404

La navigation permet également d'accéder aux différentes catégories d'artisans et d'effectuer une recherche.

---

## Responsive Design

L'interface a été conçue afin de s'adapter aux différentes tailles d'écran.

Le site est utilisable sur :

- Ordinateur
- Tablette
- Smartphone

Des règles CSS responsive permettent d'adapter la disposition et l'affichage des différents éléments de l'interface.

---

## Maquettes Figma

Les maquettes de l'application ont été réalisées avec Figma avant la finalisation de l'interface.

Les principales maquettes réalisées sont :

- La page d'accueil
- La liste des artisans
- La fiche détaillée d'un artisan

Le lien vers les maquettes Figma est également disponible dans le dossier de présentation du projet.

---

## Déploiement

Le frontend de l'application est déployé en ligne avec Vercel.

Application en ligne :

https://emea01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdevoir-bilan-cef-trouve-ton-artisan.vercel.app%2F&data=05%7C02%7C%7C2c49cece4c3a46e1d70908dee41174cb%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C639198960768901498%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=NfsZZgQNcySBxxsritiXHuANul15x3mSHEn1r0Obf6Q%3D&reserved=0

Le code source complet du projet est disponible dans ce dépôt GitHub.

Le backend et la base de données sont utilisés dans l'environnement local du projet.

---

## Gestion des versions

Le projet utilise Git pour la gestion des versions et GitHub pour l'hébergement du code source.

Des commits réguliers ont été réalisés au cours du développement afin de conserver l'historique des différentes étapes du projet.

---

## Auteur

Projet **Trouve ton artisan** réalisé dans le cadre de ma formation de développeur web et web mobile.
