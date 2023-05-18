import { ImageManager } from './images.interface';

import { projects } from './images.projects';
import { designs } from './images.designs';
import { others } from './images.others';
import { tecnologies } from './images.tecnologies';
import { user } from './images.user';



export const Images:ImageManager = {
    user,
    tecnologies,
    others,
    projects,
    designs
}