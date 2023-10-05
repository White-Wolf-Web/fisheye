export default function SliderPhotoTemplate(data) {
	const { title, image, id } = data;
	const carrouselMedia = `/assets/media/${image}`;

	/**
	 * cette fonction permet de de creer une image
	 * @returns imgSliderDisplay type node element
	 */
	function createImgElement() {
		const imgSliderDisplay = document.createElement("img");
		imgSliderDisplay.classList.add("slider-img", "photograph-allMedia");
		imgSliderDisplay.setAttribute("src", carrouselMedia);
		imgSliderDisplay.setAttribute("alt", "Image du carrousel : " + title);
		imgSliderDisplay.setAttribute("data-id", id);
		imgSliderDisplay.setAttribute("type", "jpg");
		imgSliderDisplay.setAttribute("aria-labelledby", `slider-title-${id}`);
		imgSliderDisplay.setAttribute("tabindex", "0");
		imgSliderDisplay.setAttribute("aria-hidden", "true");

		const imgSliderDisplayTitle = document.createElement("h2");
		imgSliderDisplayTitle.textContent = title;
		imgSliderDisplayTitle.id = `slider-title-${id}`;

		return imgSliderDisplay;
	}

	return {
		title,
		image,
		id,

		createImgElement,
	};
}

// il me donne le template de comment chaque foto va etre disposée
