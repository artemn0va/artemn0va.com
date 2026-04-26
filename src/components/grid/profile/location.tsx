import Typography from '@/components/typography';

import Section from '@/layouts/section';

import MapPinIcon from '~/svg/map-pin.svg';

export default function Location() {
  return (
    <Section className='bg-page shadow-section-outer dark:bg-section-dark dark:shadow-section-outer-dark 2xl:bg-section-dark 2xl:shadow-section-outer-dark 2xl:dark:bg-page 2xl:dark:shadow-section-outer col-span-1 flex flex-col gap-y-1 2xl:gap-y-3 rounded-xl px-4 pt-3.5 pb-[13px] 2xl:pb-5'>
      <Typography isThemeRevert variant='h2' size='sm' className='ml-1'>
        Location
      </Typography>
      <div className='flex items-center gap-x-1'>
        <MapPinIcon className='w-[22px] h-[22px] fill-[#29303E] dark:fill-white 2xl:fill-white 2xl:dark:fill-[#29303E]' />
        <Typography isThemeRevert>Tel Aviv, Israel</Typography>
      </div>
    </Section>
  );
}
