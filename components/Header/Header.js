import { useState } from "react";
import Image from "next/image";
import {
  UilMoon,
  UilBars,
  UilTimes,
  UilSun,
  UilDownloadAlt,
} from "@iconscout/react-unicons";
import LangState from "../LangState";
import Menu from "../Menu";

export default function Header({ name, career, avatar }) {
  const [hidden, setHidden] = useState(false);
  const [darkMode, setMode] = useState(false);



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
              <div className="nav__logo-title text-xl md:text-md lg:text-xl -mb-1 font-medium">
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
              ? "fixed top-0 left-0 w-full h-full bg-white p-4 transition-all lg:w-auto lg:gap-x-1 lg:h-auto lg:bg-none"
              : "fixed top-0 -left-full w-full h-full bg-white p-4 transition-all lg:w-auto lg:gap-x-1 lg:h-auto lg:bg-none"
          }
        >
          <div className="mt-3 px-2.5 lg:hidden">
            <LangState langOne="RU" langTwo="EN" />
          </div>
          <Menu
            text={"font-normal text-xl"}
            globalStyle={"mt-3 mb-3 nav__link"}
          />
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
        <div className="hidden md:block">
          <Menu
            text={"font-normal lg:text-xl md:text-md"}
            iconSet
            globalStyle={"flex nav__link"}
          />
        </div>
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
