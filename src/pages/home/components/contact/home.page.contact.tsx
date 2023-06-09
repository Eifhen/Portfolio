import { For, createEffect, createSignal } from 'solid-js';
import translate from '../../../../hooks/translate.hook';
import './contact.desktop.css';
import './contact.movil.css';
import { ContactData } from '../../../../data/contact/contact.data';
import useContactForm, { IContactForm, IContactToast } from '../../../../hooks/contact.form.hook';


export default function Contact () {
    const data = ContactData;

    const [btnState, setBtnState] = createSignal<boolean>(false);

    const [contactForm, setContactForm] = createSignal<IContactForm>({
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

    const { handleSubmit, handleChange } = useContactForm({
        btnState,
        setBtnState,
        contactForm,
        setContactForm,
        toast,
        setToast
    });

    return (
        <div id="contact" class="contact">
            <div class="container">
                <div class="header">
                    <h2>{translate("lets-start-a-project")}</h2>
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