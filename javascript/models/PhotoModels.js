import MediaModels  from "./MediaModels.js";

export default class PhotoModels extends MediaModels {
	constructor(data) {
		super(data);
		this.type = "photo";
		this.image = data.image;
	}
}

