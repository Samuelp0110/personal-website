import type { FC } from "react";

import { BriefcaseBusiness } from "lucide-react";

const VerseOperationsAssociatePosition: FC = () => {
  return (
    <li className='flex flex-col mb-10 ms-6'>
      <span className='absolute flex items-center justify-center w-6 h-6 text-rfg bg-rneutral ring-8 ring-rneutral rounded-full -start-3 '>
        <BriefcaseBusiness />
      </span>
      <h2 className='flex items-center mb-1 text-lg font-semibold text-rfg'>
        Operations Associate
      </h2>
      <h3 className='block mb-2 text-md font-normal leading-none text-rfg/80'>
        Verse Medical
      </h3>
      <time className='block mb-2 text-sm font-normal leading-none text-rfg/50'>
        January 2026 - June 2026
      </time>
      <span className='block mb-2 text-sm font-normal leading-none text-rfg/50'>
        New York, NY · Hybrid
      </span>
      <h3 className='block my-2 text-md font-semibold leading-none text-rfg/80'>
        Overview
      </h3>
      <p className='mb-1 text-base font-normal text-rfg/60 gap-1'>
        I joined{" "}
        <a
          href='https://www.versemedical.com/'
          className='font-semibold'
          target='_blank'
        >
          Verse Medical
        </a>{" "}
        as an Operations Associate. Verse is digitizing the durable medical
        equipment ordering market, replacing the fax-based workflows doctors
        use to order catheters, wound dressings, diabetes supplies, and other
        products for patients at home.
      </p>
    </li>
  );
};

export default VerseOperationsAssociatePosition;
