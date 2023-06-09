import { For } from 'solid-js';
import GeneralWave from '../../../components/wave/general-wave.component';
import { IAboutPortfolioData, IAboutPortfolioTechnologies } from '../../../data/about/about.data';
import { ITheme } from '../../../hooks/theme.hook';
import translate from '../../../hooks/translate.hook';
import './about.portfolio.desktop.css';
import './about.portfolio.movil.css';
import { A } from '@solidjs/router';

interface IAboutPortfolio {
    theme: ITheme;
    data: IAboutPortfolioData;
}

export default function AboutPortfolio(props: IAboutPortfolio){

    const renderItem = (type:string, icon:string, name:string) => {
        if(type == "img"){
            return <img src={ icon } title={name} alt={name}  />
        }
        return <i class={ icon } title={name}></i>
    }

    return (
        <div class="about-portfolio">
            <GeneralWave waveColor="black" allowTheme={false} theme={props.theme}/>
            <div class='about-portfolio-content'>
                <div class="grid-container">
                    <div class="title">
                        <h1>{translate("about-this-portfolio")}</h1>
                        <div class="underline"></div>
                    </div>
                    <div class="info">
                        <div class="description">
                            <For each={props.data.description}>
                                {(item)=>(
                                    <p>
                                        {item}
                                    </p>
                                )}
                            </For>
                        </div>
                        <div class="technologies">
                            <For each={ props.data.technologies }>
                                {(item)=>(
                                    <div class="item" title={item.name}>
                                        { renderItem(item.type, item.icon, item.name) }
                                        <p>{item.name}</p>
                                    </div>
                                )}
                            </For>
                        </div>
                    </div>
                    <div class="links">
                        <For each={props.data.links}>
                           {(item)=>(
                                <A class="link" href={item.link} target="_blank">
                                    { renderItem(item.type, item.icon, item.msg) }
                                    <p>{item.msg}</p>
                                </A>
                           )}
                        </For>
                    </div>
                </div>
            </div>
        </div>
    )
}