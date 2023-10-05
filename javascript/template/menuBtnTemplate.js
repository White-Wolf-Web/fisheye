import { sortByLike } from "../utils/sortByLike.js";

export const dropdownMenu = document.getElementById("dropdown-menu");
export const dropdownButtonPopular = document.getElementById("dropdown-button-popular");
export const arrow = document.getElementById("arrow"); // chevron pour indiquer visuellement qu'il existe un dropdown

export let isMenuOpen = false;

/**
 * Si le dropdown est fermé, il l'ouvre , puis il trie par likes
 */
export function handleClick() {
	if (!isMenuOpen) {
		dropdownMenuSelect();
		isMenuOpen = true;
	} else {
		sortByLike();
	}
}

/**
 *  quand on clique sur le dropdown, le menu apparait et le chevron fait un 180 °
 */
export function dropdownMenuSelect() {
	dropdownMenu.style.display = "block";
	arrow.style.transform = "rotate(180deg)";
}

// meme chose mais en mode accessibilité avec la barre espace ou enter
dropdownButtonPopular.addEventListener("keydown", (event) => {
	if (event.key === "Enter" || event.key === " ") {
		event.preventDefault();
		dropdownMenuSelect();
	}
});

/**
 * Fonction pour fermer le menu déroulant le chevron retrouve sa position initiale
 */
export function closeMenu() {
	if (isMenuOpen) {
		dropdownMenu.style.display = "none";
		arrow.style.transform = "rotate(0deg)";
		isMenuOpen = false;
	}
}
