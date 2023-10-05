import Api from "./Api.js";
import getAllData from "./getAllData.js";

/**
 * Je recupere l'id du photographe, puis leur travail que je peux sélectionner
 * @returns Le travail du photographe sélectionné
 */
export default async function GetMediasFromOnePhotographers() {
	const photographerId = getAllData();
	const dataApi = new Api();
	const { media } = await dataApi.getMediasById(photographerId);  // Je récupere le travail des photographes
	const photographerEachIdMedia = media.filter((elem) => elem.photographerId == photographerId); // Je sélectionne le travail d'un photographe (celui choisi)
	console.log(photographerId);
	console.log(photographerEachIdMedia);

	return photographerEachIdMedia;
}
