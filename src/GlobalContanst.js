import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import {
    BsGithub,
    BsInstagram,
    BsLinkedin,
    BsPatchCheckFill,
    BsPhone
} from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine, RiServiceLine } from "react-icons/ri";
import { VscFolderLibrary } from "react-icons/vsc";
import PORTFOLIO_IMG2 from './assets/PORTFOLIO_PROJECT_AUTOPROFF.jpg';
import PORTFOLIO_IMG3 from './assets/PORTFOLIO_PROJECT_GEEKUP.jpg';
import PORTFOLIO_IMG1 from "./assets/PORTFOLIO_PROJECT_SCHOOL_SNEAKER_WEB.jpg";
import PORTFOLIO_IMG4 from './assets/PORTFOLIO_SCHOOL_PROJECT_MUSIC_APP.jpg';
import TESTIMONIALS_IMG2 from './assets/TESTIMONIALS_NLNT.jpg';
import TESTIMONIALS_IMG1 from './assets/TESTIMONIALS_VTHU.jpg';
import TESTIMONIALS_IMG3 from "./assets/TESTIMONIALS_QLP.jpg";
export const FirstNameInFancyStyle = "_hwang";
export const componentsId = [
  {
    id: "#",
    text: "Home",
  },
  {
    id: "#about",
    text: "About",
  },
  {
    id: "#Experience",
    text: "Experience",
  },
  {
    id: "#services",
    text: "Services",
  },
  {
    id: "#portfolio",
    text: "Portfolio",
  },
  {
    id: "#testimonials",
    text: "Testimonials",
  },
  {
    id: "#contact",
    text: "Contact",
  },
];

export const aboutArrItem = [
  {
    icon: <FaAward className="about__icon" />,
    header: "Experience",
    text: "1+ Years Working",
  },
  {
    icon: <FiUser className="about__icon" />,
    header: "Clients",
    text: "+3 from Vietnam, Denmark",
  },
  {
    icon: <VscFolderLibrary className="about__icon" />,
    header: "Projects",
    text: "5+ Completed",
  },
];

export const sendMeText = "Send a message";
export const contactArrItem = [
  {
    icon: <MdOutlineEmail className="contact__option-icon" />,
    title: "Email",
    subTitle: "tiendat.hoang192@gmail.com",
    href: "mailto:tiendat.hoang192@gmail.com",
    text: sendMeText,
  },
  {
    icon: <RiMessengerLine className="contact__option-icon" />,
    title: "Messenger",
    subTitle: "Dat Hoang",
    href: "https://m.me/dat.hoang.2000",
    text: sendMeText,
  },
  {
    icon: <BsPhone className="contact__option-icon" />,
    title: "Phone",
    subTitle: "+84 093423606",
    href: "",
    text: "I do accept calls and text",
  },
];

export const experienceArrItem = [
  {
    title: "Frontend Development",
    item: [
      {
        icon: <BsPatchCheckFill className="experience__details-icon" />,
        header: "HTML",
        level: "Junior level",
      },
      {
        icon: <BsPatchCheckFill className="experience__details-icon" />,
        header: "CSS",
        level: "Junior level",
      },
      {
        icon: <BsPatchCheckFill className="experience__details-icon" />,
        header: "Javascript",
        level: "Middle level",
      },
      {
        icon: <BsPatchCheckFill className="experience__details-icon" />,
        header: "ReactJs",
        level: "Middle level",
      },
      {
        icon: <BsPatchCheckFill className="experience__details-icon" />,
        header: "Redux",
        level: "Junior level",
      },
      {
        icon: <BsPatchCheckFill className="experience__details-icon" />,
        header: "React frameworks",
        level: "Midldle level",
      },
    ],
  },
  {
    title: "Mobile Development",
    item: [
      {
        icon: <BsPatchCheckFill className="experience__details-icon" />,
        header: "React Native",
        level: "Middle level",
      },
      {
        icon: <BsPatchCheckFill className="experience__details-icon" />,
        header: "Circle CI, XCode",
        level: "Entry level",
      },
      {
        icon: <BsPatchCheckFill className="experience__details-icon" />,
        header: "RealmDB",
        level: "Entry level",
      },
      {
        icon: <BsPatchCheckFill className="experience__details-icon" />,
        header: "React native frameworks",
        level: "Junior level",
      },
      {
        icon: <BsPatchCheckFill className="experience__details-icon" />,
        header: "Android",
        level: "Junior level",
      },
      {
        icon: <BsPatchCheckFill className="experience__details-icon" />,
        header: "IOS",
        level: "Junior level",
      },
    ],
  },
];

