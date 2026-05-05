import educationData from '@/components/grid/experience/education-data';
import experienceData from '@/components/grid/experience/experience-data';
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

export default function Experience() {
  const tabsItems = [
    {
      value: 'experience',
      label: 'Experience',
      content: <AccordionComponent items={experienceData} />,
    },
    {
      value: 'education',
      label: 'Education',
      content: <AccordionComponent items={educationData} />,
    },
  ];

  return (
    <ScrollArea className='experience bg-page dark:bg-section-dark shadow-section-outer dark:shadow-section-outer-dark 2xl:bg-section-dark 2xl:dark:bg-page 2xl:shadow-section-outer-dark 2xl:dark:shadow-section-outer rounded-xl'>
      <Section
        id='experience'
        className='flex flex-col gap-y-4 px-4 pt-3.5 pb-5'
      >
        <Typography isThemeRevert variant='h2' size='sm' className='ml-1'>
          Experience & Education
        </Typography>
        <TabsComponent defaultValue='experience' items={tabsItems} />
      </Section>
    </ScrollArea>
  );
}

type TabItem = {
  value: string;
  label: string;
  content: JSX.Element;
};

type TabsProps = {
  defaultValue: string;
  items: TabItem[];
};

export const TabsComponent: React.FC<TabsProps> = ({ defaultValue, items }) => {
  return (
    <Tabs defaultValue={defaultValue}>
      <TabsList>
        {items.map((item) => (
          <TabsTrigger isThemeRevert key={item.value} value={item.value}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) => (
        <TabsContent key={item.value} value={item.value}>
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

type AccordionProps = {
  items: {
    id: string;
    date: string;
    title: string;
    subtitle: string;
    achievements: Array<{ text: string }>;
    technologies?: Array<{ skillId: string; label: string }>;
  }[];
};

function getTechnologySkill(skillId: string) {
  return skillsData.find((skill) => skill.id === skillId);
}

export const AccordionComponent: React.FC<AccordionProps> = ({ items }) => {
  return (
    <Accordion
      type='single'
      defaultValue={items[0]?.id}
      collapsible
      className='flex flex-col gap-y-3'
    >
      {items.map((item) => (
        <AccordionItem isThemeRevert key={item.id} value={item.id}>
          <AccordionTrigger isThemeRevert>
            <div className='grid w-full grid-cols-[96px_minmax(0,1fr)] items-center gap-x-3 min-[430px]:grid-cols-[112px_minmax(0,1fr)] min-[430px]:gap-x-4'>
              <Typography
                isThemeRevert
                className='w-full tabular-nums whitespace-nowrap'
              >
                {item.date}
              </Typography>
              <div className='flex min-w-0 flex-col items-start'>
                <Typography isThemeRevert variant='h3'>
                  {item.title}
                </Typography>
                <Typography
                  isThemeRevert
                  size='sm'
                  className='text-[#60656E] dark:text-[#D5D5D5] 2xl:text-[#D5D5D5] 2xl:dark:text-[#60656E]'
                >
                  {item.subtitle}
                </Typography>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Typography isThemeRevert variant='h4' size='sm'>
              Achievements/Tasks
            </Typography>
            <ul className='flex flex-col gap-y-2.5'>
              {item.achievements.map((ach, idx) => (
                <li key={idx} className='flex gap-x-4'>
                  <CheckIcon className='w-[18px] h-[18px] shrink-0 fill-[#29303E] dark:fill-white 2xl:fill-white 2xl:dark:fill-[#29303E]' />
                  <Typography isThemeRevert>{ach.text}</Typography>
                </li>
              ))}
            </ul>
            {item.technologies?.length ? (
              <div className='mt-5 flex flex-col gap-y-4'>
                <Typography isThemeRevert variant='h4' size='sm'>
                  Technologies
                </Typography>
                <ul className='flex flex-wrap gap-2.5'>
                  {[...item.technologies]
                    .sort((a, b) => b.label.length - a.label.length)
                    .map((technology) => {
                      const skill = getTechnologySkill(technology.skillId);

                      if (!skill) {
                        return (
                          <li
                            key={`${technology.skillId}-${technology.label}`}
                            className='flex h-8 max-w-max rounded-xl p-px shadow-[8px_9px_8px_-6px_#A6B4C8D9,-5px_-5px_20px_0px_#FFFFFF87] dark:shadow-[8px_9px_8px_-6px_#23282DCC,-3px_-3px_6px_0px_#48535C59] 2xl:shadow-[8px_9px_8px_-6px_#23282DCC,-3px_-3px_6px_0px_#48535C59] 2xl:dark:shadow-[8px_9px_8px_-6px_#A6B4C8D9,-5px_-5px_20px_0px_#FFFFFF87]'
                          >
                            <div className='flex h-full w-full items-center justify-center rounded-[11px] bg-[linear-gradient(134.17deg,#EEF0F5_4.98%,#E6E9EF_94.88%)] px-3 py-1.5 dark:bg-[linear-gradient(134.17deg,#3F4850_4.98%,#363E46_94.88%)] 2xl:bg-[linear-gradient(134.17deg,#3F4850_4.98%,#363E46_94.88%)] 2xl:dark:bg-[linear-gradient(134.17deg,#EEF0F5_4.98%,#E6E9EF_94.88%)]'>
                              <Typography
                                isThemeRevert
                                size='sm'
                                className='text-center font-normal leading-5'
                              >
                                {technology.label}
                              </Typography>
                            </div>
                          </li>
                        );
                      }

                      return (
                        <li
                          key={`${technology.skillId}-${technology.label}`}
                          className='flex h-8 max-w-max rounded-xl p-px shadow-[8px_9px_8px_-6px_#A6B4C8D9,-5px_-5px_20px_0px_#FFFFFF87] dark:shadow-[8px_9px_8px_-6px_#23282DCC,-3px_-3px_6px_0px_#48535C59] 2xl:shadow-[8px_9px_8px_-6px_#23282DCC,-3px_-3px_6px_0px_#48535C59] 2xl:dark:shadow-[8px_9px_8px_-6px_#A6B4C8D9,-5px_-5px_20px_0px_#FFFFFF87]'
                        >
                          <div className='flex h-full w-full items-center justify-center gap-1 rounded-[11px] bg-[linear-gradient(134.17deg,#EEF0F5_4.98%,#E6E9EF_94.88%)] px-3 py-1.5 dark:bg-[linear-gradient(134.17deg,#3F4850_4.98%,#363E46_94.88%)] 2xl:bg-[linear-gradient(134.17deg,#3F4850_4.98%,#363E46_94.88%)] 2xl:dark:bg-[linear-gradient(134.17deg,#EEF0F5_4.98%,#E6E9EF_94.88%)]'>
                            <NextImage
                              className='h-[19px] w-[19px] overflow-hidden rounded-full'
                              src={skill.src}
                              alt=''
                              width={19}
                              height={19}
                              unoptimized
                            />
                            <Typography
                              isThemeRevert
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
            ) : null}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
