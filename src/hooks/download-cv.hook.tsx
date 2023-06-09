import axios from "axios";












export default function DownloadCV() : string {
    const resource_key= "0-qKgR9ACs5OVMLcovBmVMSw";
    const file_id = "0B3eLs4KsO9rJN2c2MXppcS1mSEE1bHpHQm83ZENqb2RELVRn";
    const downloadLink = `https://drive.google.com/uc?id=${file_id}&export=download&resourcekey=${resource_key}`;
    return "#";
}