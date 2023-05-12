import { Accessor, Setter, createSignal } from "solid-js";
import { createStore } from "solid-js/store";



export interface ITheme {
    theme: string | "light" | "dark";
}

export interface IThemeHook {
    themeStore: ITheme;
    changeTheme: () => void;
}

export default function useTheme() : IThemeHook  {
    const selectedTheme = localStorage.getItem("theme");
    const defaultTheme = selectedTheme ? selectedTheme : "light";
    const [themeStore, setTheme] = createStore<ITheme>({theme:defaultTheme});

    function changeTheme() {
        setTheme("theme",(tema) => {
            const change = tema === "light" ? "dark" : "light";
            localStorage.removeItem("theme");
            localStorage.setItem("theme", change);
            return change;
        });
    }

    return {themeStore, changeTheme};
};


