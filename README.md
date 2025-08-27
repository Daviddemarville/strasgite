# STRASGITE — La Maison Strasbourgeoise

Site vitrine (et base contact/réservation maquette) d’un **gîte fictif** réalisé dans le cadre d’un **projet d’apprentissage** à la Wild Code School.

- 🎯 Objectif : concevoir une application front **accessible, responsive et maintenable**.
- 🧪 Contexte pédagogique : **premier projet en monorepo** avec **Biome imposé**.
- 🔌 Portée : **Front uniquement** ; le **backend est simulé** par des **fichiers JSON** (pas d’API en prod).

---

## Pourquoi ce projet ?
- **Mettre en pratique** React + TypeScript + Tailwind sur un cas concret (présenter un gîte : accueil, photos, infos, contact…).
- **S’outiller correctement** dès le départ : monorepo, conventions de code, hooks Git, **Biome** (lint/format).
- **Apprendre à découper** : composants réutilisables, pages, et “data layer” consommant des **mocks JSON**.
- **Déployer** un front sur **Vercel** et comprendre le cycle dev → build → preview.

---

## Fonctionnalités (maquette)
- Pages de contenu : accueil, infos pratiques, galerie, contact.
- Formulaire(s) côté front (maquettes), validation basique.
- **Données mockées** depuis des fichiers JSON du repo (aucun traitement côté serveur).
- Design **responsive** (Tailwind).
- Lint/format **automatisés** (Biome).

> ⚠️ Les données (coordonnées, SIRET…) sont **fictives** et servent l’exercice.

---

## Stack & Outillage
- **React 18 + TypeScript**
- **Vite** (dev server / build)
- **Tailwind CSS**
- **Biome** (lint + format)
- **Git hooks** (pré-configurés via `.git-hooks`) pour appliquer les règles localement

---

## Monorepo — organisation (exemple)
> Première expérience en **monorepo** : mutualiser la config (Biome, TS), séparer le front et, au besoin, des paquets UI/config.

.
├─ apps/
│ └─ web/ # application front (React + Vite + Tailwind)
├─ packages/
│ ├─ config/biome/ # config Biome partagée (ex.)
│ └─ tsconfig/ # bases tsconfig partagées (ex.)
├─ public/ # assets statiques (icônes, images, JSON mocks…)
└─ README.md

yaml
Copier le code

> La structure exacte peut varier selon les itérations ; l’idée clé : **centraliser la config** et **isoler les apps/packages**.

---

## Données & mocks
- Les données sont fournies via des **fichiers JSON** (ex. `public/data/*.json`).
- Le front **lit ces JSON** au runtime (ex. `fetch('/data/xxx.json')`).
- **Aucun backend** n’est requis pour lancer l’app.

👉 **Remplacer les mocks par une vraie API plus tard** :
1. Introduire `VITE_API_URL` dans `.env`.
2. Centraliser les appels (ex. `src/services/api.ts`).
3. Ajouter une passerelle de données (mapper DTO → modèles).
4. Gérer les erreurs/chargements (SWR/React Query ou custom).

---

## Démarrer en local

> Prérequis : **Node.js 18+** (recommandé 20+), **npm**

```bash
# 1) installation
npm ci          # recommandé après un clone
# ou: npm install

# 2) lancer le serveur de dev
npm run dev     # ouvre l'URL (ex: http://localhost:5173)

# 3) build de production
npm run build

# 4) prévisualiser le build
npm run preview
Qualité du code
bash
Copier le code
# Lint & format (Biome)
npx @biomejs/biome check --write .
Biome est imposé sur le projet (raccourcis dans les hooks Git).

Objectif : uniformiser style & qualité, réduire les frictions en équipe.

Découpage du front (extrait)
arduino
Copier le code
src/
  components/        # composants UI réutilisables
  pages/             # pages / vues
  styles/            # styles globaux / Tailwind config
  services/          # accès aux données (JSON mocks, futur API)
  utils/             # helpers
Choix & compromis
Front d’abord : focus UX/UI, accessibilité, composants propres.

Mocks JSON : accélérer la livraison sans attendre une API.

Monorepo + Biome : forcer de bonnes pratiques de qualité et de structure dès le départ.

TypeScript : robustesse & lisibilité (contrats de données, props…).

Prochaines étapes (idées)
Brancher une API réelle (auth, réservations, disponibilité).

Formulaires reliés au backend (validation serveur, emails).

Tests (Vitest + React Testing Library).

Design system (lib de composants partagée dans /packages/ui).

CI : lint + build PR, preview Vercel automatique.

Équipe
👤 Messica — Développeuse

👤 Thibault — Développeur

👤 Rahmoun — Développeur

👤 David — Développeur

📜 Licence

MIT