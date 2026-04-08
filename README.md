# Astro-Stock - Système de Gestion de Stock

Une application web moderne de gestion de stock construite avec Astro.js, offrant une interface épurée et des fonctionnalités CRUD complètes.

## 🚀 Stack Technologique

- **Frontend**: [Astro.js](https://astro.build/) avec SSR (Server-Side Rendering)
- **Base de données**: PostgreSQL hébergé sur [Supabase](https://supabase.com/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/) pour une gestion type-safe des données
- **Styling**: CSS vanilla avec support thème clair/sombre
- **Police**: Poppins (Google Fonts)
- **Runtime**: Node.js

## 📁 Structure du Projet

```text
astro-stock/
├── .env                    # Variables d'environnement (DATABASE_URL)
├── drizzle.config.ts       # Configuration Drizzle ORM
├── astro.config.mjs        # Configuration Astro
├── package.json            # Dépendances et scripts
├── drizzle/                # Fichiers de migration SQL
├── src/
│   ├── db/
│   │   ├── index.ts        # Connexion à la base de données
│   │   └── schema.ts       # Schéma de la table products
│   ├── layouts/
│   │   └── Layout.astro    # Layout principal avec navbar et footer
│   └── pages/
│       ├── index.astro     # Page d'accueil avec statistiques
│       ├── products/
│       │   └── index.astro # Page inventaire avec liste des produits
│       └── api/
│           └── products/
│               ├── create.ts         # API: Créer un produit
│               ├── [id].ts           # API: Récupérer un produit
│               └── [id]/
│                   ├── update.ts     # API: Modifier un produit
│                   └── delete.ts     # API: Supprimer un produit
```

## 🛠️ Installation et Configuration

### Prérequis

- Node.js 18+ installé
- Un compte [Supabase](https://supabase.com/) (gratuit)

### Étapes d'installation

1. **Cloner le projet**
   ```bash
   git clone https://github.com/brondonxify/astro-stock.git
   cd astro-stock
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer la base de données Supabase**
   - Créez un nouveau projet sur [Supabase](https://supabase.com/)
   - Dans les paramètres du projet, récupérez l'URL de connexion PostgreSQL
   - Créez un fichier `.env` à la racine du projet :
     ```env
     DATABASE_URL=postgresql://postgres.[REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres
     ```

4. **Créer la table dans la base de données**
   ```bash
   npx drizzle-kit push
   ```

5. **Lancer l'application**
   ```bash
   npm run dev
   ```

6. **Accéder à l'application**
   
   Ouvrez votre navigateur sur [http://localhost:4321](http://localhost:4321)

## 🎯 Fonctionnalités

- **Tableau de bord** : Vue d'ensemble avec statistiques en temps réel
- **Gestion des produits** : CRUD complet (Créer, Lire, Modifier, Supprimer)
- **Interface moderne** : Design épuré avec thème clair/sombre
- **Popups interactives** : Formulaires dans des modales pour une meilleure UX
- **Responsive** : Adapté à tous les écrans
- **Temps réel** : Les statistiques se mettent à jour automatiquement

## 📝 Schéma de la Base de Données

Table `products` :
- `id` : Identifiant unique (auto-incrémenté)
- `name` : Nom du produit
- `description` : Description (optionnel)
- `quantity` : Quantité en stock
- `price` : Prix en FCFA
- `category` : Catégorie du produit
- `createdAt` : Date de création
- `updatedAt` : Date de dernière modification

## 🧞 Commandes Disponibles

| Commande | Action |
|----------|--------|
| `npm install` | Installe toutes les dépendances |
| `npm run dev` | Lance le serveur de développement sur `localhost:4321` |
| `npm run build` | Compile l'application pour la production dans `./dist/` |
| `npm run preview` | Prévisualise la version de production |
| `npx drizzle-kit push` | Applique le schéma à la base de données |
| `npx drizzle-kit generate` | Génère les fichiers de migration |

