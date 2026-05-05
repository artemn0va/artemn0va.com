import TechnologyTags from '@/components/grid/technology-tags';
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
  owner?: {
    name: string;
    avatarSrc: string;
  };
};

type ProjectTechnology = {
  skillId: string;
  label: string;
};

const projects: ProjectItem[] = [
  {
    id: 'mdb-studio',
    period: '2026',
    title: 'MDB Studio',
    subtitle: 'Design Studio Landing Page',
    tasks: [
      'Built a premium one-page studio website with bold typography, motion, and a polished dark visual direction.',
      'Structured the landing experience around startup positioning, client credibility, and a direct lead capture flow.',
      'Delivered a high-conversion marketing page that presents identity, web, and product design services as a focused premium offer.',
    ],
    technologies: [
      { skillId: 'nextjs', label: 'Next.js' },
      { skillId: 'ts', label: 'TS' },
      { skillId: 'tailwind', label: 'TW' },
      { skillId: 'figma', label: 'Figma' },
      { skillId: 'vercel', label: 'Vercel' },
    ],
  },
  {
    id: 'refframe-landing',
    period: '2025',
    title: 'Refframe Landing',
    subtitle: 'Product Marketing Website',
    tasks: [
      'Built a landing page for Refframe, a reference platform for web designers focused on speed, clarity, and conversion.',
      'Presented the product in English through clear messaging around AI tagging, boards, imports, and element-level filtering.',
      'Structured the page to explain the workflow benefits, pricing, and product value for designers who work with large reference libraries.',
    ],
    technologies: [
      { skillId: 'nextjs', label: 'Next.js' },
      { skillId: 'ts', label: 'TS' },
      { skillId: 'tailwind', label: 'TW' },
      { skillId: 'figma', label: 'Figma' },
      { skillId: 'vercel', label: 'Vercel' },
    ],
  },
  {
    id: 'refframe',
    period: '2025',
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
    id: 'widegamut-landing',
    period: '2024',
    title: 'Widegamut Landing',
    subtitle: 'Product Marketing Website',
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
  {
    id: 'widegamut',
    period: '2024',
    title: 'Widegamut',
    subtitle: 'Filmmaker Portfolio Platform',
    tasks: [
      'Built a portfolio platform made by filmmakers for filmmakers, centered on showcasing work in stunning detail.',
      'Implemented community-driven discovery flows for inspiration, exposure, and connection with industry professionals.',
      'Shaped core product areas including waitlist onboarding, shared collections, and creator-focused plan presentation.',
    ],
    technologies: [
      { skillId: 'react', label: 'React' },
      { skillId: 'nextjs', label: 'Next.js' },
      { skillId: 'ts', label: 'TS' },
      { skillId: 'tailwind', label: 'TW' },
      { skillId: 'figma', label: 'Figma' },
    ],
  },
];

const sideProjects: ProjectItem[] = [
  {
    id: 'artemn0va-com',
    period: '2026',
    title: 'artemn0va.com',
    subtitle: 'Personal Portfolio Website',
    tasks: [
      'Built a personal portfolio website to present projects, experience, and interactive frontend work in a single polished space.',
      'Structured the homepage as a responsive content grid with custom sections for case studies, contact flows, and live showcases.',
      'Continuously refine the site as an evolving product and a public representation of design and frontend engineering standards.',
    ],
    technologies: [
      { skillId: 'nextjs', label: 'Next.js' },
      { skillId: 'ts', label: 'TS' },
      { skillId: 'tailwind', label: 'TW' },
      { skillId: 'figma', label: 'Figma' },
      { skillId: 'vercel', label: 'Vercel' },
    ],
  },
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
    id: 'ultracube-store',
    period: '2024',
    title: 'Ultracube Store',
    subtitle: 'Speed Cube Retail Platform',
    tasks: [
      'Built an online store for Rubik’s cubes and puzzles focused on clear product browsing and a smooth shopping experience.',
      'Implemented core storefront flows, product data integration, and client-side navigation across the shopping journey.',
      'Delivered a polished interface with strong visual consistency and interaction details across the storefront.',
    ],
    technologies: [
      { skillId: 'vue', label: 'Vue' },
      { skillId: 'ts', label: 'TS' },
      { skillId: 'sass', label: 'SCSS' },
      { skillId: 'restapi', label: 'REST' },
      { skillId: 'figma', label: 'Figma' },
    ],
  },
  {
    id: 'art-box-tm',
    period: '2023',
    title: 'Art Box Shop',
    subtitle: 'DIY Art & Craft Marketplace',
    tasks: [
      'Built a multi-page online store focused on clear product browsing and a smooth customer journey.',
      'Implemented core storefront flows, backend integration, and production deployment for a complete purchase experience.',
      'Added automated testing to improve reliability and support long-term product development.',
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
    id: 'pydew-valley',
    period: '2022',
    title: 'Pydew Valley',
    subtitle: 'Stardew-Inspired Farming Game',
    tasks: [
      'Built a Stardew Valley-style game in Python with farming, foraging, and a merchant-driven gameplay loop that has reached 38 GitHub stars.',
      'Implemented ambient world systems including weather effects and day-to-night progression to make the game feel more alive.',
      'The project was later taken forward as a student base for continuing work on AI simulation game tools in a Swedish university group project.',
      'Used Pygame with a Tiled-built map pipeline to structure the world, player movement, and interactive gameplay elements.',
    ],
    technologies: [
      { skillId: 'python', label: 'Python' },
      { skillId: 'python', label: 'Pygame' },
      { skillId: 'python', label: 'Tiled' },
      { skillId: 'git', label: 'Git' },
      { skillId: 'github', label: 'GitHub' },
    ],
  },
  {
    id: 'pyzelda-rpg',
    period: '2022',
    title: 'PyZelda RPG',
    subtitle: 'Zelda-Style Action RPG',
    tasks: [
      'Built a Zelda-style action RPG in Python and Pygame with melee combat, enemies, spells, upgrades, and audio, and the repo has reached 28 GitHub stars.',
      'Used Tiled to build and organize the game world, level structure, and traversal flow for a classic top-down RPG feel.',
      'Developed the project with multiple contributors, extending the original game work through collaborative improvements and follow-up fixes.',
      'Used Pygame with a Tiled-built map pipeline to structure the world, player movement, and interactive gameplay elements.',
    ],
    technologies: [
      { skillId: 'python', label: 'Python' },
      { skillId: 'python', label: 'Pygame' },
      { skillId: 'python', label: 'Tiled' },
      { skillId: 'git', label: 'Git' },
      { skillId: 'github', label: 'GitHub' },
    ],
  },
];

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
  return (
    <div className='mt-5 flex flex-col gap-y-4'>
      <Typography variant='h4' size='sm'>
        Technologies
      </Typography>
      <TechnologyTags technologies={technologies} sortByLabelLength />
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
