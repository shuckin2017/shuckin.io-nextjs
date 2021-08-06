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
  UilTimes,
  UilSun,
  UilDownloadAlt,
} from "@iconscout/react-unicons";
import LangState from "../LangState/LangState";

export default function Header({ name, career, avatar }) {
  const [hidden, setHidden] = useState(false);
  const [darkMode, setMode] = useState(true);
  const menuData = [
    {
      title: "Home",
      link: "/",
      exect: true,
      icon: <UilEstate className="w-6 h-6" />,
    },
    {
      title: "Skills",
      link: "/skills",
      icon: <UilBriefcaseAlt className="w-6 h-6" />,
    },
    {
      title: "Service",
      link: "/service",
      icon: <UilFileAlt className="w-6 h-6" />,
    },
    {
      title: "Portfolio",
      link: "/portfolio",
      icon: <UilScenery className="w-6 h-6" />,
    },
    {
      title: "About",
      link: "/about",
      icon: <UilUser className="w-6 h-6" />,
    },
    {
      title: "Contactme",
      link: "/contact",
      icon: <UilMessage className="w-6 h-6" />,
    },
  ];

  return (
    <header className="header sticky top-0 left-0 z-10 flex bg-white shadow w-full py-2 px-3">
      <div className="section__header container flex justify-between h-auto">
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
              ? "fixed top-0  left-0 w-full h-full bg-white p-4 transition-all lg:w-auto lg:gap-x-1 lg:h-auto lg:bg-none"
              : "fixed top-0 -left-full w-full h-full bg-white p-4 transition-all lg:w-auto lg:gap-x-1 lg:h-auto lg:bg-none"
          }
        >
          <div className="mt-3 px-2.5 lg:hidden">
            <LangState langOne="RU" langTwo="EN" />
          </div>
          <ul className="nav__list mt-3 mb-3 lg:flex lg:gap-x-8 ">
            {menuData.map(({ link, exect, icon, title }, i) => {
              return (
                <li
                  className="nav__item  cursor-pointer py-3 hover:bg-gray-100 active:bg-gray-200 -mx-5 px-7"
                  key={i}
                >
                  <a
                    to={link}
                    className="nav__link "
                    exect={exect}
                    onClick={() => {
                      setHidden(!hidden);
                    }}
                  >
                    <div className="flex items-center content-center">
                      <div className=" mr-4 flex items-center">{icon}</div>
                      <div className="font-medium text-2xl">{title}</div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
          <UilTimes
            className="w-8 h-8 absolute top-3.5 right-3"
            onClick={() => {
              setHidden(!hidden);
            }}
          />
          <button
            href="/"
            className="lg:hidden flex items-center content-center px-8 py-3 rounded-full border bg-blue-700 text-white font-medium text-xl hover:bg-blue-600 active:translate-y-1 transition-all "
          >
            Resume <UilDownloadAlt className="ml-3 w-6 h-6" />
          </button>
        </nav>
        <div className="nav__btn flex items-center content-center cursor-pointer">
          <div className="mr-3 hidden md:block">
            <LangState langOne="RU" langTwo="EN" />
          </div>
          <div>
            {darkMode ? (
              <UilSun
                className="nav__mode hover:color-blue-700 mr-2 transition-all"
                onClick={() => {
                  setMode(!darkMode);
                }}
              />
            ) : (
              <UilMoon
                className="nav__mode hover:color-blue-700 mr-2 transition-all"
                onClick={() => {
                  setMode(!darkMode);
                }}
              />
            )}
          </div>
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
