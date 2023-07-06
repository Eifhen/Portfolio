

import { For } from 'solid-js';
import { ITheme } from '../../../../hooks/theme.hook';
import translate from '../../../../hooks/translate.hook';
import './projects.featured_projects.desktop.css';
import './projects.featured_projects.movil.css';
import Carousel, { CarouselItem } from '../../../../components/carousel/carousel.component';
import Wave from '../../../../components/wave/wave.component';
import { IProjectData } from '../../../../data/projects/project.data.interfaces';
import ProjectCard from '../../../../components/card/projectcard.component';
import { ILenguage } from '../../../../hooks/lenguage.hook';
import useProjectNameHook from '../../../../hooks/project-name.hook';



export interface IFeaturedProps {
    data: IProjectData[];
    theme: ITheme;
    lenguage: ILenguage;
    title: string;
}


export default function FeaturedProjects (props: IFeaturedProps) {
    const urlName = useProjectNameHook();
    
    const subtitle = () => {
        if(props.lenguage.lenguage == "ES"){
            return translate(props.title);
        }
        return translate("featured");
    }

    const title = () => {
        if(props.lenguage.lenguage == "ES"){
            return translate("featured");
        }
        return translate(props.title);
    }

    const sliderOptions = {
        slider_id:"slider_featured_projects", 
        perPage:3, 
        startIndex: 0,
        type:"loop",
        rewind: false,
        gap:"2rem",
        movilGap: "1.5rem",
    }

    return (
        <div class={`featured-projects ${props.theme.theme}`}>
             <div class="content">
                <div class="title">
                    <div>
                        <p>{ subtitle() }</p>
                        <h2>{ title() }</h2>
                        <div class="underline"></div>
                    </div>
                </div>
                <div class="featured-projects-carousel">
                    <Carousel options={sliderOptions}>
                        <For each={props.data} >
                            {(item)=>(
                                <CarouselItem>
                                    <ProjectCard 
                                        url={`detail/${item.id}/${urlName(item.title)}`}
                                        data={item} 
                                        type='vertical' 
                                        theme={props.theme} 
                                    />   
                                </CarouselItem>
                            )}
                        </For>
                    </Carousel>

                </div>
            </div>
        </div>
    );
}


