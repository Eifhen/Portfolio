import { onMount } from "solid-js";
import { Images } from "../../assets/img/images";
import ProjectCard from "../../components/card/projectcard.component";
import Galery from "../../components/galery/galery.component";
import Hobbies from "../../components/hobbies/hobbies.component";
import Logo from "../../components/logo/logo.component";
import Navbar from "../../components/navbar/navbar.component";
import MyServices from "../../components/services/services.component";
import SkillSetTab from "../../components/skills/skill.component";
import SocialMedia from "../../components/social-media/socialmedia.component";
import UserImage from "../../components/userImage/userImage.component";
import useAplicationContext from "../../context/aplication.context";
import { HobbiesData } from "../../data/hobbies/hobbies.data";
import { ProjectData } from "../../data/projects/project.data";
import { SkillsData } from "../../data/skills/skills.data";
import { SocialMediaData } from "../../data/social-media/social-media.data";
import './test.page.css';




export default function TestPage() {

    const context = useAplicationContext();
    const data = SocialMediaData;


    return (
        <div class="tradient">
            <div class="grid-container">
                
                <div class="prueba_card">
                    <div class="img_content">
                        <img src={Images.projects.growing.cover} alt="" elementtiming={""} fetchpriority={"high"} />
                    </div>
                    <div class="prueba_content">
                        <div class="info">
                            <h1>Growing Business School</h1>
                            <time>12 | 03 | 2023</time>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Reiciendis asperiores, nesciunt doloremque inventore soluta.
                            </p>
                            <div class="technologies">
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

