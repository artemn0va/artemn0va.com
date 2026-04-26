import Typography from '@/components/typography';

import Section from '@/layouts/section';

export default function Role() {
  return (
    <Section className='bg-page shadow-section-outer dark:bg-section-dark dark:shadow-section-outer-dark 2xl:bg-section-dark 2xl:shadow-section-outer-dark 2xl:dark:bg-page 2xl:dark:shadow-section-outer col-span-1 flex flex-col rounded-xl px-[11px] py-[15px] md:px-3.5 md:pb-4 2xl:px-[17px] 2xl:py-[21px]'>
      <Typography variant='h1' isThemeRevert>
        Artem Nova
      </Typography>
      <Typography
        size='sm'
        className='2xl:text-base text-[#60656E] dark:text-[#D5D5D5] 2xl:text-[#D5D5D5] 2xl:dark:text-[#60656E]'
      >
        Full Stack Developer
      </Typography>
    </Section>
  );
}
