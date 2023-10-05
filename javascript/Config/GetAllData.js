import Api from "../api/Api.js";
import { MediaFactory } from "../factories/mediaFactory.js";
import photoTemplate from "../template/photoTemplate.js";

export const urlparam = new URLSearchParams(window.location.search);                     // URLSearchParams
export const ID = urlparam.get("id");                                                    // Jidentifie mon Id
export const dataApi = new Api();                                                        // je recupere la structure de l'appel de l'API
export const { photographers } = await dataApi.getPhotographerById(ID);                  // je recupere les données des photographes
export const photographerId = photographers.find((elem) => elem.id == ID).id;            // je selectionne un seul photographe (celui choisi)
export const photographerName = photographers.find((elem) => elem.id == ID).name;        // je recupere le nom du photographe
export const { media } = await dataApi.getMediasById(ID);                                // Je récupere le travail des photographes
export const photographerEachIdMedia = media.filter((elem) => elem.photographerId == ID);// Je sélectionne le travail d'un photographe (celui choisi)
export const galleryMedia = document.getElementById("gallery-media");                    // je localise ma gallerie de photos                              
export const slides = [...photographerEachIdMedia];                                      // Tableau avec tous les medias
export const photoImgs = document.querySelectorAll(".photograph-photoImg");              // Noeud recuperant les photos
export const recupMediaId = photographerEachIdMedia.map((item) => item.id);              // cela affiche tous les Id s des medias de l'artiste
export const getMediasDataId = document.querySelectorAll(".photograph-allMedia");        // Noeud récuperant tous les medias
export const totalMedia = getMediasDataId.length;                                        // me permet de compter le nombre d'element dans le tableau
export const indexElement = document.querySelector('.index');                            // class rajouté pour permettre de recuperer l'image cliquée
export const mediaByFactory = photographerEachIdMedia.map((data) =>	MediaFactory.createMediaFactory(data)); // idem mais via le factory
export const modalBtnSlider = document.querySelectorAll(".modal-btn-slider");            // je recupere tous les a (chaques photos) qui declenchera le slider


