import { Accessor, For, Show, createEffect, createSignal } from 'solid-js';
import { IServiceData, IServicesData, ServicesData } from '../../data/services/services.data';
import { ITheme } from '../../hooks/theme.hook';
import translate from '../../hooks/translate.hook';
import './services.component.desktop.css';
import './services.component.movil.css';



interface IMyServices {
    color: ITheme;
    lenguage:string;
    width: Accessor<Number>;
}

interface IPropsService {
    data:IMyServices;
    serviceData: IServicesData;
}


export default function MyServices (props: IMyServices){
    const data:IServicesData = ServicesData;
    const [desktop, setDesktop] = createSignal<boolean>(false);

    createEffect(()=>{
        if(props.width()){
            if(Number(props.width()) >= 1120){
                setDesktop(true);
            }
            else {
                setDesktop(false);
            }
        }
    })
    
    return (
        <Show when={desktop()} fallback={<ServicesMovil serviceData={data} data={ props }/>}>
            <ServicesDesktop serviceData={data} data={ props }/>
        </Show>
    );
}


function ServicesDesktop (props:IPropsService, serviceData:IServicesData){
    return (
        <div class="services-section">
        <div class="title">
            <h1>{translate("my-services")}</h1>
        </div>
        <div class={`my-services-card ${props.data.color.theme}`}>
            <For each={ props.serviceData[props.data.lenguage] } fallback={<>error while loading the data</>}>
                {(service)=> (
                    <div class={`service ${service.color}`}>
                        <div class="header">
                            <div class="title">
                                <i class={`${service.icon}`}></i>
                                <div>
                                    <h2>{service.title}</h2>
                                    <h2>{service.subtitle}</h2>
                                </div>
                            </div>
                        </div>
                        <div class="description">
                            <p>{service.description}</p>
                        </div>
                    </div>
                )}
            </For>
        </div>
    </div>
    )
}


function ServicesMovil (props:IPropsService){

    const defaultTab = props.serviceData[props.data.lenguage].find(m=> m.state === "active");
    const def = defaultTab ? defaultTab : {} as IServiceData;
    const [selected, setSelected] = createSignal(def);

    const SelectTab = (service:IServiceData) => {
        setSelected((serv)=>{
            props.serviceData[props.data.lenguage].map( servicio => {
                servicio.state = "inactive";
                if(servicio.id === service.id){
                    servicio.state = "active";
                }
            })
            return service;
        });

        console.log("selected =>", selected().state);
        props.serviceData[props.data.lenguage].map(sd => console.log("sd =>", sd));
    }

    return (
        <div class="services-section">
            <div class="title">
                <h1>{translate("my-services")}</h1>   
            </div>
            <div class={`service-card-movil ${props.data.color.theme}`}>
                <div class="service-tabs">
                    <For each={ props.serviceData[props.data.lenguage] }>
                        {(service)=>(
                            <div onClick={ ()=> SelectTab(service) } class={`service-tab ${service.color}`}>
                                <i class={`${service.icon}`}></i>
                                <div class='info'>
                                    <h2>{service.title}</h2>
                                    <h2>{service.subtitle}</h2>
                                </div>
                            </div>
                        )}
                    </For>
                </div>
                <div class="service-tabs-content">
                    <div class={`service-tab-content ${selected().color} ${selected().state}`}>
                        <p>{selected().description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}