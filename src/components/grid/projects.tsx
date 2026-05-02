import skillsData from '@/components/grid/skills/skills-data';
import NextImage from '@/components/next-image';
import Typography from '@/components/typography';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Section from '@/layouts/section';

import CheckIcon from '~/svg/check.svg';

type ProjectItem = {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  tasks: string[];
  technologies: ProjectTechnology[];
};

type ProjectTechnology = {
  skillId: string;
  label: string;
};

const projects: ProjectItem[] = [
  {
    id: 'refframe',
    period: '2025 - 2026',
    title: 'Refframe',
    subtitle: 'UX/UI Reference Platform',
    tasks: [
      'Built an MVP in 4 months as a pixel-perfect Figma-based web platform for UX/UI professionals.',
      'Implemented search, filtering, user authentication, and reference collection flows.',
      'Integrated email, Google, and Apple authentication with subscription payments in progress.',
    ],
    technologies: [
      { skillId: 'nextjs', label: 'Next.js' },
      { skillId: 'ts', label: 'TS' },
      { skillId: 'postgresql', label: 'SQL' },
      { skillId: 'tailwind', label: 'TW' },
      { skillId: 'figma', label: 'Figma' },
    ],
  },
  {
    id: 'art-box-tm',
    period: '2023',
    title: 'Art Box TM',
    subtitle: 'Online Store App',
    tasks: [
      'Built a multi-page online store with Next.js, TypeScript, SCSS modules, cloud infrastructure, and PostgreSQL.',
      'Completed deployment on Vercel with Supabase.',
      'Added testing with Jest and automated Postman tests.',
    ],
    technologies: [
      { skillId: 'nextjs', label: 'Next.js' },
      { skillId: 'ts', label: 'TS' },
      { skillId: 'sass', label: 'SCSS' },
      { skillId: 'postgresql', label: 'SQL' },
      { skillId: 'vercel', label: 'Vercel' },
      { skillId: 'jest', label: 'Jest' },
      { skillId: 'postman', label: 'API' },
    ],
  },
  {
    id: 'widegamut-landing',
    period: '2024',
    title: 'Widegamut Landing Page',
    subtitle: 'Pixel-Perfect Marketing Site',
    tasks: [
      'Delivered a landing page from scratch to deployment in 3 days.',
      'Implemented the design pixel-perfect from Figma under a tight delivery timeline.',
      'Added user data collection based on the startup requirements.',
    ],
    technologies: [
      { skillId: 'react', label: 'React' },
      { skillId: 'nextjs', label: 'Next.js' },
      { skillId: 'ts', label: 'TS' },
      { skillId: 'figma', label: 'Figma' },
      { skillId: 'vercel', label: 'Vercel' },
    ],
  },
];

const sideProjects: ProjectItem[] = [
  {
    id: 'nadya-besson-photography',
    period: '2024',
    title: 'Nadya Besson Photography',
    subtitle: 'Photographer Portfolio',
    tasks: [
      'Built a personal website for an Israeli photographer to promote her work.',
      'Used the project to learn Nuxt and Vue through a real portfolio use case.',
      'Created a polished visual presentation focused on photography content.',
    ],
    technologies: [
      { skillId: 'nuxt3', label: 'Nuxt' },
      { skillId: 'vue', label: 'Vue' },
      { skillId: 'ts', label: 'TS' },
      { skillId: 'sass', label: 'SCSS' },
      { skillId: 'figma', label: 'Figma' },
    ],
  },
  {
    id: 'devrel-hackathon',
    period: '2022',
    title: 'DevRel Hackathon App',
    subtitle: 'GitHub Data Tooling',
    tasks: [
      'Implemented frontend and backend-for-frontend in 4 days during a developer hackathon.',
      'Built a multi-page website with tools to find and scan data on GitHub users and repos.',
      'Helped the team place 6th out of 32 teams.',
    ],
    technologies: [
      { skillId: 'react', label: 'React' },
      { skillId: 'ts', label: 'TS' },
      { skillId: 'nodejs', label: 'Node' },
      { skillId: 'github', label: 'GitHub' },
      { skillId: 'restapi', label: 'REST' },
    ],
  },
  {
    id: 'hackwagon-hackathon',
    period: '2022',
    title: 'HackWagon Hackathon App',
    subtitle: 'Multi-Form Frontend',
    tasks: [
      'Implemented the frontend in 3 days during a hackathon.',
      'Built a web page with 16 forms that sent collected data to the backend.',
      'Used React, TypeScript, and REST API integration while the team placed 8th out of 48 teams.',
    ],
    technologies: [
      { skillId: 'react', label: 'React' },
      { skillId: 'ts', label: 'TS' },
      { skillId: 'restapi', label: 'REST' },
      { skillId: 'html', label: 'HTML' },
      { skillId: 'css', label: 'CSS' },
    ],
  },
];

