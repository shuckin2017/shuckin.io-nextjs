import {
    UilEstate,
    UilUser,
    UilFileAlt,
    UilBriefcaseAlt,
    UilScenery,
    UilMessage,
} from "@iconscout/react-unicons";

export default function menuData() {
    return [
        {
            title: "Home",
            link: "/",
            exect: true,
            icon: <UilEstate />,
        },
        {
            title: "Skills",
            link: "/skills",
            icon: <UilBriefcaseAlt />,
        },
        {
            title: "Service",
            link: "/service",
            icon: <UilFileAlt />,
        },
        {
            title: "Portfolio",
            link: "/portfolio",
            icon: <UilScenery />,
        },
        {
            title: "About",
            link: "/about",
            icon: <UilUser />,
        },
        {
            title: "Contactme",
            link: "/contact",
            icon: <UilMessage />,
        },
    ];
}
