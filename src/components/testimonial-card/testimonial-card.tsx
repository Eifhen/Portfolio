import './testimonial-card.css';
import { For } from "solid-js";
import { ITestimonialsData } from "../../data/testimonials/testimonials.data";
import { ITheme } from "../../hooks/theme.hook";
import { A } from "@solidjs/router";






interface TestimonialCardProps {
    data: ITestimonialsData;
    theme: ITheme;
}

export default function TestimonialCard (props:TestimonialCardProps) {
    return (
        <div class={`testimonial-card ${props.theme.theme}`}>
            <div class="quote--icon">
                <i class="ri-double-quotes-r"></i>
            </div>
            <div class="testimonial-card-content">
                <div class="img"> 
                    <img src={props.data.img} alt={props.data.fullname}  />
                </div>
                <div class="title">
                    <h2>{props.data.fullname}</h2>
                    <p>{props.data.info}</p>
                </div>
                <div class="message">
                    <p>{props.data.message[0]}</p>
                </div>
                <div class="links">
                    <For each={props.data.links}>
                        {(link)=>(
                            <A class="link" target='_blank' href={link.url} title={link.title}>
                                <i class={link.icon}></i>
                            </A>
                        )}
                    </For>
                </div>
            </div>
        </div>
    )
}