import {
    UilEstate,
    UilUser,
    UilFileAlt,
    UilBriefcaseAlt,
    UilScenery,
    UilMessage,
  } from '@iconscout/react-unicons'

const menuList = [
    {
      title: 'Home',
      link: '/',
      exect: true,
      icon: <UilEstate />
    },
    {
      title: 'Skills',
      link: '/skills',
      icon: <UilBriefcaseAlt />
    },
    {
      title: 'Service',
      link: '/service',
      icon: <UilFileAlt />
    },
    {
      title: 'Portfolio',
      link: '/portfolio',
      icon: <UilScenery />
    },
    {
      title: 'About',
      link: '/about',
      icon: <UilUser />
    },
    {
      title: 'Contactme',
      link: '/contact',
      icon: <UilMessage />
    }
  ]

export default menuList;