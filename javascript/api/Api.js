export default class Api {
	constructor() {
		this.url = "../data/photographers.json"; // me permet d'iniatialiser l'url
	}

	async getPhotographers() {                   // methode asynchrome pour récuperer les photographes via l'API
		const response = await fetch(this.url);
		const data = await response.json();
		return data;
	}

	async getMediasById(id) {                    // methode asynchrome pour récuperer les données ddesmédias de chaque photographe via l'API
		const response = await fetch(this.url);
		const data = await response.json();
		const photographersMedia = data.media;
		const photographerEachIdMedia = photographersMedia.filter(
			(elem) => elem.photographerId == id
		);
		return data;
	}

	// je retourne les datas de chaque photographe selon leur Id
	async getPhotographerById(id) {              // methode asynchrome pour récuperer les données de chaques photographes via l'API
		const response = await fetch(this.url);
		const data = await response.json();
		const photographersData = data.photographers;
		const photographerId = photographersData.filter((elem) => elem.id == id);
		return data;
	}
}
