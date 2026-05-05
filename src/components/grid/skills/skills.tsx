import NextImage from '@/components/next-image';
import Typography from '@/components/typography';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import skillsData from '@/content/home/skills';

import Section from '@/layouts/section';

const SKILLS_PER_SLIDE_MOBILE = 6;
const SKILLS_PER_SLIDE_TABLET = 8;
const SKILLS_PER_SLIDE_DESKTOP = 10;

// TODO: Do responsive num of skills per slide
// TODO: Do not render 3 carousels, instead render 1 carousel with different number of skills per slide based on JS media query

export default function Skills() {
  const groupedSkillsMobile = [];
  for (let i = 0; i < skillsData.length; i += SKILLS_PER_SLIDE_MOBILE) {
    groupedSkillsMobile.push(skillsData.slice(i, i + SKILLS_PER_SLIDE_MOBILE));
  }
  const groupedSkillsTablet = [];
  for (let i = 0; i < skillsData.length; i += SKILLS_PER_SLIDE_TABLET) {
    groupedSkillsTablet.push(skillsData.slice(i, i + SKILLS_PER_SLIDE_TABLET));
  }
  const groupedSkillsDesktop = [];
  for (let i = 0; i < skillsData.length; i += SKILLS_PER_SLIDE_DESKTOP) {
    groupedSkillsDesktop.push(
      skillsData.slice(i, i + SKILLS_PER_SLIDE_DESKTOP),
    );
  }

  return (
    <Section
      id='skills'
      className='skills bg-section shadow-section-inner dark:bg-section-inner-dark dark:shadow-section-inner-dark flex flex-col gap-y-6 rounded-xl px-5 pt-3.5 pb-8'
    >
      <Typography isThemeRevert variant='h2' size='sm'>
        Skills
      </Typography>
      <Carousel className='md:hidden mx-auto max-w-[220px]'>
        <CarouselContent isSkillsSection>
          {groupedSkillsMobile.map((group, index) => (
            <CarouselItem
              key={index}
              className='grid grid-cols-[repeat(3,60px)] grid-rows-2 gap-5'
            >
              {group.map((skill) => (
                <SkillCard key={skill.id} src={skill.src} name={skill.name} />
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Carousel className='hidden md:flex 2xl:hidden md:mx-auto md:max-w-[604px]'>
        <CarouselContent isSkillsSection>
          {groupedSkillsTablet.map((group, index) => (
            <CarouselItem
              key={index}
              className='md:grid md:grid-cols-[repeat(8,58px)] md:grid-rows-1 md:gap-5'
            >
              {group.map((skill) => (
                <SkillCard key={skill.id} src={skill.src} name={skill.name} />
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Carousel className='hidden 2xl:flex 2xl:mx-auto 2xl:max-w-[700px]'>
        <CarouselContent isSkillsSection>
          {groupedSkillsDesktop.map((group, index) => (
            <CarouselItem
              key={index}
              className='2xl:grid 2xl:grid-cols-[repeat(10,52px)] 2xl:grid-rows-1 2xl:gap-5'
            >
              {group.map((skill) => (
                <SkillCard key={skill.id} src={skill.src} name={skill.name} />
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
}

interface SkillCardProps {
  src: string;
  name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ src, name }) => (
  <div className='max-w-max flex flex-col gap-y-2.5 overflow-visible'>
    <NextImage
      className='bg-skill shadow-skill dark:bg-skill-dark dark:shadow-skill-dark rounded-full overflow-hidden'
      src={src}
      alt={name}
      width={57.7}
      height={57.7}
      unoptimized
    />
    <Typography className='mx-auto' size='sm'>
      {name}
    </Typography>
  </div>
);
