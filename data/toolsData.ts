import { IconType } from "react-icons";
import { FaHtml5, FaGitAlt } from "react-icons/fa";
import { IoLogoCss3, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { SiRedux, SiExpress, SiPostgresql, SiMongodb } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

export interface ToolsDataProps {
  name: string;
  icon: IconType;
  color?: string;
}

export const toolsData: ToolsDataProps[] = [
  {
    name: "HTML",
    icon: FaHtml5,
    color: "#FFFF00",
  },
  {
    name: "CSS",
    icon: IoLogoCss3,
    color: "#FF00FF",
  },
  {
    name: "JavaScript",
    icon: RiJavascriptFill,
    color: "#EFD81A",
  },
  {
    name: "TypeScript",
    icon: BiLogoTypescript,
    color: "#3178C6",
  },
  {
    name: "ReactJS",
    icon: IoLogoReact,
    color: "#5ED2F3",
  },
  {
    name: "ReduxJS",
    icon: SiRedux,
    color: "#7248B6"
  },
  {
    name: "NextJS",
    icon: RiNextjsFill,
    color: "#01FFFF",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F0563B",
  },
  {
    name: "NodeJS",
    icon: IoLogoNodejs,
    color: "#FFCD34",
  },
  {
    name: "ExpressJS",
    icon: SiExpress,
    color: "#FFCD34",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#3A6C94",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#55AD48",
  },
];
