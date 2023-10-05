import { updateTotalLikes } from "../utils/totalLikes.js";

/**
 *  Fonction qui me permet d'incrémenter ou de decrement les likes de chaques photos
 * @param data - les datas qui contient les likes actuels et indique si le message est liké ou pas
 * @param likesNumber - c'est l'element qui affiche le nombre de like
 */
export default function toggleLike(data, likesNumber) {
	if (data.isLiked) {
		data.currentLikes--;
		updateTotalLikes(-1);
	} else {
		data.currentLikes++;
		updateTotalLikes(1);
	}
	data.isLiked = !data.isLiked;
	likesNumber.textContent = data.currentLikes;
}
