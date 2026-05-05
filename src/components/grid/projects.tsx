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
import { projects, sideProjects } from '@/content/home/projects';
import type {
  ProjectItem,
  TechnologyTag as ProjectTechnology,
} from '@/content/home/types';

import Section from '@/layouts/section';

import CheckIcon from '~/svg/check.svg';

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
