import { For, createSignal } from 'solid-js';
import translate from '../../../../hooks/translate.hook';
import './contact.desktop.css';
import './contact.movil.css';
import axios from 'axios';
import { ContactData } from '../../../../data/contact/contact.data';



interface IConctactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
    [key:string] : string;
}

interface IContactToast {
    style: string;
    message: "toast-success-msg" | "toast-error-msg" | "";
    status: boolean;
}

export default function Contact () {
    const data = ContactData;

    const [btnState, setBtnState] = createSignal<boolean>(false);

    const [contactForm, setContactForm] = createSignal<IConctactForm>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [toast,  setToast] = createSignal<IContactToast>({
        style: "",
        message: "",
        status: false,
    });

    const handleChange = (event:any)=>{
        const { value, name } = event.target;
        setContactForm(contactForm => {
            return {...contactForm, [name]:value};
        })
    }

    const handleSubmit = (event:any) => {
        event.preventDefault();
        setBtnState(true);

        const formBoldURL = "https://formbold.com/s/35Kn8";

        if(formValidation()){
            axios.post(formBoldURL, contactForm())
            .then((res)=> {
              
                setContactForm({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                })

                handleToast("success");
                setBtnState(false);
            })
            .catch((err)=> console.error(err.request.response));
        }
        else {
            handleToast("error");
            setBtnState(false);
        }
    }

    const formValidation = () => {
        for(var key in contactForm()){
            if(!contactForm()[key]){
                return false
            }
        }
        return true;
    }

    const handleToast = (type:string) => {
        const toast_color = type === "error" ? "toast-error" : "toast-success";

        setToast({ 
            message: type === "error" ? "toast-error-msg" : "toast-success-msg", 
            style: `show ${toast_color}`, 
            status: true,
        })

        setTimeout(()=>{
            setToast({
                message: type === "error" ? "toast-error-msg" : "toast-success-msg", 
                style: `hide ${toast_color}`, 
                status: false,
            })
        }, 2000);
    }

    return (
        <div id="contact" class="contact">
            <div class="container">
                <div class="header">
                    <h2>{translate("contact-me")}</h2>
                    <h1>{translate("get-in-touch")}</h1>
                </div>
                <div class="contact-info">
                    <For each={data} fallback={<>No data</>}>
                        {(item)=>(
                            <div class='contact-item'>
                                <div class="icon">
                                    <i class={item.icon}></i>
                                </div>
                                <div class="contact-data">
                                    <For each={item.content}>
                                        {(content)=>(
                                            <h2>{content}</h2>
                                        )}
                                    </For>
                                </div>
                            </div>
                        )}
                    </For>
                </div>
                <div class="contact-form">
                    <form class="form" onSubmit={ handleSubmit }>
                        <fieldset class="form-group">
                            <input 
                                id="name"
                                name="name" 
                                type="text" 
                                placeholder={translate("form-name")} 
                                onInput={ handleChange }
                                value={contactForm().name}
                            />
                            <input
                                id="email"  
                                name="email" 
                                type="email" 
                                placeholder={translate("form-email")} 
                                onInput={ handleChange }
                                value={contactForm().email}    
                            />
                        </fieldset>
                        <fieldset class='form-group-extend'>
                            <input 
                                id="subject"
                                name="subject" 
                                type="text" 
                                placeholder={translate("form-subject")} 
                                onInput={ handleChange }
                                value={contactForm().subject}
                            />
                            
                            <textarea 
                                id="message"
                                name="message" 
                                rows="8" 
                                placeholder={translate("form-message")} 
                                maxLength={300}
                                onInput={ handleChange }
                                value={contactForm().message}    
                            />
                        </fieldset>
                        <button disabled={ btnState() } type='submit'>{translate("send-message")}</button>
                    </form>
                </div>
                <div class={`contact-form-toast ${toast().style}`}>
                    <h1>{translate(toast().message)}</h1>
                </div>
            </div>
        </div>
    )
}