export default function SliderVideoTemplate(data) {
	const { title, video, id } = data;
	const carrouselVideo = `/assets/media/${video}`;

	/**
	 * création de l'element Video avec ses attributs
	 * @returns l'element Video
	 */
	function carrouselVideoDom() {
		const videoSliderDisplay = document.createElement("video");
		videoSliderDisplay.classList.add("slider-video");
		videoSliderDisplay.classList.add("photograph-allMedia");
		videoSliderDisplay.setAttribute("src", carrouselVideo);
		videoSliderDisplay.setAttribute("alt", "Video du carrousel : " + title);
		videoSliderDisplay.setAttribute("data-id", id);
		videoSliderDisplay.setAttribute("type", "video/mp4");
		videoSliderDisplay.setAttribute("controls", "");
		videoSliderDisplay.setAttribute("tabindex", "0");
		videoSliderDisplay.setAttribute("aria-labelledby", `slider-title-${id}`);
		videoSliderDisplay.setAttribute("aria-hidden", "true");
		const videoSliderDisplayTitle = document.createElement("h2");
		videoSliderDisplayTitle.textContent = title;
		videoSliderDisplayTitle.id = `slider-title-${id}`;

		videoSliderDisplay.addEventListener("keydown", (e) => {
			if (e.key === " ") {
				e.preventDefault();
				if (videoSliderDisplay.paused) {
					videoSliderDisplay.play();
				} else {
					videoSliderDisplay.pause();
				}
			}
		});

		return videoSliderDisplay;
	}

	return {
		title,
		video,
		id,
		carrouselVideoDom,
	};
}
