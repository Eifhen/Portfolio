import { ITheme } from '../../hooks/theme.hook';
import './wave.desktop.css';

interface IWave {
    waveColor: 'gray' | 'black' | 'white';
    theme: ITheme;
    allowTheme: boolean;
}

export default function Wave (props:IWave) {
    return (
        <div class={`wave ${props.waveColor}`} classList={{[props.theme.theme]:props.allowTheme}}>
            <svg  viewBox="0 0 1200 157" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-9 60.7618L31.4 71.4618C71.8 81.7618 152.6 103.762 233.4 
                103.462C314.2 103.762 395 81.7618 475.8 
                60.7618C556.6 39.7618 637.4 17.7618 718.2 7.46179C799 -3.23821 879.8 -3.23821 
                960.6 12.7618C1041.4 28.7618 1122.2 60.7618 1162.6 
                76.7618L1203 92.7618V156.762H1162.6C1122.2 
                156.762 1041.4 156.762 960.6 156.762C879.8 
                156.762 799 156.762 718.2 156.762C637.4 156.762 
                556.6 156.762 475.8 156.762C395 156.762 314.2 156.762 
                233.4 156.762C152.6 156.762 71.8 156.762 31.4 156.762H-9V60.7618Z" 
                />
            </svg>
        </div>
    )
}