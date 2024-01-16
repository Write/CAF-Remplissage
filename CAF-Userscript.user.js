// ==UserScript==
// @name         CAF Userscript
// @version      0.1.0
// @author       Joffrey / @Write on Github
// @description  Autmatic filling CAF
// @match        https://*.caf.fr/wps/myportal/caffr/moncompte/contactermacaf
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
	'use strict';

	/**
	 * Config settings 
	 */
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

	const checkElement = async selector => {
		while (document.querySelector(selector) === null) {
			await new Promise(resolve => requestAnimationFrame(resolve));
		}
		return document.querySelector(selector);
	};

	/* Removing useless element(s) */
	var hotgarbage = ['#bouton_plier_deplier'];
	hotgarbage.forEach(e => {
		checkElement(e).then((selector) => {
			console.log('Removing hot garbage -- ' + e);
			selector.remove();
		});
	});

	checkElement('input#nomFamille').then((s) => {
		setTimeout(function() {
			s.focus();
			s.value = config.nom;
			s.dispatchEvent(new Event('input', { bubbles: true }));
		}, 100);
	});

	checkElement('input#nomUsage').then((s) => {
		setTimeout(function() {
			s.focus();
			s.value = config.nomUsage;
			s.dispatchEvent(new Event('input', { bubbles: true }));
		}, 150);
	});

	checkElement('input#prenom').then((s) => {
		setTimeout(function() {
			s.focus();
			s.value = config.prénom;
			s.dispatchEvent(new Event('input', { bubbles: true }));
		}, 200);
	});

	checkElement('input#email').then((s) => {
		setTimeout(function() {
			s.focus();
			s.value = config.email;
			s.dispatchEvent(new Event('input', { bubbles: true }));
		}, 250);
	});

	checkElement('input#emailConfirm').then((s) => {
		setTimeout(function() {
			s.focus();
			s.value = config.email;
			s.dispatchEvent(new Event('input', { bubbles: true }));
		}, 300);
	});

	checkElement('input#telephone').then((s) => {
		setTimeout(function() {
			s.focus();
			s.value = config.tel;
			s.dispatchEvent(new Event('input', { bubbles: true }));
		}, 350);
	});

	checkElement('input#adresse').then((s) => {
		setTimeout(function() {
			s.focus();
			s.value = config.rue;
			s.dispatchEvent(new Event('input', { bubbles: true }));
		}, 400);
	});
	
	checkElement('input#codePostalCommune').then((s) => {
		setTimeout(function() {
			s.focus();
			s.value = config.cp;
			s.dispatchEvent(new Event('input', { bubbles: true }));
		/* Simulate Enter key press */
			setTimeout(function() {    
				var keyboardEvent = new KeyboardEvent('keydown', {
					code: 'Enter',
					key: 'Enter',
					charCode: 13,
					keyCode: 13,
					view: window
				});
				s.dispatchEvent(keyboardEvent);
			}, 400);
		/* end simulate */
		}, 450);
	});

	/*
	 * Select motif du msg
	 * */
	checkElement('select#idObjetMsg').then((s) => {
		setTimeout(function() {
			s.focus();
			/* Lookup for elem containing the string */
			document.querySelector('select#idObjetMsg').querySelectorAll('option').forEach(
				function(e) {
					console.log(s)
					if (e.innerText.toLowerCase().match(config.motif.toLowerCase())) {
						s.value = e.value
					}
				}
				);
			s.dispatchEvent(new Event('change', { bubbles: true }));
		}, 900);
	});

	/*
	 * Checkbox
	 * */
	checkElement('ng-cnaf-checkbox#acceptCU button').then((s) => {
		setTimeout(function() {
			s.focus();
			s.click();
			s.dispatchEvent(new Event('change', { bubbles: true }));
		}, 1000);
	});

	/* Msg box */
	checkElement('textarea#idMessage').then((s) => {
		setTimeout(function() {
			s.focus();
			s.value = '';
			s.dispatchEvent(new Event('input', { bubbles: true }));
		}, 1000);
	});

})();