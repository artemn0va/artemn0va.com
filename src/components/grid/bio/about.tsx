import { cn } from '@/lib/utils';

import Typography from '@/components/typography';

import Section from '@/layouts/section';

export default function About() {
  return (
    <Section aria-label='About Artem' className='flex flex-col gap-y-2.5'>
      <Typography isThemeRevert variant='h2' size='sm'>
        About
      </Typography>
      <div
        className={cn(
          'relative overflow-hidden transition-max-height duration-300 ease-in-out',
        )}
      >
        <Typography isThemeRevert>
          Hi, I am Artem. Full Stack Developer passionate about system design
          and versatile tools. I use TypeScript and Python to build ordered
          systems that save time, scale reliably, and make products easier to
          use.
        </Typography>
      </div>
    </Section>
  );
}
