
export interface IProjectDataManager {
    EN:IProjectData[];
    ES:IProjectData[];
    [key:string]:IProjectData[];
}

export interface IProjectData {
    id: number;
    title: string;
    img:string;
    date: string;
    highlighted:boolean;
    pin: boolean;
    description:string;
    mainTechnologies:IProjectTechnologies[];
    detail:IProjectDetail;
    [key:string]:string | Object;
}

export interface IProjectDetail {
    about: string[];
    technologies: IProjectTechnologies[];
    references: IProjectReferences[];
    galery: IProjectGalery[];
    liveInfo: IProjectLiveInfo[];
    [key:string]:string | Object;
}

export interface IProjectTechnologies {
    name:string;
    icon:string;
    type: "image" | "icon";
}

export interface IProjectReferences {
    name:string;
    title:string;
    phone:string;
    icon:string;
}

export interface IProjectLiveInfo {
    nombre:string;
    icon:string;
    link: string;
    type: 'icon' | "image";
}

export interface IProjectGalery {
    img:string | undefined; // path of the image
    page:string; // name of the page
    project: string; // name of the project
    description: string; // description of the image
    id: number;
}
