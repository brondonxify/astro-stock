# astro-stock
Astro-stock | Application CRUD de gestion de stock. Développée avec Astro V6.1, Drizzle ORM/Supabase pour manipuler la base de données comme un objets JavaScript classiques, et PostgreSQL pour  stockées physiquement et de manière permanente les différentes données. 

Ce projet a été conçu pour offrir une interface rapide et une gestion d'inventaire fiable, en exploitant la puissance du rendu serveur d'Astro et la robustesse de PostgreSQL.

---

## Stack Technique

L'application repose sur un écosystème performant et typé :

*   Framework : [Astro V6.1](https://astro.build) (Mode SSR pour une gestion dynamique).
*   Base de données : [PostgreSQL](https://postgresql.org) (Hébergé via **Supabase**) pour un stockage physique et permanent des données.
*   ORM : [Drizzle ORM](https://drizzle.team) pour manipuler la base de données comme des objets JavaScript classiques (Type Safety).
*   Langage : TypeScript pour un code robuste et maintenable.

## Fonctionnalités (CRUD)

-   **Create** : Ajouter de nouveaux produits au stock (nom, quantité, prix, catégorie).
-   **Read** : Visualiser l'inventaire en temps réel avec une interface fluide.
-   **Update** : Modifier les informations ou mettre à jour les niveaux de stock.
-   **Delete** : Retirer des références de l'inventaire en toute sécurité.

## Installation et Configuration

1. Cloner le projet : git clone https://github.com
   cd CRUD
2. Installation des node package management : npm i
3. Lancement de la plateforme : npm run dev
