import { useState } from "react";
import Image from "next/image";
import {
    UilEstate,
    UilUser,
    UilFileAlt,
    UilBriefcaseAlt,
    UilScenery,
    UilMessage,
    UilMoon,
    UilBars,
    UilTimes
} from "@iconscout/react-unicons";

export default function Header({ name, career, avatar }) {
    const [hidden, setHidden] = useState(false);
    const menuData = [
        {
            title: "Home",
            link: "/",
            exect: true,
            icon: <UilEstate className="w-6 h-6"/>,
        },
        {
            title: "Skills",
            link: "/skills",
            icon: <UilBriefcaseAlt className="w-6 h-6"/>,
        },
        {
            title: "Service",
            link: "/service",
            icon: <UilFileAlt className="w-6 h-6" />,
        },
        {
            title: "Portfolio",
            link: "/portfolio",
            icon: <UilScenery className="w-6 h-6"/>,
        },
        {
            title: "About",
            link: "/about",
            icon: <UilUser className="w-6 h-6"/>,
        },
        {
            title: "Contactme",
            link: "/contact",
            icon: <UilMessage className="w-6 h-6"/>,
        },
    ];

    return (
        <header className="header sticky top-0 left-0 z-10 flex bg-white shadow w-full py-2 px-3">
            <div className="section__header container flex justify-between">
                <div className="flex items-center content-center ">
                    <div className="nav__logo flex">
                        <Image
                            className="nav__logo-avatar "
                            src={avatar}
                            height={40}
                            width={40}
                            alt="Your Name"
                        />
                        <div className="nav__logo-inner ml-5">
                            <div className="nav__logo-title text-xl -mb-1 font-medium">
                                {name}
                            </div>
                            <div className="nav__logo-subtitle text-sm font-normal">
                                {career}
                            </div>
                        </div>
                    </div>
                </div>
                <nav
                    className={
                        hidden
                            ? "lg:flex lg:items-center absolute lg:content-center lg:top-0 w-screen h-screen lg:left-0 bg-white lg:py-5"
                            : "flex items-center content-center absolute top-0 -left-full bg-white py-5 z-10 w-screen h-screen transition ease-in-out"
                    }
                >
                    <ul className="nav__list mt-6">
                        {menuData.map(({ link, exect, icon, title }, i) => {
                            return (
                                <li className="nav__item  cursor-pointer p-2 hover:bg-blue-100">
                                    <a
                                        to={link}
                                        className="nav__link "
                                        key={i}
                                        exect={exect}
                                        onClick={() => {
                                            setHidden(!hidden);
                                        }}
                                    >
                                    <div className="flex items-center content-center ">
                                      <div className=" mr-4 flex items-center" >{icon}</div>
                                      <div className="font-medium text-2xl">{title}</div>  
                                    </div>
                                        
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <UilTimes
                        className="w-8 h-8 absolute top-1 right-5"
                        onClick={() => {
                            setHidden(!hidden);
                        }}
                    />
                </nav>
                <div className="nav__btn flex items-center content-center cursor-pointer">
                    <div className="mr-3 hidden md:block">
                        <span className="font-medium hover:textColor-blue-400 active:textColor-green-700">
                            RU
                        </span>
                        <span> / </span>
                        <span className="font-normal hover:textColor-blue-400 active:textColor-green-700">
                            EN
                        </span>
                    </div>
                    <UilMoon className="nav__mode hover:textColor-blue-300 mr-2 " />
                    <UilBars
                        className="nav__toggle w-6 h-6"
                        onClick={() => {
                            setHidden(!hidden);
                        }}
                    />
                </div>
            </div>
        </header>
    );
}
