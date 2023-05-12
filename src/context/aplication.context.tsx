import { Accessor, JSX, createContext, useContext } from "solid-js";
import useTheme, { ITheme, IThemeHook } from "../hooks/theme.hook";
import useLenguage, { ILenguageHook } from "../hooks/lenguage.hook";
import useScreenWidth from "../hooks/screenWidth.hook";
import { ISocialMediaData, SocialMediaData } from "../data/social-media/social-media.data";




interface IAplicationContext {

   themeManager: IThemeHook;
   lenguageManager:ILenguageHook;
   screenWidth: Accessor<number>;
   socialMedia:ISocialMediaData[];
}

interface IAplicationContextProps {
    children: JSX.Element;
}

const AplicationContext = createContext({} as IAplicationContext);

export function AplicationContextProvider(props:IAplicationContextProps){

    const themeManager = useTheme();
    const lenguageManager = useLenguage();
    const screenWidth = useScreenWidth();
    const socialMedia = SocialMediaData;

    const data: IAplicationContext = {
        themeManager,
        lenguageManager,
        screenWidth,
        socialMedia
    }

    return (
        <AplicationContext.Provider value={data}>
            {props.children}
        </AplicationContext.Provider>
    )
}


export default function useAplicationContext(){
    return useContext(AplicationContext)
}