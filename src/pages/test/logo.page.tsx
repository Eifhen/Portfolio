import Logo from "../../components/logo/logo.component";








import './logo-page.css';



export default function LogoPage () {


    return (
        <div class="logo-page">
            <div class="black-logo">
                <Logo white={true} />
            </div>
            <div class="white-logo">
                <Logo />
            </div>
        </div>
    )

}