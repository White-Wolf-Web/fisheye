import toggleLike from "./likeTemplate.js";

export function VideoTemplate(data, index) {
	const { id, title, video, likes } = data;
	const Video = `/assets/media/${video}`;

	// création de la gallery de photos
	/**
	 * création de la carte Video (dans la gallery) avec son titre et ses likes
	 * @returns l'article (carte video)
	 */
	function videoTemplateCardDom() {
		const articleMedia = document.createElement("article");
		const galleryPic = document.createElement("div");

		// création de la carte
		const mediaCard = document.createElement("div");
		mediaCard.classList.add("photograph-photoCard");

		// création de la photo avec son lien vers le modal
		const mediaButton = document.createElement("a");
		mediaButton.classList.add("modal-btn-slider");
		mediaButton.setAttribute("data-index", index + 1);
		mediaButton.setAttribute("aria-label", "Afficher la vidéo " + title);
		mediaButton.setAttribute("role", "button");

		// création de la photo avec son lien vers le modal
		const videoImg = document.createElement("video");
		videoImg.classList.add("photograph-videos");
		videoImg.classList.add("photograph-allMedia");
		videoImg.setAttribute("src", Video);
		videoImg.setAttribute("type", "video/mp4");
		videoImg.setAttribute("alt", "Titre de la vidéo : " + title);
		videoImg.setAttribute("data-id", id);
		videoImg.addEventListener("click", function () {
			videoImg.classList.add("index");
		});

		// création du bas de la carte avec son nom et ses likes
		const footerCard = document.createElement("div");
		footerCard.classList.add("photograph-footerCard");

		const photoName = document.createElement("h2");
		photoName.classList.add("photograph-photoName");
		photoName.textContent = title;
		photoName.id = `photoName-${id}`;

		const divLikes = document.createElement("div");
		divLikes.classList.add("photograph-likes");
		divLikes.setAttribute("role", "button");
		divLikes.setAttribute("aria-label", "Aimer la vidéo " + title);
		divLikes.setAttribute("tabindex", "0");
		let theLikes = likes;
		data.isLiked = false;
		data.currentLikes = data.likes;
		divLikes.addEventListener("click", () => toggleLike(data, likesNumber));

		const likesNumber = document.createElement("h3");
		likesNumber.classList.add("photograph-likesNumber");
		likesNumber.textContent = likes;
		likesNumber.setAttribute("aria-label", "bouton j'aime");
		likesNumber.setAttribute("aria-label", "Nombre de 'j'aime' pour la vidéo " + title);

		const littleHeart = document.createElement("img");
		littleHeart.src = "../assets/images/myHeart.png";
		littleHeart.classList.add("photograph-littleHeart");
		littleHeart.setAttribute("alt", "Petit coeur rouge permetant de like ou disliker");

		// creation des appenchild de la gallery
		articleMedia.appendChild(galleryPic);
		galleryPic.appendChild(mediaCard);
		mediaCard.appendChild(mediaButton);
		mediaButton.appendChild(videoImg);
		mediaCard.appendChild(footerCard);
		footerCard.appendChild(photoName);
		footerCard.appendChild(divLikes);
		divLikes.appendChild(likesNumber);
		divLikes.appendChild(littleHeart);

		return articleMedia;
	}
	return {
		title,
		video,
		likes,
		id,
		videoTemplateCardDom,
	};
}
