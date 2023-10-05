import { photographerEachIdMedia, galleryMedia } from "../Config/GetAllData.js";
import photoTemplate from "../template/photoTemplate.js";
import { VideoTemplate } from "../template/VideoTemplate.js";
import { openModalSlider } from "./SliderOpenClose.js";

/**
 * Cette fonction tri le tableau par date à l'aide du "data-order" sorts the array of objects by date, then loops through the array and adds a property
 * "data-order" sur chaque objet puis parcourt à nouveau le tableau et crée une carte photo ou vidéo pour chaque objet, puis ajoute un récepteur d'événements à chaque carte
 */
export default function sortByDate() {
	galleryMedia.innerHTML = "";                                     // Vider la galerie
	photographerEachIdMedia.sort((a, b) => {
		if (a.date < b.date) {
			return -1;
		} else if (a.date > b.date) {
			return 1;
		} else {
			return 0;
		}
	}).forEach((elem, index) => {
		elem["data-order"] = index + 1;                              // ajouter une propriété "data-order" à chaque élément
		if ("image" in elem) {
		  const photoMedia = photoTemplate(elem, index);             // passer l'index en paramètre
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
