# CAF-Remplissage
Remplissez les champs automatiquement sur le formulaire de contacte de la CAF !



https://github.com/Write/CAF-Remplissage/assets/541722/f0ccf600-3243-4a56-8d2f-df2e0f477808

# Installation

Pour installer le script, il vous faut un Gestionnaire d'userscript installé sur votre navigateur.  
Je conseil soit [ViolentMonkey](https://violentmonkey.github.io) soit [TamperMonkey](https://www.tampermonkey.net)
  
Une fois installé, cliquez simplement ici pour installer le script !  
  
Pour modifier les paramètres par défaut, il suffit d'éditer le fichier tout juste installé, accessible depuis depuis l'icône de l'extension tout juste installé en haut à gauche dans votre navigateur.

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

Puis rendez vous sur le site de la [CAF](https://connect.caf.fr/connexionappli/dist/?forceReload=20211220&contexteAppel=caffr&urlredirect=%2Fwps%2Fmyportal%2Fcaffr%2Fmoncompte%2Ftableaudebord#/login) → Connectez-vous → "Contacter ma CAF" → Envoyez un mail. Regardez la magie s'opérer sous vos yeux ! 
