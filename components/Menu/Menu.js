import { useState } from "react";
import Link from "next/link";

import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
  UilScenery,
  UilMessage,
} from "@iconscout/react-unicons";

export default function Menu(props) {
  const [hidden, setHidden] = useState(false);

  const menuData = [
    {
      title: "Главная",
      link: "/",
      exect: true,
      icon: <UilEstate className="w-7 h-7" />,
    },
    {
      title: "Навыки",
      link: "/skills",
      icon: <UilBriefcaseAlt className="w-7 h-7" />,
    },
    {
      title: "Услуги",
      link: "/service",
      icon: <UilFileAlt className="w-7 h-7" />,
    },
    {
      title: "Портфолио",
      link: "/portfolio",
      icon: <UilScenery className="w-7 h-7" />,
    },
    {
      title: "Обо мне",
      link: "/about",
      icon: <UilUser className="w-7 h-7" />,
    },
    {
      title: "Конакты",
      link: "/contact",
      icon: <UilMessage className="w-7 h-7" />,
    },
  ];
  return (
    <ul className={props.globalStyle}>
      {menuData.map(({ link, exect, icon, title }, i) => {
        return (
          <li
            className="nav__item  cursor-pointer py-3 hover:text-gray-500 active:text-gray-500 -mx-5 px-7 transition-all"
            key={i}
          >
            <Link href={link}>
              <a
                className="nav__link "
                exect={exect}
                onClick={() => {
                  setHidden(!hidden);
                }}
              >
                <div className="flex items-center content-center">
                  {!props.iconSet ? (
                    <div className=" mr-4 flex items-center">{icon}</div>
                  ) : (
                    ""
                  )}
                  <div className={props.text}>{title}</div>
                </div>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
