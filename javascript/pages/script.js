import Api from "../api/api.js";
import PhotographerTemplate from "../template/photographerTemplate.js";

/**
 * Je récupere les infos du photographe via l'Api et je les affiche dans la page
 * @param photographers 
 */
async function displayData(photographers) {
	const photographersSection = document.querySelector(".photographer_section");   // DOM HTML avec toutes section de chaques photographes
	photographers.forEach((photographer) => {
		const photographerModel = PhotographerTemplate(photographer);               // données de chaque photographes telles qu'elles sont dans l'Api
		const userCardDOM = photographerModel.getUserCardDOM();                     // données de chaque photographes telles qu'elles sont dans le DOM
		photographersSection.appendChild(userCardDOM);
	});
}

/**
 * Création d'une nouvelle instance que j'utilise pour récuperer les datas de l'Api 
 * et les afficher dans la page
 */
async function init() {
	const dataApi = new Api("data/photographers.json");                             // je récupere l'api simple
	const { photographers } = await dataApi.getPhotographers();                     // je recupere toutes les données des photographes via l'api

	displayData(photographers);
}

init();
