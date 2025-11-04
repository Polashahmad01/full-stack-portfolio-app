export interface ExperienceDataProps {
  company: string;
  role: string;
  period: string;
  icon: string;
  link: string;
  description: string;
}

export const experienceData: ExperienceDataProps[] = [
  {
    company: "Auxo Solutions",
    role: "Full Stack Engineer",
    period: "Nov 2024 - Nov 2025",
    icon: "TbCircleDashedLetterA",
    link: "https://auxosolutions.com",
    description: `With Auxo Solutions, I build scalable web apps using Next.js, TypeScript, and Node.js. I develop key product features, integrate backend APIs, and optimize UI performance to improve user experience. I work closely with cross functional teams to deliver production ready solutions and boost platform efficiency.`
  },
  {
    company: "Eirene Cremations",
    role: "Full Stack Engineer",
    period: "Mar 2023 - Apr 2024",
    icon: "TbCircleDashedLetterE",
    link: "https://eirene.ca",
    description: `At Eirene Cremations, built key features including a deceased status checker and data entry forms for managing deceased information. Developed internal tools and integrated backend APIs to ensure a seamless user experience. Also optimized workflows to support operational efficiency.`
  },
  {
    company: "Spontivly",
    role: "Frontend Engineer",
    period: "Jun 2022 - Feb 2023",
    icon: "TbCircleDashedLetterS",
    link: "https://spontivly.com",
    description: `During my time at Spontivly, developed and maintained web applications as part of the engineering team. Built a user-friendly library content management system and implemented advanced search filtering for precise content discovery. Designed UI/UX, resolved bugs, and deployed the application to production.`
  },
  {
    company: "Zination",
    role: "Frontend Engineer",
    period: "Mar 2021 - Apr 2022",
    icon: "TbCircleDashedLetterZ",
    link: "https://about.zination.com",
    description: `While working at Zination, contributed to the Rhonda.ai platform to streamline hiring workflows. Integrated the applicant screening module, built a savings tracker, and implemented the “Ask Rhonda” feature with a pixel-perfect UI/UX. Also resolved bugs and deployed the application to production.`
  }
];
