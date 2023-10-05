import MediaModels  from "./MediaModels.js";

export default class VideoModels extends MediaModels {
	constructor(data) {
	  super(data);
	  this.type = "video";
	  this.video = data.video;
	}
	
  }





