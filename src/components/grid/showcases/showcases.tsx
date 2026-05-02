'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Game2048 from '@/components/grid/showcases/2048/components/2048';
import GameProvider from '@/components/grid/showcases/2048/context/game-context';
import CarShowLoader from '@/components/grid/showcases/car-show/car-show-loader';
import Typography from '@/components/typography';
import Section from '@/layouts/section';

const CarShow = dynamic(
  () => import('@/components/grid/showcases/car-show/car-show'),
  {
    ssr: false,
    loading: () => <CarShowLoader />,
  },
);

const showcaseTitles = ['2048', '3D'] as const;

function CarShowPlaceholder() {
  return (
    <div className='h-[300px] w-full rounded-xl bg-black md:h-[320px] 2xl:h-full 2xl:min-h-[220px]' />
  );
}

export default function Showcases() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [isCarSlideSettled, setIsCarSlideSettled] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    const unmountCarOnLeave = () => {
      const nextSlide = api.selectedScrollSnap();

      setSelectedSlide(nextSlide);

      if (nextSlide !== 1) {
        setIsCarSlideSettled(false);
      }
    };

    const unmountCarOnScroll = () => {
      setIsCarSlideSettled((isSettled) => {
        if (!isSettled || api.selectedScrollSnap() === 1) {
          return isSettled;
        }

        return false;
      });
    };

    const mountCarAfterSettle = () => {
      const nextSlide = api.selectedScrollSnap();

      setSelectedSlide(nextSlide);
      setIsCarSlideSettled(nextSlide === 1);
    };

    mountCarAfterSettle();
    api.on('select', unmountCarOnLeave);
    api.on('scroll', unmountCarOnScroll);
    api.on('settle', mountCarAfterSettle);
    api.on('reInit', mountCarAfterSettle);

    return () => {
      api.off('select', unmountCarOnLeave);
      api.off('scroll', unmountCarOnScroll);
      api.off('settle', mountCarAfterSettle);
      api.off('reInit', mountCarAfterSettle);
    };
  }, [api]);

  return (
    <Section className='showcases bg-section shadow-section-inner dark:bg-section-inner-dark dark:shadow-section-inner-dark relative rounded-xl'>
      <div className='pointer-events-none absolute top-3.5 left-5 z-20'>
        <Typography isThemeRevert variant='h2' size='sm'>
          {showcaseTitles[selectedSlide] ?? showcaseTitles[0]}
        </Typography>
      </div>
      <Carousel
        setApi={setApi}
        enableKeyboardNavigation={false}
        className='select-none'
        opts={{
          loop: true,
          watchDrag: false,
        }}
      >
        <CarouselContent className='!overflow-visible' isShowcasesSection>
          <CarouselItem className='flex items-center justify-center'>
            <GameProvider>
              <Game2048 isKeyboardEnabled={selectedSlide === 0} />
            </GameProvider>
          </CarouselItem>
          <CarouselItem className='flex items-center justify-center'>
            {isCarSlideSettled ? (
              <CarShow />
            ) : selectedSlide === 1 ? (
              <CarShowLoader />
            ) : (
              <CarShowPlaceholder />
            )}
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className='max-w-max absolute top-[calc(100%-32px)] left-[calc(50%-48px)] focus-visible:ring-0 2xl:top-1/2 2xl:left-1.5' />
        <CarouselNext className='max-w-max absolute top-[calc(100%-32px)] right-[calc(50%-48px)] focus-visible:ring-0 2xl:top-1/2 2xl:right-1.5' />
      </Carousel>
    </Section>
  );
}
