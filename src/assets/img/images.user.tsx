import { IUserImagesCollector } from "./images.interface";

/***************************************
    User Images
****************************************/
import Pajon from './user/foto-pajon-transparent.png';
import Black from './user/foto-black-transparent.png';
import Elian from './user/elian_foto.jpg';
import Martinsito from './user/martin_foto.jpeg';
import DanielPimentel from './user/daniel_pimentel.webp';



export const user:IUserImagesCollector = {
    foto_pajon: Pajon,
    foto_turtle_neck: Black,
    martin_foto: Martinsito,
    elian_foto: Elian,
    daniel_pimentel_foto: DanielPimentel
}