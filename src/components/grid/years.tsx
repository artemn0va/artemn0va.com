import Typography from '@/components/typography';

import Section from '@/layouts/section';

import TrackLineSVG from '~/svg/track-line.svg';
import TrackLinesSVG from '~/svg/track-lines.svg';

export default function Years() {
  return (
    <Section
      id='years'
      className='years bg-section shadow-section-inner dark:bg-section-inner-dark dark:shadow-section-inner-dark w-full flex flex-col gap-y-2.5 md:gap-y-3 2xl:gap-y-4 rounded-xl px-[17px] 2xl:pl-[21px] 2xl:pr-[20.4px] pt-3.5'
    >
      <Typography isThemeRevert variant='h2' size='sm'>
        Years
      </Typography>

      <div className='mx-auto'>
        <div className='relative max-w-max'>
          <TrackLinesSVG className='w-[125.48px] h-[99.9px] md:w-[133px] md:h-[105.06px] 2xl:w-[150.59px] 2xl:h-[118.96px]' />
          <TrackLineSVG className='w-[93.7px] h-[65.26px] md:w-[98.91px] md:h-[68.88px] 2xl:w-[112px] 2xl:h-[78px] absolute top-[15.9px] left-[15.9px] md:top-[16.78px] md:left-[16.78px] 2xl:top-[19px] 2xl:left-[19px]' />
          <div className='absolute top-[28.98px] left-[29.28px] md:top-[30.91px] md:left-[30.91px] bg-page shadow-years-outer dark:bg-section-dark dark:shadow-years-outer-dark p-[3.35px] md:p-[3.53px] 2xl:top-[35px] 2xl:left-[35px] 2xl:p-1 0 rounded-full'>
            <div className='w-[60.24px] h-[60.24px] md:w-[63.58px] md:h-[63.58px] 2xl:w-[72px] 2xl:h-[72px] bg-page shadow-years-inner dark:bg-section-dark dark:shadow-years-inner-dark rounded-full flex justify-center items-center'>
              <p className='max-w-max bg-years-text-gradient dark:bg-years-text-gradient-dark text-transparent bg-clip-text text-[33.5px] leading-[36.8px]'>
                6
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
