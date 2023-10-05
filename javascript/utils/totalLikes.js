import { photographers, photographerEachIdMedia, ID } from "../Config/GetAllData.js";

// Je filtre les photographes en fonction de l'ID
const photographerId = photographers.filter((elem) => elem.id == ID);
const getNumbersOfMedia = photographerEachIdMedia.length;

// Récupérer le nombre de likes de chaques photos
let total = photographerEachIdMedia.map((item) => {
	if (item.hasOwnProperty("likes")) {
		return item.likes;
	}
});

// Addition des phot likes
export let totalLikes = total.reduce(allPhotographeLikes);

/**
 * `allPhotographeLikes` prend deux arguments, `a` et `b`, et renvoie la somme de ces deux arguments
 * @param a - etant le 1er nombre à ajouter
 * @param b - La valeur courante traitée dans le tableau.
 * @returns la somme de toutes les valeurs du tableau
 */
export function allPhotographeLikes(a, b) {
	return a + b;
}

// Je récupére le prix journalier du photographe
export const dailyPrice = photographerId[0].price;

// Je localise ...
const allLikesNumberElement = document.getElementById("allLikesNumber");
const dailyPriceElement = document.getElementById("dailyPrice");

// Mettre à jour dans le HTML 
allLikesNumberElement.innerHTML = totalLikes;
dailyPriceElement.innerHTML = dailyPrice;

// Mise a jour du total de like une fois cliqué
export function updateTotalLikes(increment) {
  totalLikes += increment;
  allLikesNumberElement.innerHTML = totalLikes;
}



