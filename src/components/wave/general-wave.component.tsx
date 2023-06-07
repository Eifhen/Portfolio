import Wave, { IWave } from "./wave.component";

export default function GeneralWave (props:IWave){
    return (
        <div class="general-wave" classList={{"reverse":props.reverse}}>
            <div class="t-wave">
                <Wave waveColor={props.waveColor} allowTheme={props.allowTheme} theme={props.theme} />
            </div>
            <div class="t-space"></div>
        </div>
    )
}