# senchaCoin

How to learn Sencha

# Partie 1: Prise en main

L'objectif de cette partie est de vous familiariser avec ExtJS et Cmd


## Initialisation
- Récupérer le projet 
- Lancer Sencha Cmd avec la command 'sencha app watch' dans le dossier du projet
- Vérifier que l'appli tourne sur le port 1841 de votre machine

## Modification
- Créer un fichier Application.js dans le dossier en spécifiant une mainView
- Faire connaître votre Application dans le fichier app.js de base 
- Faire le fichier mainView ( définis dans Application.js) qui représentera votre page principal . Elle devra contenir un tabPanel et un simple html (Hello word!) et un boutton
- Ajouter un controller (Controller.js par exemple) qui a une fonction permettant d'afficher une alert 
- Ajouter le controller dans votre mainView et lier l'action du boutton à la fonction définis dans le controller
- Ajouter un viewModel dans les config de votre mainview avec comme donné un champ username
- Modifier le html pour afficher la valeur du champ username
- Modifier votre fonction du controller pour permettre la modification de la valeur username
Avec ça, vous êtes parés pour SenchaCoin

# Partie 2: SenchaCoin - login
- Créer une page de login (un formulaire)
- Pour simuler une base de données, créer un fichier JSON qui contiendra des logins d'utilisateurs (vous pourrez vous servir de l'api https://randomuser.me/api/?results=10 pour récupérer des utilisateurs créer aléatoirement) et charger ce fichier au chargement de l'application dans un store
- Lors de la validation du formulaire, faites la vérification avec les données renseignées dans le store
- Afficher (alert ou console log) un message pour vous assurer que vous retrouver bien l'utilisateur renseigné

# Partie 3: SenchaCoin - main
- Créer une autre view qui sera votre page principal (un tab panel avec menu et info )
- Rajouter la redirection vers cette page lorsque le formulaire est validé
- Ajouter sur la page principal un graphique (utiliser chart)
- Ajouter un appel ajax pour récupérer des données sur les cryptomonnaies ( api https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=10) périodiquement (toutes les 5 secondes par exemple)
- Mettez le graphique à jour à chaque appel



