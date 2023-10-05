import { photographerEachIdMedia } from "../Config/GetAllData.js";
import SliderPhotoTemplate from "../template/SliderPhotoTemplate.js";
import SliderVideoTemplate from "../template/SliderVideoTemplate.js";
import { closeModalSlider } from "./SliderOpenClose.js";
import { sliderContainer, slide, mediaName, modalCloseSlider } from "../Config/SliderData.js";

// Attributs ARIA pour le container
sliderContainer.setAttribute("role", "dialog");
sliderContainer.setAttribute("aria-labelledby", "mediaName");

// les futurs boutons next et prev que je declare maintenant , que je return pour recuperer ailleurs
let prev;
let next;

/**
 * fonction pour gerer au clavier pour les touches gauche, droite et esc
 * @param event 
 */
export function handleKeyDown(event) {
	if (event.key === "ArrowLeft" || event.key === "Left") {
		prev();
	} else if (event.key === "ArrowRight" || event.key === "Right") {
		next();
	} else if (event.key === "Escape" || event.key === "Esc") {
		closeModalSlider();
	}
}

/**
 * pemet d'ecouter ces 3 touches (gauche, droite et esc) cela enclenche ...
 */
export function addKeyboardListeners() {
	document.addEventListener("keydown", handleKeyDown);
}

/**
 * retire cette ecoute
 */
export function removeKeyboardListeners() {
	document.removeEventListener("keydown", handleKeyDown);
}

/**
 * affiche le slider photos + video
 * @param index - l'index de l'image cliquée
 * @returns prev et next
 */
export function displayPhotosModalSlider(index) {
	photographerEachIdMedia.forEach((elem) => {
		if ("image" in elem) {
			const photoMedia = SliderPhotoTemplate(elem);         // Òbjet avce les infos de la photos
			const photoMediaDom = photoMedia.createImgElement();  // la phot dans le dom
			slide.appendChild(photoMediaDom);
		} else if ("video" in elem) {
			const videoMedia = SliderVideoTemplate(elem);         // Òbjet avce les infos de la photos
			const videoMediaDom = videoMedia.carrouselVideoDom(); //
			slide.appendChild(videoMediaDom);
		} else {
			console.log("IL Y A UN GROS BUG au niveau affichage Photo/video");
		}
	});

	modalCloseSlider.addEventListener("click", closeModalSlider);

	// je definie les attributs Aria des boutons gauche et droite
	const sliderBtnLeft = document.getElementById("slider-btn-left");
	const sliderBtnRight = document.getElementById("slider-btn-right");
	sliderBtnLeft.setAttribute("tabindex", "0");
	sliderBtnRight.setAttribute("tabindex", "0");
	sliderBtnLeft.setAttribute("aria-label", "Image précédente");
	sliderBtnRight.setAttribute("aria-label", "Image suivante");

	// J'initialise les variables pour gerer l'affichage des image du slider
	let slideIndex = parseInt(index) - 1;
	let currentMediaIndex = index - 1;
	let sliderImgTitle = photographerEachIdMedia[currentMediaIndex].title;
	mediaName.textContent = sliderImgTitle;
	const sliderImgTitleLength = photographerEachIdMedia.length;
	let newMediaIndexParse = parseInt(sliderImgTitleLength);

	// j'affiche la photo en cours
	showSlide(slideIndex);

	// va me permettre de decaler d'une photo a une autre
	/**
	 * va me permettre de decaler d'une photo a une autre en la decalant à 100% de sa largeur
	 * @param n - l'index du slide que je veux montrer
	 */
	function showSlide(n) {
		slide.style.transform = `translateX(-${n * 100}%)`;
	}

	// j'initialise mon compteur à click
	let clickCount = 0;

	// Pour passer à l'image precedante
	prev = function () {
		clickCount++;
		if (slideIndex === 0) {
			slideIndex = slide.children.length - 1;
			index = newMediaIndexParse;
		} else if (clickCount === 1) {
			index -= 1;
			slideIndex--;
		} else {
			slideIndex--;
		}
		index--;
		showSlide(slideIndex);
		mediaName.textContent = photographerEachIdMedia[index].title;
	};

	// Pour passer à l'image suivante
	next = function () {
		clickCount++;
		if (slideIndex === slide.children.length - 1) {
			slideIndex = 0;
			index = -1;
		} else if (clickCount === 1) {
			slideIndex++;
			index -= 1;
		} else {
			slideIndex++;
		}
		index++;
		showSlide(slideIndex);
		mediaName.textContent = photographerEachIdMedia[index].title;
	};

	// J'ajoute des ecouteurs pour les boutons Gauche et Droite
	sliderBtnLeft.addEventListener("click", prev);
	sliderBtnRight.addEventListener("click", next);

	// j'installe un ecouteur dévenement pour utiliser le clavier (autre systeme que plus haut)
	sliderBtnLeft.addEventListener("keydown", (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			prev();
		}
	});

	sliderBtnRight.addEventListener("keydown", (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			next();
		}
	});
	// je retourne prev et Next pour les utiliser dans ma fonction handleKeyDown (en dehors ...)
	return {
		prev,
		next,
	};
}
