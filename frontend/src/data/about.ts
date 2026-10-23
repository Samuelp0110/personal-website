import type { LucideIcon } from "lucide-react";
import {
  MapPin,
  GraduationCap,
  BriefcaseBusiness,
  Sparkle,
} from "lucide-react";
import AboutMeGroupPhoto from "../assets/AboutMeGroupPhoto.jpg";
import aboutSoccer from "../assets/aboutSoccer.webp";
import aboutRocco from "../assets/aboutAward.jpeg";
import aboutFleco from "../assets/aboutFleco.jpg";
import aboutCooking from "../assets/aboutCooking.jpg";

export type Photo = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
};

export type Skill = {
  skill: string;
  tools: string[];
};

export type Service = {
  service: string;
};

export type CallOut = {
  main: string;
  sub: string;
};

export type Tag = {
  icon: LucideIcon;
  text: string;
};

export const photos: Photo[] = [
  {
    title: "Master's Graduation",
    imageSrc: AboutMeGroupPhoto,
    imageAlt: "Graduation Group Photo",
    description:
      "Graduated with my Master's in Computer Science alongside my peers",
  },
  {
    title: "Hive Soccer League",
    imageSrc: aboutSoccer,
    imageAlt: "Group Soccer Photo",
    description:
      "Having played soccer since I was 3, I try to stay active with local adult leagues like Hive in Hoboken, NJ",
  },
  {
    title: "Ansary Competition",
    imageSrc: aboutFleco,
    imageAlt: "Fleco Photo",
    description:
      "I participated in the Ansary Competition presenting the app Fleco, where I and my teammates won 2nd place",
  },
  {
    title: "Appreciation Award",
    imageSrc: aboutRocco,
    imageAlt: "Award Photo",
    description:
      "I am always keen to recognize those who have excelled in their area, which is why I was able to grant my friend a certificate of appreciation formally for his first year as a professor ",
  },
  {
    title: "Cooking a Lot",
    imageSrc: aboutCooking,
    imageAlt: "Shakshuka Photo",
    description:
      "I love to cook all types of food. Shown here is my attempt at Shakshuka",
  },
];

export const skills: Skill[] = [
  {
    skill: "Data Analytics",
    tools: ["Python", "Pandas", "Numpy", "Power BI", "SQL", "Excel"],
  },
  {
    skill: "System Design",
    tools: ["Lucidchart", "UML", "ER Diagrams", "AWS Architecture"],
  },
  {
    skill: "Cloud Infrastructure",
    tools: ["AWS", "Docker"],
  },
  {
    skill: "Process Automation",
    tools: ["n8n", "REST APIs"],
  },
  {
    skill: "Web Development",
    tools: ["React", "TypeScript", "TailwindCSS", "Express", "PostgreSQL"],
  },
  {
    skill: "Technical & Business Communication",
    tools: ["MS Office Suite"],
  },
];

export const services: Service[] = [
  { service: "Custom AI Agent Development" },
  { service: "Generative AI Solutions & Prototyping" },
  { service: "Data-Driven Business Analytics" },
  { service: "Strategic Growth & Technology Advisory" },
];

export const callOuts: CallOut[] = [
  { main: "4+", sub: "Years of Experience" },
  { main: "10+", sub: "Projects Completed" },
  { main: "3", sub: "Internships" },
  { main: "2", sub: "Degrees Earned" },
];

export const tags: Tag[] = [
  {
    icon: Sparkle,
    text: "IT Consultant",
  },
  {
    icon: GraduationCap,
    text: "M.S. Computer Science - B.S. Business Science",
  },
  {
    icon: MapPin,
    text: "New York City Area",
  },
  {
    icon: BriefcaseBusiness,
    text: "1+ Years of Professional Experience",
  },
];
