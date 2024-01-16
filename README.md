# CAF-Remplissage
  
Remplissez les champs automatiquement sur le formulaire de contact de la CAF !

 
# Pourquoi ce projet ?  
 
La CAF a déjà toutes les informations nécessaires à votre propos : Et pourtant, il vous faut remplir un nombre invraisemblable d'informations pour chacun des mails que vous souhaitez leur envoyer.
Vos noms, prénoms, mais aussi numéro de téléphone et adresse ! En plus de cela si vous restez trop longtemps sur la page : Cela vous déconnecte sans sauvegarder votre message !
De mon point de vue, c'est un [dark pattern](https://fr.wikipedia.org/wiki/Dark_pattern) volontairement établi pour que les gens soient découragés.

Ce script est donc présent pour remplir automatiquement ces champs : vous n'avez plus qu'à taper votre message ! 

Vidéo du script en action

https://github.com/Write/CAF-Remplissage/assets/541722/f0ccf600-3243-4a56-8d2f-df2e0f477808

# Installation

Pour installer le script, il vous faut un Gestionnaire d'userscript installé sur votre navigateur.  
Je conseille soit [ViolentMonkey](https://violentmonkey.github.io), soit [TamperMonkey](https://www.tampermonkey.net)
  
Une fois installé, **[cliquez ici](https://github.com/Write/CAF-Remplissage/raw/main/CAF-Userscript.user.js)** pour installer le script dans le gestionnaire d'userscript.

Pour modifier les paramètres par défaut, il suffit d'éditer le fichier tout juste installé, accessible depuis l'icône de l'extension tout juste installé en haut à gauche dans votre navigateur.

	var config = 
	{ 
		"nom": "Dupont",
		"prénom": "Jean",
		"nomUsage": "",
		"email": 'caf@gmail.com',
		"tel": '0399999999',
		"rue": '1 RUE DE MACRON',
		"cp": "750001 PARIS",
		"motif": "Information sur le RSA",
	};

Mettez les informations désirées dans la configuration, et sauvegardez les modifications.

Puis rendez-vous sur le site de la [CAF](https://connect.caf.fr/connexionappli/dist/?forceReload=20211220&contexteAppel=caffr&urlredirect=%2Fwps%2Fmyportal%2Fcaffr%2Fmoncompte%2Ftableaudebord#/login) → Connectez-vous → Contacter ma CAF → Envoyer un mail. Regardez la magie s'opérer sous vos yeux ! 
