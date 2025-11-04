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
    description: `At Auxo Solutions, I build and maintain scalable web applications using Next.js, TypeScript, and Node.js. I implemented core product features, integrated backend APIs, and improved UI performance and user workflows. I collaborated with cross functional teams to ship production ready solutions and enhance platform efficiency.`
  },
  {
    company: "Eirene Cremations",
    role: "Full Stack Engineer",
    period: "Mar 2023 - Apr 2024",
    icon: "TbCircleDashedLetterE",
    link: "https://eirene.ca",
    description: `At Eirene Cremations, I focused on delivering features such as a deceased status checker and creating forms for listing deceased information. I also built internal tools to manage the entire system, create and integrated backend APIs & collaborated with the team to ensure a seamless user experience.`
  },
  {
    company: "Spontivly",
    role: "Frontend Engineer",
    period: "Jun 2022 - Feb 2023",
    icon: "TbCircleDashedLetterS",
    link: "https://spontivly.com",
    description: `At Spontivly, I developed and maintained web applications as a team member. I created a library content management system with user-friendly features and implemented a complex search filter for refining content. I also designed the UI/UX, fixed bugs, and deployed the application to production.`
  },
  {
    company: "Zination",
    role: "Frontend Engineer",
    period: "Mar 2021 - Apr 2022",
    icon: "TbCircleDashedLetterZ",
    link: "https://about.zination.com",
    description: `At Zination, I worked on the Rhonda.ai project to help companies streamline their hiring processes. I integrated the applicant screening module, built a savings tracker, implemented the “Ask Rhonda“ feature, and ensured a pixel-perfect UI/UX. Additionally, I fixed bugs and deployed the web application to production.`
  }
];
