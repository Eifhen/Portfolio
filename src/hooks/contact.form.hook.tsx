import axios from "axios";
import { Accessor, Setter, createEffect, createSignal } from "solid-js";





export interface IContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
    [key:string] : string;
}

export interface IContactToast {
    style: string;
    message: "toast-success-msg" | "toast-error-msg" | "";
    status: boolean;
}

export interface IHandleSubmit {
    event:any, 
    setBtnState:Setter<boolean>;
    contactForm:Accessor<IContactForm>;
    setContactForm:Setter<IContactForm>;
    setToast:Setter<IContactToast>;
}

export interface IUseContactForm {
    handleChange: (event:any)=> void;
    handleSubmit: (event: any)=> void;
}

interface IUseContactFormProps {
    toast:Accessor<IContactToast>;
    setToast:Setter<IContactToast>;
    btnState: Accessor<boolean>;
    setBtnState:Setter<boolean>;
    contactForm:Accessor<IContactForm>;
    setContactForm:Setter<IContactForm>;
}

export default function useContactForm(props: IUseContactFormProps){
    return {
        handleChange: (event:any)=> handleChange(event, props.setContactForm),
        handleSubmit: (event: any)=> handleSubmit({
            event, 
            setBtnState: props.setBtnState,
            contactForm: props.contactForm,
            setContactForm: props.setContactForm,
            setToast: props.setToast,
        }),
    }

}

const handleChange = (event:any, setContactForm:Setter<IContactForm>)=>{
    const { value, name } = event.target;
    setContactForm(contactForm => {
        return {...contactForm, [name]:value};
    })
}


const handleSubmit = (prop:IHandleSubmit) => {
    prop.event.preventDefault();
    prop.setBtnState(true);

    const formBoldURL = "https://formbold.com/s/35Kn8";

    if(formValidation(prop.contactForm)){
        axios.post(formBoldURL, prop.contactForm())
        .then((res)=> {
          
            prop.setContactForm({
                name: "",
                email: "",
                subject: "",
                message: ""
            })

            handleToast("success", prop.setToast);
            prop.setBtnState(false);
        })
        .catch((err)=> console.error(err.request.response));
    }
    else {
        handleToast("error", prop.setToast);
        prop.setBtnState(false);
    }
}

const formValidation = (contactForm:Accessor<IContactForm>) => {
    for(var key in contactForm()){
        if(!contactForm()[key]){
            return false
        }
    }
    return true;
}

const handleToast = (type:string, setToast:Setter<IContactToast>) => {
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