function getTechnologySkill(skillId: string) {
  return skillsData.find((skill) => skill.id === skillId);
}

function ProjectAccordion({ items }: Readonly<{ items: ProjectItem[] }>) {
  return (
    <Accordion type='single' collapsible className='flex flex-col gap-y-3'>
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>
            <div className='flex items-center gap-x-6 '>
              <Typography className='w-min min-[430px]:w-max'>
                {item.period}
              </Typography>

              <div className='flex flex-col items-start '>
                <Typography variant='h3'>{item.title}</Typography>
                <Typography
                  size='sm'
                  className='text-[#60656E] dark:text-[#D5D5D5]'
                >
                  {item.subtitle}
                </Typography>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Typography variant='h4' size='sm'>
              Achievements/Tasks
            </Typography>
            <ul className='flex flex-col gap-y-2.5'>
              {item.tasks.map((task) => (
                <li key={task} className='flex gap-x-4'>
                  <CheckIcon className='w-[18px] h-[18px] shrink-0 fill-[#29303E] dark:fill-white' />
                  <Typography>{task}</Typography>
                </li>
              ))}
            </ul>
            <ProjectTechnologies technologies={item.technologies} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function ProjectTechnologies({
  technologies,
}: Readonly<{ technologies: ProjectTechnology[] }>) {
  const orderedTechnologies = [...technologies].sort(
    (a, b) => b.label.length - a.label.length,
  );

  return (
    <div className='mt-5 flex flex-col gap-y-4'>
      <Typography variant='h4' size='sm'>
        Technologies
      </Typography>

      <ul className='flex flex-wrap gap-2.5'>
        {orderedTechnologies.map((technology) => {
          const skill = getTechnologySkill(technology.skillId);

          if (!skill) {
            return null;
          }

          return (
            <li
              key={`${technology.skillId}-${technology.label}`}
              className='flex h-8 max-w-max rounded-xl p-px shadow-[8px_9px_8px_-6px_#A6B4C8D9,-5px_-5px_20px_0px_#FFFFFF87] dark:shadow-[8px_9px_8px_-6px_#23282DCC,-3px_-3px_6px_0px_#48535C59]'
            >
              <div className='flex h-full w-full items-center justify-center gap-1 rounded-[11px] bg-[linear-gradient(134.17deg,#EEF0F5_4.98%,#E6E9EF_94.88%)] px-3 py-1.5 dark:bg-[linear-gradient(134.17deg,#3F4850_4.98%,#363E46_94.88%)]'>
                <NextImage
                  className='h-[19px] w-[19px] rounded-full overflow-hidden'
                  src={skill.src}
                  alt=''
                  width={19}
                  height={19}
                  unoptimized
                />
                <Typography
                  size='sm'
                  className='text-center font-normal leading-5'
                >
                  {technology.label}
                </Typography>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <ScrollArea className='projects bg-section shadow-section-inner dark:bg-section-inner-dark dark:shadow-section-inner-dark rounded-xl'>
      <Section id='projects' className='flex flex-col gap-y-4 px-4 pt-3.5 pb-5'>
        <Typography isThemeRevert variant='h2' size='sm' className='ml-1'>
          Projects
        </Typography>

        <Tabs defaultValue='projects'>
          <TabsList>
            <TabsTrigger value='projects'>Projects</TabsTrigger>
            <TabsTrigger value='side-projects'>Side Projects</TabsTrigger>
          </TabsList>
          <TabsContent value='projects'>
            <ProjectAccordion items={projects} />
          </TabsContent>
          <TabsContent value='side-projects'>
            <ProjectAccordion items={sideProjects} />
          </TabsContent>
        </Tabs>
      </Section>
    </ScrollArea>
  );
}
