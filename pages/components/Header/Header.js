import { useState } from "react";
import Image from "next/image";
import menuData from "../../data/menuData";

import {
    UilTimes,
    UilBars,
    UilDownloadAlt,
    UilMoon,
} from "@iconscout/react-unicons";

export default function Header({ name, career, avatar }) {
    const [hidden, setHidden] = useState(false);

    return (
        <header className="header fixed top-0 left-0 z-10 flex bg-white shadow  w-full">
            <div className="section__header container flex justify-between relative">
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
                        !hidden
                            ? " sm:flex sm:items-center sm:content-center sm:fixed sm:top-0 sm:w-max sm:h-max sm:left-0 bg-white md:relative md:items-center md:content-center md:py-5"
                            : " sm:flex sm:items-center sm:content-center sm:fixed sm:top-0 sm:w-max sm:h-maxbg-white md:relative md:items-center md:content-center md:py-5 sm:-left-full md"
                    }
                >
                    <ul className="nav__list grid">
                        {menuData.map(({ link, exect, icon, title }, i) => {
                            return (
                                <li className="nav__item  cursor-pointer ">
                                    <a
                                        to={link}
                                        className="nav__link "
                                        key={i}
                                        exect={exect}
                                        onClick={() => {
                                            setHidden(!hidden);
                                        }}
                                    >
                                        <div className="nav__icon">{icon}</div>
                                        {title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className="nav__btn flex items-center content-center cursor-pointer">
                    <div className="mr-3">
                        <button className="font-medium hover:textColor-blue-400">
                            RU
                        </button>
                        <span> / </span>
                        <button className="font-medium hover:textColor-blue-400">
                            EN
                        </button>
                    </div>

                    <UilMoon className="nav__mode hover:textColor-blue-300" />
                    <UilBars
                        className="nav__toggle"
                        onClick={() => {
                            setHidden(!hidden);
                        }}
                    />
                </div>
            </div>
        </header>
    );
}
