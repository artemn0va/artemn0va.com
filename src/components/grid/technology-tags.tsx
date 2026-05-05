'use client';

import skillsData from '@/components/grid/skills/skills-data';
import NextImage from '@/components/next-image';
import Typography from '@/components/typography';
import { cn } from '@/lib/utils';

export type TechnologyTag = {
  skillId: string;
  label: string;
};

type TechnologyTagsProps = {
  technologies: TechnologyTag[];
  isThemeRevert?: boolean;
  sortByLabelLength?: boolean;
};

function getTechnologySkill(skillId: string) {
  return skillsData.find((skill) => skill.id === skillId);
}

export default function TechnologyTags({
  technologies,
  isThemeRevert = false,
  sortByLabelLength = false,
}: Readonly<TechnologyTagsProps>) {
  const items = sortByLabelLength
    ? [...technologies].sort((a, b) => b.label.length - a.label.length)
    : technologies;

  return (
    <ul className='flex flex-wrap gap-2.5'>
      {items.map((technology) => {
        const skill = getTechnologySkill(technology.skillId);

        if (!skill) {
          return (
            <li
              key={`${technology.skillId}-${technology.label}`}
              className={cn(
                'flex h-8 max-w-max rounded-xl p-px shadow-[8px_9px_8px_-6px_#A6B4C8D9,-5px_-5px_20px_0px_#FFFFFF87] dark:shadow-[8px_9px_8px_-6px_#23282DCC,-3px_-3px_6px_0px_#48535C59]',
                {
                  '2xl:shadow-[8px_9px_8px_-6px_#23282DCC,-3px_-3px_6px_0px_#48535C59] 2xl:dark:shadow-[8px_9px_8px_-6px_#A6B4C8D9,-5px_-5px_20px_0px_#FFFFFF87]':
                    isThemeRevert,
                },
              )}
            >
              <div
                className={cn(
                  'flex h-full w-full items-center justify-center rounded-[11px] bg-[linear-gradient(134.17deg,#EEF0F5_4.98%,#E6E9EF_94.88%)] px-3 py-1.5 dark:bg-[linear-gradient(134.17deg,#3F4850_4.98%,#363E46_94.88%)]',
                  {
                    '2xl:bg-[linear-gradient(134.17deg,#3F4850_4.98%,#363E46_94.88%)] 2xl:dark:bg-[linear-gradient(134.17deg,#EEF0F5_4.98%,#E6E9EF_94.88%)]':
                      isThemeRevert,
                  },
                )}
              >
                <Typography
                  isThemeRevert={isThemeRevert}
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
            className={cn(
              'flex h-8 max-w-max rounded-xl p-px shadow-[8px_9px_8px_-6px_#A6B4C8D9,-5px_-5px_20px_0px_#FFFFFF87] dark:shadow-[8px_9px_8px_-6px_#23282DCC,-3px_-3px_6px_0px_#48535C59]',
              {
                '2xl:shadow-[8px_9px_8px_-6px_#23282DCC,-3px_-3px_6px_0px_#48535C59] 2xl:dark:shadow-[8px_9px_8px_-6px_#A6B4C8D9,-5px_-5px_20px_0px_#FFFFFF87]':
                  isThemeRevert,
              },
            )}
          >
            <div
              className={cn(
                'flex h-full w-full items-center justify-center gap-1 rounded-[11px] bg-[linear-gradient(134.17deg,#EEF0F5_4.98%,#E6E9EF_94.88%)] px-3 py-1.5 dark:bg-[linear-gradient(134.17deg,#3F4850_4.98%,#363E46_94.88%)]',
                {
                  '2xl:bg-[linear-gradient(134.17deg,#3F4850_4.98%,#363E46_94.88%)] 2xl:dark:bg-[linear-gradient(134.17deg,#EEF0F5_4.98%,#E6E9EF_94.88%)]':
                    isThemeRevert,
                },
              )}
            >
              <NextImage
                className='h-[19px] w-[19px] overflow-hidden rounded-full'
                src={skill.src}
                alt=''
                width={19}
                height={19}
                unoptimized
              />
              <Typography
                isThemeRevert={isThemeRevert}
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
  );
}
