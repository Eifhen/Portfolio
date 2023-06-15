
import useLenguage from './lenguage.hook';

/*
    const resource_key= "0-qKgR9ACs5OVMLcovBmVMSw";
    const file_id = "0B3eLs4KsO9rJN2c2MXppcS1mSEE1bHpHQm83ZENqb2RELVRn";
    const downloadLink = `https://drive.google.com/uc?id=${file_id}&export=download&resourcekey=${resource_key}`;
    const text = translateElement("cv-disabled");
    alert(text);
*/

export default function DownloadCV()  {
    const { lenguageStore } = useLenguage();
    const cv_ES = "https://drive.google.com/uc?id=19hCgp1MCmxUUTnYHysowK9mYhROc9RJk&export=download";
    const cv_EN = "https://drive.google.com/uc?id=1KectoIVUGv_F0c6yvkZmHNth-3M4_7yP&export=download";
    const cv = lenguageStore.lenguage == "EN" ? cv_EN : cv_ES;
    location.href = cv;
}