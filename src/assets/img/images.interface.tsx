export interface ImageManager {
    user: IUserImagesCollector;
    tecnologies: ITecnologiesIconCollector;
    projects: IProjectImageCollector;
    designs: IDesingImageCollector;
    others: IOtherIcons;
    curriculumn: ICurriculumnCollector;
}

export interface ITecnologiesIconCollector {
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
    gsap_icon: string;
    webpack_icon: string;
    mongodb_icon: string,
    socket_io_icon: string,
    express_js_icon: string,
    mongoose_icon: string,
    nodejs_icon:string,
    cloudinary_icon:string,
    [key:string]:string
}

export interface IUserImagesCollector {
    foto_pajon: string;
    foto_turtle_neck: string;
    martin_foto: string;
    elian_foto: string;
    daniel_pimentel_foto: string;
    leuris_castillo_foto: string;
    [key:string]:string
}

export interface IProjectImageCollector {
    growing: ImageCollector;
    product_manager: ImageCollector;
    quizzical: ImageCollector;
    tenzies: ImageCollector;
    find_your_film: ImageCollector;
    project03: ImageCollector;
    lista_de_tareas: ImageCollector;
    camsoft03: ImageCollector;
    blackjack: ImageCollector;
    legends_and_fantasy: ImageCollector;
    color_scheme: ImageCollector;
    unit_converter: ImageCollector;
    pathstorage: ImageCollector;
    password_generator: ImageCollector;
    finanzas_personales: ImageCollector;
    writeline: ImageCollector;
    cleanAPI: ImageCollector;
}

export interface IDesingImageCollector {
    template09: ImageCollector;
    template08: ImageCollector;
    template07: ImageCollector;
    template06: ImageCollector;
    template05: ImageCollector;
    template04: ImageCollector;
    template03: ImageCollector;
    template02: ImageCollector;
    template01: ImageCollector;
    airbnb_clone: ImageCollector;

}

export interface ICurriculumnCollector {
    itla: string;
    scrimba: string;
    es6: string;
}

export interface IOtherIcons {
    travel_icon: string;
    portfolio_wallpaper:string;
    [key:string]:string
}

export interface ImageCollector {
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
    img_11?:string | undefined;
    img_12?:string | undefined;
    img_13?:string | undefined;
    img_14?:string | undefined;
    img_15?:string | undefined; 
    img_16?:string | undefined;
    [key:string]:string | undefined;
}