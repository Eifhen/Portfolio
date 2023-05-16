
import Pajon from './foto-pajon-transparent.png';
import Black from './foto-black-transparent.png';
import ASP_ICON from '../icons/asp_icon.png';
import C_ICON from '../icons/csharp_icon.png';
import EF_ICON from '../icons/entity_framework_icon.png';
import JQUERY_ICON from "../icons/jquery_icon.png";
import SENDGRID_ICON from '../icons/sendgrid_icon.png';
import SIGNALR_ICON from '../icons/signalr_icon.png';

import Travel from '../img/travel-1.jpg';
import SQL from '../img/sqll.png';
import MySql from '../img/mysql.png';
import Figma from '../img/figma.png';
import FigmaBlack from '../img/figma-black.png';
import Canva from '../img/canva.png';
import TypeScript from '../img/typescript.png';
import JavaScript from '../img/js.png';
import Solidjs from '../img/solidjs.png';
import PHP from '../img/php.png';

/***************************************
    Growing
****************************************/
import GrowingHomePage from '../img/projects/growing/growing_home_page.png';
import GrowingEducationPage from "../img/projects/growing/growing_oferta_academica.png";
import GrowingCampusLogin from '../img/projects/growing/growing_campus_login.png';
import GrowingCampusPerfilEstudiante from "../img/projects/growing/growing_campus_perfil.png";
import GrowingCampusEstudianteHome from "../img/projects/growing/growing_campus_estudiante_home.png";
import GrowingCampusPerfilMaestro from "../img/projects/growing/growing_campus_perfil_maestro.png";
import GrowingCampusMaestroHome from "../img/projects/growing/growing_campus_maestro_home.png";
import GrowingAdminLogin from "../img/projects/growing/growing_campus_admin_login.png";

/***************************************
    Product Manager
****************************************/
import ProjectManagerHome from '../img/projects/project_manager/project_manager.home.png';
import ProjectManagerManagement from '../img/projects/project_manager/project_manager.management_page.png';
import ProjectManagerManagementModal from '../img/projects/project_manager/project_manager.management_page.modal.png';
import ProjectManagerManagementTable from '../img/projects/project_manager/project_manager.management_page.table_fill.png';
import ProjectManagerProducts from '../img/projects/project_manager/project_manager.products.page.png';
import ProjectManagerProductDetail from '../img/projects/project_manager/project_manager.product_detail.page.png';
import ProjectManagerCart from '../img/projects/project_manager/project_manager.cart.page.png';

/***************************************
    Quizzical
****************************************/
import QuizzicalHome from '../img/projects/quizzical/quizzical.home.png';
import QuizzicalTrivia from '../img/projects/quizzical/quizzical.trivia.png';
import QuizzicalTriviaCompleted from '../img/projects/quizzical/quizzical.trivia.completed.png';

/***************************************
    Tenzies
****************************************/
import TenziesHome from '../img/projects/tenzies/tenzies.home.png';
import TenziesSpanish from '../img/projects/tenzies/tenzies.spanish.png';
import TenziesPlay from '../img/projects/tenzies/tenzies.playing.png';
import TenziesCompleted from '../img/projects/tenzies/tenzies.completed.png';

interface ImageManager {
    user: IUserImagesCollector;
    tecnologies: ITecnologiesIconCollector;
    projects: IProjectImageCollector;
    others: IOtherIcons;
}

interface ITecnologiesIconCollector {
    asp_icon: string;
    c_icon: string;
    ef_icon: string;
    jquery_icon: string;
    sendgrid_icon: string;
    signalr_icon: string;
    sql_icon: string;
    mysql_icon:string;
    figma_icon: string;
    figma_black_icon: string;
    canva_icon: string;
    typescript_icon: string;
    javascript_icon: string;
    solidjs_icon: string;
    php_icon: string;

    [key:string]:string
}

interface IUserImagesCollector {
    foto_pajon: string;
    foto_turtle_neck: string;
    [key:string]:string
}

interface IProjectImageCollector {
    growing: ImageCollector;
    product_manager: ImageCollector;
    quizzical: ImageCollector;
    tenzies: ImageCollector;
}

interface IOtherIcons {
    travel_icon: string;

    [key:string]:string
}

interface ImageCollector {
    cover:string;
    img_1?:string | undefined;
    img_2?:string | undefined;
    img_3?:string | undefined;
    img_4?:string | undefined;
    img_5?:string | undefined; 
    img_6?:string | undefined;
    img_7?:string | undefined;
    img_8?:string | undefined;
    img_9?:string | undefined;
    img_10?:string | undefined;
    [key:string]:string | undefined;
}


export const Images:ImageManager = {
    user: {
        foto_pajon: Pajon,
        foto_turtle_neck: Black,
    },
    tecnologies: {
        asp_icon: ASP_ICON,
        c_icon: C_ICON,
        ef_icon: EF_ICON,
        jquery_icon: JQUERY_ICON,
        sendgrid_icon: SENDGRID_ICON,
        signalr_icon: SIGNALR_ICON,
        sql_icon: SQL,
        mysql_icon: MySql,
        figma_icon: Figma,
        figma_black_icon: FigmaBlack,
        canva_icon: Canva,
        typescript_icon: TypeScript,
        javascript_icon: JavaScript,
        solidjs_icon: Solidjs,
        php_icon: PHP,
    },
    others: {
        travel_icon: Travel,
    },
    projects: {
        growing: {
            cover: GrowingCampusLogin,
            img_1: GrowingHomePage,
            img_2: GrowingEducationPage,
            img_3: GrowingCampusLogin,
            img_4: GrowingCampusEstudianteHome,
            img_5: GrowingCampusPerfilEstudiante,
            img_6: GrowingCampusMaestroHome,
            img_7: GrowingCampusPerfilMaestro,
            img_8: GrowingAdminLogin,
        },
        product_manager: {
            cover: ProjectManagerHome,
            img_1: ProjectManagerManagement,
            img_2: ProjectManagerManagementModal,
            img_3: ProjectManagerManagementTable,
            img_4: ProjectManagerProducts,
            img_5: ProjectManagerProductDetail,
            img_6: ProjectManagerCart,
        },
        quizzical: {
            cover: QuizzicalHome,
            img_1: QuizzicalTrivia,
            img_2: QuizzicalTriviaCompleted,
        },
        tenzies: {
            cover: TenziesHome,
            img_1: TenziesSpanish,
            img_2: TenziesPlay,
            img_3: TenziesCompleted
        },
    },
    
}