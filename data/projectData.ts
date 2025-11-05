import React from "react";
import { StaticImageData } from "next/image";
import { GB, CA, US, CZ } from "country-flag-icons/react/3x2";
import rhonda from "@/public/images/rhonda.png";
import wordRocket from "@/public/images/word-rocket.png";
import spontivly from "@/public/images/spontivly.png";
import zasilkovna from "@/public/images/zasilkovna.png";
import eireneCremations from "@/public/images/eirene.png";
import tattooDesignPro from "@/public/images/tattoo-design-pro.png";

export interface ProjectDataProps {
  title: string;
  link: string;
  image: StaticImageData;
  location: {
    flag: React.ComponentType<{ title?: string; className: string }>;
    label: string;
  },
  builtBy: string;
  craftedBy: string;
}

export const projectData: ProjectDataProps[] = [
  {
    title: "TattooDesignPro",
    link: "https://tattoodesignpro.com",
    image: tattooDesignPro,
    location: {
      flag: GB,
      label: "Covent Garden, London, United Kingdom"
    },
    builtBy: "Built by: Softera",
    craftedBy: "Crafted by: Polash Ahmad",
  },
  {
    title: "WordRocket",
    link: "https://wordrocket.ai",
    image: wordRocket,
    location: {
      flag: CA,
      label: "Toronto, Ontario, Canada",
    },
    builtBy: "Built by: Softera",
    craftedBy: "Crafted by: Polash Ahmad",
  },
  {
    title: "Spontivly",
    link: "https://spontivly.com",
    image: spontivly,
    location: {
      flag: US,
      label: "St Petersburg, Florida, United States",
    },
    builtBy: "Built by: Softera",
    craftedBy: "Crafted by: Polash Ahmad",
  },
  {
    title: "Eirene Cremations",
    link: "https://eirene.ca",
    image: eireneCremations,
    location: {
      flag: CA,
      label: "Regina, Saskatchewan, Canada"
    },
    builtBy: "Built by: Softera",
    craftedBy: "Crafted by: Polash Ahmad",
  },
  {
    title: "Zasilkovna",
    link: "https://www.zasilkovna.cz",
    image: zasilkovna,
    location: {
      flag: CZ,
      label: "Prague, Czech Republic",
    },
    builtBy: "Built by: Softera",
    craftedBy: "Crafted by: Polash Ahmad",
  },
  {
    title: "Rhonda.ai",
    link: "https://rhonda.ai",
    image: rhonda,
    location: {
      flag: CA,
      label: "Toronto, Ontario, Canada",
    },
    builtBy: "Built by: Softera",
    craftedBy: "Crafted by: Polash Ahmad",
  },
];
