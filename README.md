# senchaCoin

How to learn Sencha

# Partie 1: Prise en main

L'objectif de cette partie est de vous familiariser avec ExtJS et Cmd


## Initialisation
- Récupérer le projet 
- Récupérer Sencha Cmd sur à l'adresse https://www.sencha.com/products/sencha-cmd/ et installer le ( il devrait s'installer dans votre espace de travail au path /bin ) 
PS: Il va vous falloir lancer Cmd de ce path à chaque fois que vous voulez l'éxecuter ( bin/Sencha/Cmd/sencha) 
- Configurer Cmd avec cette commande : 
    sencha config --prop sencha.sdk.path={Votre path vers le framework ExtJS, ici le dossier ext que vous venez de récupérer} --save
- Lancer Sencha Cmd avec la command 'sencha app watch' dans le dossier du projet
- Vérifier que l'appli tourne sur le port 1841 de votre machine

La documentation est votre plus grand ami. N'hésiter pas à aller la regarder si vous voulez comprendre certaines configs ou certains composants
http://docs.sencha.com/extjs/6.5.3/modern/Ext.html

## Modification
- Créer un fichier Application.js dans le dossier app en spécifiant une mainView
- Faire connaître votre Application dans le fichier app.js de base ( utiliser extend )
- Faire le fichier mainView qui représentera une page . Elle devra contenir un tabPanel avec un simple html (Hello word!) et un boutton
- Ajouter un controller (Controller.js par exemple) qui à une fonction permettant d'afficher une alert 
- Ajouter le controller dans votre mainView et lier l'action du boutton à la fonction définis dans le controller
- Ajouter une config  viewModel dans les config de votre mainview avec un champ username
- Ajouter un textfield qui doit permettre la modification de la valeur username
- Afficher la valeur du champ username

Avec ça, vous êtes parés pour SenchaCoin

# Partie 2: SenchaCoin - login

- Créer une page de login (un formulaire)

- Lors de la validation du formulaire, afficher (alert ou console log) un message 

Pour aller plus loin 
- Pour simuler une base de données, créer un fichier JSON qui contiendra des logins d'utilisateurs (vous pourrez vous servir de l'api https://randomuser.me/api/?results=10 pour récupérer des utilisateurs créer aléatoirement) et charger ce fichier au chargement de l'application dans un store
- Lors de la validation du formulaire, faites la vérification avec les données chargées pour vous assurer que vous retrouver bien l'utilisateur renseigné

# Partie 3: SenchaCoin - main
- Créer une autre view qui sera votre page principal (un tab panel est adapté)
- Rajouter la redirection vers cette page lorsque le formulaire est validé ( Utilisé xtype )
- Ajouter sur la page principal un graphique (utiliser chart)
- Ajouter un appel ajax pour récupérer des données sur les cryptomonnaies ( api https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=10)
- Ajouter un bouton de reload et mettez le graphique à jour à chaque clique



