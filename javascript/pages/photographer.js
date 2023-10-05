import photoTemplate from "../template/photoTemplate.js";
import { openModalSlider } from "../utils/SliderOpenClose.js";
import { modalBtn, displayModal } from "../utils/ModalContactForm.js";
import sortByDate from "../utils/sortByDate.js";
import { sortByName } from "../utils/sortByName.js";
import photographerMediaCreateDom from "../Config/photographerMediaCreateDom.js";
import { allPhotographeLikes } from "../utils/totalLikes.js";
import photographerCreateDom from "../utils/photographerCreateDom.js";
import { handleClick, closeMenu } from "../template/menuBtnTemplate.js";

/********************** Récupération des données pour les photographes ************************************/

photographerCreateDom();

/********************** enclenche le modal de contact ************************************/

modalBtn.addEventListener("click", displayModal);

/********************** BOUTON DE TRI ************************************/

// Tri des photos par nb de coeur du - au +
const dropdownMenu = document.getElementById("dropdown-menu");

// Tri des photos par nb de coeur du - au +
const dropdownButtonPopular = document.getElementById("dropdown-button-popular");
dropdownButtonPopular.addEventListener("click", handleClick);
let lastKeyPressTime = 0;              // je declare un compteur initialisé à 0
const DOUBLE_CLICK_DELAY = 300;        // en millisecondes

// pour l'accessibilité du bouton tri
dropdownButtonPopular.addEventListener("keydown", (event) => {
	if (event.key === "Enter" || event.key === " ") {
		event.preventDefault();

		const currentTime = new Date().getTime();               // va me permettre avec un double "enter" de fermer le dropdown
		if (currentTime - lastKeyPressTime < DOUBLE_CLICK_DELAY) {
			closeMenu();
		} else {
			handleClick();
		}
		lastKeyPressTime = currentTime;
	}
});

dropdownButtonPopular.addEventListener("dblclick", closeMenu);

// Tri des photos par date du + ancien au + recent (accesssibilité)
const dropdownButtonDate = document.getElementById("dropdown-button-date");
dropdownButtonDate.addEventListener("click", sortByDate);
dropdownButtonDate.addEventListener("keydown", (event) => {
	if (event.key === "Enter" || event.key === " ") {
		event.preventDefault();
		sortByDate();
	}
});

// Tri des photos par ordre alphabétique (accesssibilité)
const dropdownButtonTitle = document.getElementById("dropdown-button-title");
dropdownButtonTitle.addEventListener("click", sortByName);
dropdownButtonTitle.addEventListener("keydown", (event) => {
	if (event.key === "Enter" || event.key === " ") {
		event.preventDefault();
		sortByName();
	}
});

/********************** Appel de la fonction Gallery photo ************************************/

photographerMediaCreateDom();

/********************** Ouverture du modal / Slider ************************************/

// va me permettre d'avoir au clique, limage qui correspond a celle que j'ai cliqué
const modalBtnSlider = document.querySelectorAll(".modal-btn-slider");

modalBtnSlider.forEach((media, index) => {
    media.setAttribute("tabindex", "0");
    media.addEventListener("click", () => openModalSlider(media.dataset.index));
    media.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openModalSlider(media.dataset.index);
        }
    });
});


/********************** Gere tous les Likes en bas de page ************************************/

allPhotographeLikes();
