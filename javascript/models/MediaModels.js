export default class MediaModels {
	constructor(data) {
		this._id = data.id;
		this._photographerId = data.photographerId;
		this._title = data.title;
		this._likes = data.likes;
		this._date = data.date;
		this._price = data.price;
	}
	get date() {
		return this._date;
	}
	get id() {
		return this._id;
	}
	get photographerId() {
		return this._photographerId;
	}
	get title() {
		return this._title;
	}
	get likes() {
		return this._likes;
	}
	get price() {
		return this._price;
	}
}


// la class Media est ce qui est en commun entre photoModels et VideoModels
//this.date = new Date(data.date);
