import household from '../../assets/pics/house.png';
import projects from '../../assets/pics/complete.png';
import teams from '../../assets/pics/partners.png';
import location from '../../assets/pics/navigation.png';
interface IFact {
    icon:string;
    number:string;
    alt:string;
    desc:string;
}
export const Listfacts:IFact[] = [
    {
        icon:household,
        number:"31+",
        alt:"Households",
        desc:"Households reached"
    },
    {
        icon:teams,
        number:"15+",
        alt:"Specialists",
        desc:"Community workers trained"
    },
    {
        icon:projects,
        number:"49+",
        alt:"Projects Delivered",
        desc:"Projects Delivered"
    },
    {
        icon:location,
        number:"10%",
        alt:"Client increase",
        desc:"Locations covered"
    }
]