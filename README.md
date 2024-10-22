# Test technique à réaliser avant entrevue

Entrevue de 30 minutes durant laquelle le candidat présente sa réalisation et ses
choix techniques.
Ce qui est attendu
Un test sur le site web Kiabi suivant ce scénario :

1. Aller sur la page d’accueil
2. Accepter les cookies
3. Faire une recherche d’article avec un mot clé
4. En choisir un dans les résultats
5. Ajouter l’article au panier
6. Continuer comme invité avec code postal (28820)
7. Choisir un mode de livraison à domicile
8. Vérifier les éléments de la page de paiement

En plus de ce test, le candidat pourra créer n’importe quel test qu’il jugerait critique.

Ces tests doivent être jouables sur les environnements de production FR et ES
(https://www.kiabi.fr et https://www.kiabi.es).

Conditions à respecter pour le test technique

- Un projet sur github
- Langage de programmation : Typescript
- Utilisation du pattern Page Object Model
- Exécutable sur les deux environnements décrits plus haut
- Les jeux de données utilisés dans les tests doivent être externalisés dans un
  fichier JSON

Toute bonne pratique jugée utile par le candidat (en termes de programmation,
de testing, de structuration du projet) sera la bienvenue.

# Détails des répertoires

- src/pages : Contient les classes Page Object Model pour chaque page (Home, Product, Cart, Delivery, Payment).
- tests : Contient les fichiers de tests écrits en Playwright.
- data : Contient les jeux de données externalisés en JSON.
- playwright.config.ts : Configuration des environnements et des navigateurs pour Playwright.

# Installation

1. Clonez ce dépôt :

bash
git clone git@github.com:PriscilliaAmmeux/TestPlaywright.git

2. Installez les dépendances :

bash
cd kiabi-test
npm install

3. Installez les navigateurs pour Playwright :

bash
npx playwright install

## Exécution des tests

bash
npx playwright test
