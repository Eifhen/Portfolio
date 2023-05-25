






interface IContactData {
    icon: string;
    title: string;
    content: string[];
}

export const ContactData: IContactData[] = [
    {
        title: "Email Address",
        icon: "ri-mail-line",
        content: [ 
            "Jimenezg905@gmail.com",
            "Jimenezg905@protonmail.com" 
        ]
    },
    {
        title: "Phone Number",
        icon: "ri-phone-fill",
        content: [ `(829) 814-3523` ]
    },
   
]