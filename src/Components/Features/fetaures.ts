import read from '../../assets/pics/read.jpg';
import childED from '../../assets/pics/childEd.jpg';
import childEat from '../../assets/pics/childEat.jpg';

interface CarouselItemProps {
	src: string;
	altText:string;
    title:string;
	text: string;
    stats1:number;
    value1:string;
    stats2:number;
    value2:string;
}

export const items: CarouselItemProps[]=[
    {
        src:read,
        altText:"Sex Education",
        title:"Building an import duty Calculating platform",
        text:"To create an awareness on Sexual and Reproductive Health focusing on Adolescent Sexual Reproductive health and hygienic conditions",
        stats1:650000,
        value1:"Monthly users",
        stats2:5000,
        value2:"Daily calculations",
    },
    {
        src:childED,
        altText:"",
        title:"Human Rights",
        text:"Creating awareness on human rights including sexual and gender based violence/abuse.",
        stats1:650000,
        value1:"Monthly users",
        stats2:5000,
        value2:"Daily calculations",
    },
    {
        src:read,
        altText:"",
        title:"Differently Abled",
        text:"We advocate and support a society whereby children and youth with disabilities have equal rights and opportunities for growth and development.",
        stats1:650000,
        value1:"Monthly users",
        stats2:5000,
        value2:"Daily calculations",
    },
    {
        src:childEat,
        altText:"",
        title:"Children Rights",
        text:"Advocate for the fundamental children's rights and provide support for the (OVC) at the community level, promote child Education/enrollment in Malindi especially the girl child",
        stats1:650000,
        value1:"Monthly users",
        stats2:5000,
        value2:"Daily calculations",
    },

]