export const footerSocialsItems = [
  {
    href: "https://github.com/18520566",
    icon: <BsGithub />,
  },
  {
    href: "https://www.instagram.com/tdhwang_/",
    icon: <BsInstagram />,
  },
  {
    href: "https://www.linkedin.com/in/dat-hoang-119775212/",
    icon: <BsLinkedin />,
  },
];

export const copyRights = "Hoang Tien Dat. All rights reserved";

export const textHeaderTitleString = ["React", "Web", "Mobile"];

export const navItemArr = [
  { id: "#", component: <AiOutlineHome /> },
  { id: "#about", component: <AiOutlineUser /> },
  { id: "#experience", component: <BiBook /> },
  { id: "#services", component: <RiServiceLine /> },
  { id: "#contact", component: <BiMessageSquareDetail /> },
];

export const portfolioArrItem = [
    {
      img: PORTFOLIO_IMG1,
      title: "An e-commerce web app used NodesJs, SCSS, HTML and MongoDB. My very first project at university where I had learn and improve my Javascript, HTML and CSS skills",
      href: "https://github.com/ylantt/UIT.IE213.ShoeShop",
    },
    {
      img: PORTFOLIO_IMG2,
      title: "A real time car auctioning app used React Native, RealmDB, Redux, AWS services. I have been working with clients ranked top 3 in EU car auctioning industry and colleagues around EU. On site working for 1 month also.",
      href: "https://apps.apple.com/ua/app/autoproff/id705374934",
    },
    {
        img: PORTFOLIO_IMG3,
        title: "An internal web app for e-commerce purposes used ReactJs, Redux, NestJs and ReactJS frameworks. I have worked as a frontend developer intern for 2 months end finished the internship with score 8 out of 10",
        href: "https://geekup.vn/",
      },
      {
        img: PORTFOLIO_IMG4,
        title: "Based on ZingMp3, a really famous music app during our semester. We developed a live streaming music app used Java and Android Studio. Integrated with local music stream, news, and comments/favourite functionality.",
        href: "https://github.com/TaCongNguyen/musicAppJava",
      },
  ];

  export const testimonialsArrItem = [
    {
        name: "Hung Vu, Sr Consultant",
        img: TESTIMONIALS_IMG1,
        review:
          "Though started with junior experience and competency, Dat showed maturity as he adapted and grew, both professionally and interpersonally, in a highly paced and challenged environment where both IT-specific technical and communication skills were employed. Dat has always contributed to the construction of an evergrowing friendliness in his workplace. He was affable, energetic, and generous.",
      },
      {
        name: "Truong Nguyen, Sr Architect, mentor",
        img: TESTIMONIALS_IMG2,
        review:
          "This is a very long review.This is a very long review.This is a very long review.This is a very long review.This is a very longreview.This is a very long review.This is a very long review.This is a very long review.",
      },
      {
        name: "Phat Luu, Sr Test Specialist, Buddy",
        img: TESTIMONIALS_IMG3,
        review:
          "Friendly and effective communicate person. Not only bringing value to business and company, Dat also create saturated environment in his team and his project.",
      },
  ]

  export const aboutParagraphText = '  Hi and thank you for visiting. My name is Hoang Tien Dat, graduated from University of Information Technology, Viet Name National University. I am currently working for Netcompany, project Autoproff, mobile team. Specialized in React, I have experienced in Frontend development for 1 year in enterprise enviroment and 5+ years in researching environment.  With a lot of energy, I always eager to learn about technologies and want to bring value to my workplace.  Dispite my ablism, I always had my job done in the most effective, suitable and highly scalable methods. With my intelligence, free-spirited and uniqueness, I always create an effective yet friendly and humorous environment any team I go to.'