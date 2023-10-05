/**
 * @param data - il me permet de passer l'objet data (name, id, city, country ...)
 */
export default function photographerTemplate(data) {
	const { name, city, country, tagline, portrait, price, id } = data;

	const picture = `./assets/photographers/${portrait}`;
	const photographerPageUrl = `../html/photographer.html?id=${id}`;

	/**
	 * Création d'un nouvel élémént HTML avec ses attributs, ses Arias ...
	 * @returns l'article avec tous ses enfants
	 */
	function getUserCardDOM() {
		const article = document.createElement("article");
		article.setAttribute("aria-label", name);
		const headCard = document.createElement("a");
		headCard.href = photographerPageUrl;

		const imgPortrait = document.createElement("img");
		imgPortrait.setAttribute("src", picture);
		imgPortrait.setAttribute("alt", "nom du photographe : " + name);

		const h2Name = document.createElement("h2");
		h2Name.textContent = name;

		const townCountry = document.createElement("p");
		townCountry.textContent = `${city}, ${country}`;
		townCountry.setAttribute("aria-label", "ville: " + city + " " + "pays: " + country);
		townCountry.classList.add("photographer_city");

		const taglinePhilosophie = document.createElement("p");
		taglinePhilosophie.textContent = tagline;
		taglinePhilosophie.setAttribute("aria-label", "slogan: " + tagline);
		taglinePhilosophie.classList.add("photographer_tagline");

		const pricePerDay = document.createElement("p");
		pricePerDay.textContent = `${price}€ / jour`;
		pricePerDay.setAttribute("aria-label", "Tarif journalier en euros : " + price);
		pricePerDay.classList.add("photographer_price");

		article.appendChild(headCard);
		headCard.appendChild(imgPortrait);
		headCard.appendChild(h2Name);
		headCard.appendChild(townCountry);
		headCard.appendChild(taglinePhilosophie);
		headCard.appendChild(pricePerDay);

		return article;
	}
	return { name, city, picture, country, tagline, id, price, getUserCardDOM };
}
