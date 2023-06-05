export interface IGoUpProps<T> {
    btnUpRef: T | any;
}

export default function useGoUpHook<T>(props:IGoUpProps<T>){

    const layout = document.getElementById("layout-page")
        layout?.addEventListener("scroll", ()=>{

        if(layout.scrollTop >= 550){
            props.btnUpRef.classList.add("d-flex");
        }
        else {
            props.btnUpRef.classList.remove("d-flex");
        }
    })

}