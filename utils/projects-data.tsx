import adminDashboard from "../public/admin-dashboard.jpg";
import maGallery from "../public/maGallery.jpg";
import businessGO from "../public/businessGo.jpg";
import gallery from "../public/Gallery.jpg";
import whyb from "../public/whyb.jpg";
import vortex from "../public/VortexCourses.jpg";
import basics from "../public/Reacty.jpg";
import dictionary from "../public/3_dictionary.jpg";
import { StaticImageData } from "next/image";

interface projectsI {
  id: number;
  title: string;
  url: string;
  info: string;
  source: string;
  img: string | StaticImageData;
  stack: string[];
  category: string;
}

export const projectsData: projectsI[] = [
  {
    id: 1,
    title: "Ticket Panel - admin dashboard",
    url: "https://part2-tickets-admin.vercel.app",
    info: `This application is inspired in support web page i found on the internet. Logged in admins can track current tickets, change their status or make operations (filter/sort) with them. It uses next auth, either create random email + password, or use these:
  
      email: john@gmail.com password: 123456`,
    source: "https://github.com/MarroosSK/part2-tickets-admin",
    img: adminDashboard,
    stack: ["Next.Js", "Typescript", "ShadCN", "Zustand", "Axios"],
    category: "full-stack",
  },
  {
    id: 2,
    title: "MA Gallery",
    url: "https://ma-gallery.vercel.app",
    info: "Create your own personal galleries. To log in with dummy credentials type jane+clerk_test@example.com in email input and 424242 in password input.",
    source: "https://github.com/MarroosSK/ma-gallery",
    img: maGallery,
    stack: ["Next.Js", "Typescript", "ShadCN", "Zustand", "Clerk Auth"],
    category: "full-stack",
  },
  {
    id: 3,
    title: "Business GO",
    url: "https://business-listing-dusky.vercel.app",
    info: "BusinessGO is app, that allows you to search for all local businesses using Yelp API.",
    source: "https://github.com/MarroosSK/business-listing",
    img: businessGO,
    stack: ["Next.Js", "Typescript", "ShadCN", "Zustand", "Axios"],
    category: "front-end",
  },
  {
    id: 4,
    title: "First 15 Gallery",
    url: "https://8gallery.netlify.app/",
    info: "Gallery app made with typescript and redux toolkit. Purpose of this app is to allow user search for pictures and display them in modal.",
    source: "https://github.com/MarroosSK/8_gallery",
    img: gallery,
    stack: ["React.Js", "Typescript", "Material-UI", "Redux-Toolkit", "Axios"],
    category: "front-end",
  },
  {
    id: 5,
    title: "Where Have You Been? (Full-Stack)",
    url: "https://17-visit-blog.vercel.app",
    info: "Travelling blog. You can try to create your own blog. You can also search for certain blogs or filter by category.",
    source: "https://github.com/MarroosSK/17.Visit_Blog",
    img: whyb,
    stack: ["React.Js", "Typescript", "Express", "React Query", "React-Quill"],
    category: "full-stack",
  },
  {
    id: 6,
    title: "Vortex Courses",
    url: "https://16-vortex-courses.vercel.app",
    info: "Vortex courses made with typescript. Purpose of this app is to allow users to enroll course they want.",
    source: "https://github.com/MarroosSK/16_Vortex_courses",
    img: vortex,
    stack: ["React.Js", "Typescript", "Framer Motion", "Router Dom", "Axios"],
    category: "template",
  },
  {
    id: 7,
    title: "ReacTY - React Basics",
    url: "https://react-basics-chi.vercel.app",
    info: "React Basics app inspired in W3-School learning material for React. Purpose of this app is to give quick intro to people looking for learning React.",
    source: "https://github.com/MarroosSK/13_react_basics",
    img: basics,
    stack: [
      "React.Js",
      "Typescript",
      "Material-UI",
      "Router-Router-Dom",
      "React-Icons",
    ],
    category: "front-end",
  },
  {
    id: 8,
    title: "Dictionary",
    url: "https://3dictionary.netlify.app",
    info: "Find meaning of any word. Inspiration taken at react examples website. Purpose of this ap is to work as online dictionary in english language.",
    source: "https://github.com/MarroosSK/3_dictionary",
    img: dictionary,
    stack: ["React.Js", "Typescript", "Bootstrap", "ContextAPI", "React-Icons"],
    category: "front-end",
  },
];
