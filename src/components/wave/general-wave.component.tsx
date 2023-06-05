import Wave, { IWave } from "./wave.component";

export default function GeneralWave (props:IWave){
    return (
        <div class="general-wave">
            <div class="t-wave">
                <Wave waveColor={props.waveColor} allowTheme={true} theme={props.theme} />
            </div>
            <div class="t-space"></div>
        </div>
    )
}