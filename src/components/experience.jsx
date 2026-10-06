import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CodeIcon from "@mui/icons-material/Code";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { fadeDown } from "./utils/motion";

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Fondation Zakoura, Casablanca",
    date: "November 2025 - August 2026",
    icon: <WorkOutlineIcon />,
    iconBg: "#383e56",
    points: [
      "Developed and evolved React interfaces for several business modules, creating forms, data tables, filters, search, and reusable components.",
      "Managed front-end state and data with Redux Toolkit and RTK Query, including integrating and consuming REST APIs.",
      "Implemented front-end business workflows for approval, rejection, cancellation, and status tracking, keeping interactions and displayed data consistent.",
      "Contributed to the design and evolution of the database, and to the development of Laravel REST APIs.",
      "Fixed, refactored, and continuously improved the code, with attention to performance, quality, and maintainability.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "In-Ctech, Casablanca",
    date: "June 2025 - November 2025",
    icon: <CodeIcon />,
    iconBg: "#3a2f5c",
    points: [
      "Built React and Laravel features across business modules covering programs, projects, suppliers, beneficiaries, and teacher evaluations, evolving the interfaces and related business rules.",
      "Designed and evolved REST APIs, Eloquent models, and their relationships, including filtering, search, and data management.",
      "Developed program and project features, including program types, calls for projects, and related workflows.",
      "Contributed to the beneficiaries module and teacher evaluation features, integrating data on both React and Laravel.",
      "Evolved the notification system by fixing existing behavior, refactoring, and adjusting authorization rules.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Commune de Mohammedia",
    date: "April 2024 - May 2024",
    icon: <AccountBalanceIcon />,
    iconBg: "#2f3d56",
    points: [
      "Developed an inventory management application in Laravel.",
    ],
  },
];

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg, color: "#fff" }}
    icon={experience.icon}
    shadowSize="medium"
  >
    <div>
      <h3 className="text-white text-2xl font-bold">{experience.title}</h3>
      <p className="text-secondary text-base font-semibold" style={{ margin: 0 }}>
        {experience.company}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point) => (
        <li
          key={point}
          className="text-secondary text-sm pl-1 tracking-wide leading-relaxed"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

export default function Experience() {
  return (
    <motion.div
      variants={fadeDown()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="experience-timeline font-poppins px-4 py-8 lg:px-9"
    >
      <p className="text-secondary text-center uppercase tracking-[0.18em] text-sm">
        What I have done so far
      </p>
      <h3 className="text-white text-5xl font-poppins font-bold text-center mt-2">
        Work Experience.
      </h3>
      <div className="mt-16">
        <VerticalTimeline lineColor="#ffffff">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.date} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </motion.div>
  );
}
