import { IDesingImageCollector } from "./images.interface";


/***************************************
    Template09 - Scotiabank
****************************************/
import Template09Hero from './designs/template09/template09.hero.png';
import Template09Menu from './designs/template09/template09.menu.png';
import Template09Search from './designs/template09/template09.search.png';
import Template09Section1 from './designs/template09/template09.section_1.png';
import Template09Section2 from './designs/template09/template09.section_2.png';
import Template09Section3 from './designs/template09/template09.section_3.png';
import Template09Section4 from './designs/template09/template09.section_4.png';

/***************************************
    Template08 - Santa Cruz
****************************************/
import Template08Hero from './designs/template08/template08.hero.png';
import Template08Services from './designs/template08/template08.services.png';
import Template08Noticias from './designs/template08/template08.news_section.png';

/***************************************
    Template07 - Santa Cruz
****************************************/
import Template07Hero from './designs/template07/template07.hero.png';
import Template07Posts from './designs/template07/template07.section_1.png';
import Template07Detail from './designs/template07/template07.detail.png';
import Template07DetailContent from './designs/template07/template07.detail_2.png';
import Template07DetailFooter from './designs/template07/template07.detail.footer.png';

/***************************************
    Template06 - Blog Journey
****************************************/
import Template06Hero from './designs/template06/template06.png';
import Template06Posts from './designs/template06/template06.posts.png';
import Template06Post from './designs/template06/template06.post.png';
import Template06PostContent from './designs/template06/template06.post.content.png';

/***************************************
    Template05 - ParqueSplash
****************************************/
import Template05ParqueSplash from './designs/template05/parque_splash.png';


/***************************************
    Template04 - Minimalism Blog
****************************************/
import Template04Intro from './designs/template04/template04.intro.png';
import Template04Home from './designs/template04/template04.home.png';
import Template04RecentPosts from './designs/template04/template04.recent_posts.png';
import Template04About from './designs/template04/template04.about.png';

/***************************************
    Template03 - Pizza Page
****************************************/
import Template03 from './designs/template03/template03.png';
import Template03Footer from './designs/template03/template03_footer.png';

/***************************************
    Template02 - My Favorite City
****************************************/
import Template02 from './designs/template02/template02.png';
import Template02Options from './designs/template02/template02.section_1.png';
import Template02Section1 from './designs/template02/template02.section_2.png';
import Template02Section2 from './designs/template02/template02.section_3.png';
import Template02Section3 from './designs/template02/template02.section_4.png';

/***************************************
    Template01 
****************************************/
import Template01Hero from './designs/template01/template01.hero.png';
import Template01Sections from './designs/template01/template01.sections.png';
import Template01Footer from './designs/template01/template01.footer.png';
import Template01Contact from './designs/template01/template01.contact.png';
import Template01About from './designs/template01/template01.about.png';
import Template01AboutMisionValues from './designs/template01/template01.about.mison_vision.png';
import Template01Values from './designs/template01/tempalte01.about.values.png';

/***************************************
    Airbnb
****************************************/
import AirbnbHero from './designs/airbnb_clone/airbnb.hero.png';
import AirbnbOffers from './designs/airbnb_clone/airbnb.offers.png';


export const designs : IDesingImageCollector = {
    template09: {
        cover: Template09Hero,
        img_1: Template09Menu,
        img_2: Template09Search,
        img_3: Template09Section1,
        img_4: Template09Section2,
        img_5: Template09Section3,
        img_6: Template09Section4
    },
    template08: {
        cover: Template08Hero,
        img_1: Template08Services,
        img_2: Template08Noticias,
    },
    template07: {
        cover: Template07Hero,
        img_1: Template07Posts,
        img_2: Template07Detail,
        img_3: Template07DetailContent,
        img_4: Template07DetailFooter,
    },
    template06: {
        cover: Template06Hero,
        img_1: Template06Posts,
        img_2: Template06Post,
        img_3: Template06PostContent,
    },
    template05: {
        cover: Template05ParqueSplash,
    },
    template04: {
        cover: Template04Intro,
        img_1: Template04Home,
        img_2: Template04RecentPosts,
        img_3: Template04About
    },
    template03: {
        cover: Template03,
        img_1: Template03Footer
    },
    template02: {
        cover: Template02,
        img_1: Template02Options,
        img_2: Template02Section1,
        img_3: Template02Section2,
        img_4: Template02Section3,
    },
    template01: {
        cover: Template01Hero,
        img_1: Template01Sections,
        img_2: Template01Footer,
        img_3: Template01Contact,
        img_4: Template01About,
        img_5: Template01AboutMisionValues,
        img_6: Template01Values
    },
    airbnb_clone: {
        cover: AirbnbHero,
        img_1: AirbnbOffers
    },
}