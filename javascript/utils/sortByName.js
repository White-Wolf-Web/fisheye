import { photographerEachIdMedia, galleryMedia } from "../Config/GetAllData.js";
import photoTemplate from "../template/photoTemplate.js";
import { VideoTemplate } from "../template/VideoTemplate.js";
import { openModalSlider } from "./SliderOpenClose.js";

/**
 *Il trie le tableau d'objets multimédias par nom, puis il parcourt le tableau et 
 *  crée un nouvel élément DOM pour chaque objet et enfin il l'ajoute  à la galerie.
 */
export async function sortByName() {
	galleryMedia.innerHTML = ""; // Vider la galerie
	photographerEachIdMedia
		.sort((a, b) => {
			if (a.title < b.title) {
				return -1;
			} else if (a.title > b.title) {
				return 1;
			} else {
				return 0;
			}
		})
		.forEach((elem, index) => {
			elem["data-order"] = index + 1;                    // ajouter une propriété "data-order" à chaque élément
			if ("image" in elem) {
				const photoMedia = photoTemplate(elem, index); // passer l'index en paramètre
				const photoMediaDom = photoMedia.photoTemplateCardDom();
				galleryMedia.appendChild(photoMediaDom);
			} else if ("video" in elem) {
				const videoMedia = VideoTemplate(elem, index);
				const videoMediaDom = videoMedia.videoTemplateCardDom();
				galleryMedia.appendChild(videoMediaDom);
			} else {
				console.log("IL Y A UN GROS BUG au niveau affichage Photo/video");
			}
		});
	const modalBtnSlider = document.querySelectorAll(".modal-btn-slider");
	modalBtnSlider.forEach((media, index) => {
		media.addEventListener("click", () => openModalSlider(media.dataset.index));
	});
}
