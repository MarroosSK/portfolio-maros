import { StaticImageData } from "next/image";
import dictionary from "../public/3_dictionary.jpg";
import gallery from "../public/Gallery.jpg";
import vortex from "../public/VortexCourses.jpg";
import adminDashboard from "../public/admin-dashboard.jpg";
import businessGO from "../public/businessGo.jpg";
import maGallery from "../public/maGallery.jpg";
import notesite from "../public/noteSite.jpg";
import furniCom from "../public/furniCom.jpg";

export interface projectsI {
  id: number;
  title: string;
  url: string;
  info: string;
  credentials_email?: string;
  credentials_password?: string;
  source: string;
  img: string | StaticImageData;
  stack: string[];
  category: string;
}

export const projectsData: projectsI[] = [
  {
    id: 1,
    title: "Furniture.COM",
    url: "https://furniture-store-sanity.vercel.app",
    info: `Store made with Next.js and Sanity CMS. Stripe payment included.`,
    credentials_email: "",
    credentials_password: "",
    source: "https://github.com/MarroosSK/furniture-store-sanity",
    img: furniCom,
    stack: ["Next.Js", "Typescript", "ShadCN", "Sanity.io"],
    category: "full-stack",
  },
  {
    id: 2,
    title: "noteSITE",
    url: "https://note-site-app.vercel.app",
    info: `This application allows you to create custom notes using bold or italic text, various headings or drag & drop method. It uses next auth, either create random email + password, or use these:`,
    credentials_email: "notesite+clerk_test@example.com",
    credentials_password: "notesite2802",
    source: "https://github.com/MarroosSK/noteSITE-app",
    img: notesite,
    stack: ["Next.Js", "Typescript", "ShadCN", "Clerk Auth"],
    category: "full-stack",
  },
  {
    id: 3,
    title: "Ticket Panel - admin dashboard",
    url: "https://part2-tickets-admin.vercel.app",
    info: `This application is inspired in support web page i found on the internet. Logged in admins can track current tickets, change their status or make operations (filter/sort) with them. It uses next auth, either create random email + password, or use these:`,
    credentials_email: "john@gmail.com",
    credentials_password: "123456",
    source: "https://github.com/MarroosSK/part2-tickets-admin",
    img: adminDashboard,
    stack: ["Next.Js", "Typescript", "ShadCN", "Zustand", "Axios"],
    category: "full-stack",
  },
  {
    id: 4,
    title: "MA Gallery",
    url: "https://ma-gallery.vercel.app",
    info: "Create your own personal galleries. User can create albums and add photos in them. Only logged in/ registered users can use this app. To log in with dummy credentials:",
    credentials_email: "magallery+clerk_test@example.com",
    credentials_password: "magallery2402",
    source: "https://github.com/MarroosSK/ma-gallery",
    img: maGallery,
    stack: ["Next.Js", "Typescript", "ShadCN", "Zustand", "Clerk Auth"],
    category: "full-stack",
  },
  {
    id: 5,
    title: "Business GO",
    url: "https://business-listing-dusky.vercel.app",
    info: "BusinessGO is app, that allows you to search for all local businesses using Yelp API.",
    credentials_email: "",
    credentials_password: "",
    source: "https://github.com/MarroosSK/business-listing",
    img: businessGO,
    stack: ["Next.Js", "Typescript", "ShadCN", "Zustand", "Axios"],
    category: "front-end",
  },
  {
    id: 6,
    title: "First 15 Gallery",
    url: "https://8gallery.netlify.app/",
    info: "Gallery app made with typescript and redux toolkit. Purpose of this app is to allow user search for pictures and display them in modal.",
    credentials_email: "",
    credentials_password: "",
    source: "https://github.com/MarroosSK/8_gallery",
    img: gallery,
    stack: ["React.Js", "Typescript", "Material-UI", "Redux-Toolkit", "Axios"],
    category: "front-end",
  },
  {
    id: 7,
    title: "Vortex Courses template",
    url: "https://16-vortex-courses.vercel.app",
    info: "Vortex courses made with typescript. Purpose of this app is to allow users to enroll course they want.",
    credentials_email: "",
    credentials_password: "",
    source: "https://github.com/MarroosSK/16_Vortex_courses",
    img: vortex,
    stack: ["React.Js", "Typescript", "Framer Motion", "Router Dom", "Axios"],
    category: "template",
  },
  {
    id: 8,
    title: "Dictionary",
    url: "https://3dictionary.netlify.app",
    info: "Find meaning of any word. Inspiration taken at react examples website. Purpose of this ap is to work as online dictionary in english language.",
    credentials_email: "",
    credentials_password: "",
    source: "https://github.com/MarroosSK/3_dictionary",
    img: dictionary,
    stack: ["React.Js", "Typescript", "Bootstrap", "ContextAPI", "React-Icons"],
    category: "front-end",
  },
];
