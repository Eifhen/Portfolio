import translate, { translateElement } from "./translate.hook";
import { Route, useNavigate } from "@solidjs/router";



export default function DownloadCV() {
    const resource_key= "0-qKgR9ACs5OVMLcovBmVMSw";
    const file_id = "0B3eLs4KsO9rJN2c2MXppcS1mSEE1bHpHQm83ZENqb2RELVRn";
    const downloadLink = `https://drive.google.com/uc?id=${file_id}&export=download&resourcekey=${resource_key}`;
    
    const text = translateElement("cv-disabled");
    alert(text);
}