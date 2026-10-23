import type { FC } from "react";

import { BriefcaseBusiness } from "lucide-react";

const verseEngineeringSkills = [
  { skill: "Python" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Flask" },
  { skill: "Apollo GraphQL" },
  { skill: "PostgreSQL" },
  { skill: "Airflow" },
  { skill: "AWS" },
  { skill: "Google Cloud Platform" },
];

const VerseSoftwareEngineerPosition: FC = () => {
  return (
    <li className='flex flex-col mb-10 ms-6'>
      <span className='absolute flex items-center justify-center w-6 h-6 text-rfg bg-rneutral ring-8 ring-rneutral rounded-full -start-3 '>
        <BriefcaseBusiness />
      </span>
      <h2 className='flex items-center mb-1 text-lg font-semibold text-rfg'>
        Software Engineer
        <span className='bg-rprimary text-rbg text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm ms-3'>
          Latest
        </span>
      </h2>
      <h3 className='block mb-2 text-md font-normal leading-none text-rfg/80'>
        Verse Medical
      </h3>
      <time className='block mb-2 text-sm font-normal leading-none text-rfg/50'>
        June 2026 - Present
      </time>
      <span className='block mb-2 text-sm font-normal leading-none text-rfg/50'>
        New York, NY · Hybrid
      </span>
      <h3 className='block my-2 text-md font-semibold leading-none text-rfg/80'>
        Tech Stack
      </h3>
      <div className='flex flex-wrap '>
        {verseEngineeringSkills.map(({ skill }) => (
          <div
            key={skill}
            className='flex px-3 bg-rtertiary my-1 mr-2 rounded-full shadow-[0_0px_2px] shadow-rtertiary transition-transform duration-150 hover:scale-[1.05] cursor-default'
          >
            <a className='text-rbg text-sm'>{skill}</a>
          </div>
        ))}
      </div>
      <h3 className='block my-2 text-md font-semibold leading-none text-rfg/80'>
        Overview
      </h3>
      <p className='mb-1 text-base font-normal text-rfg/60 gap-1'>
        I'm a full stack Software Engineer at{" "}
        <a
          href='https://www.versemedical.com/'
          className='font-semibold'
          target='_blank'
        >
          Verse Medical
        </a>
        , a Series C health-tech company building the software that connects
        providers, payors, and patients so people can receive hospital-quality
        care at home. Engineers at Verse work closely with customers and
        internal teams to define what gets built, then take it from fast
        prototype to robust production system.
      </p>
    </li>
  );
};

export default VerseSoftwareEngineerPosition;
