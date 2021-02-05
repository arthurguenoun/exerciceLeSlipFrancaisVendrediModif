/* https://www.leslipfrancais.fr/maillots-de-bain-homme-326 */


/*************************************************************************************************************************************************/
let ficheProduit = document.querySelectorAll(".ProductCard");
let prixProduit = document.querySelectorAll('.ProductCard__price');
let nomProduit = document.querySelectorAll('.ProductCard__title');
let tableau = []

function ecran(){
		//numérotation des cartes produits
	for (let i = 0; i < ficheProduit.length; i++ ) {
		if (prixProduit[i].children[0].className=='hasReduction'){
			let nom = [i] + ' nom : ' + nomProduit[i].innerText;
			let prix =  ' // prix : ' + prixProduit[i].children[0].innerText;
		//recupération des cartes visibles
		 if (ficheProduit[i].getBoundingClientRect().y > 0 && ficheProduit[i].getBoundingClientRect().y < window.innerHeight) {
			if (tableau.includes(nom + prix) !=true) {
				tableau.push(nom + prix)
				var dernier = tableau[tableau.length - 1]
		//affichage des cartes et de leurs numéros
				console.log(dernier);
			}
		}
		} else {
		let nom = [i] + ' nom : ' + nomProduit[i].innerText;
		let prix =  ' // prix : ' + prixProduit[i].innerText;
		//recupération des cartes visibles
		 if (ficheProduit[i].getBoundingClientRect().y > 0 && ficheProduit[i].getBoundingClientRect().y < window.innerHeight) {
			if (tableau.includes(nom + prix) !=true) {
				tableau.push(nom + prix)
				var dernier = tableau[tableau.length - 1]
		//affichage des cartes et de leurs numéros
				console.log(dernier);
			}
		}}
	}

}

window.addEventListener('scroll', function(){
	ecran();
})