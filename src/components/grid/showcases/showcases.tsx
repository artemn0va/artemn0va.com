'use client';

import dynamic from 'next/dynamic';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Game2048 from '@/components/grid/showcases/2048/components/2048';
import GameProvider from '@/components/grid/showcases/2048/context/game-context';
import Section from '@/layouts/section';

const CarShow = dynamic(
  () => import('@/components/grid/showcases/car-show/car-show'),
  {
    ssr: false,
    loading: () => (
      <div className='flex h-[300px] w-full items-center justify-center rounded-xl bg-black md:h-[320px] 2xl:h-full 2xl:min-h-[220px]'>
        <span className='text-sm text-white/60'>Loading scene...</span>
      </div>
    ),
  },
);

export default function Showcases() {
  return (
    <Section className='showcases bg-section shadow-section-inner dark:bg-section-inner-dark dark:shadow-section-inner-dark rounded-xl'>
      <Carousel
        className='select-none'
        opts={{
          loop: true,
          watchDrag: false,
        }}
      >
        <CarouselContent className='!overflow-visible' isShowcasesSection>
          <CarouselItem className='flex items-center justify-center'>
            <GameProvider>
              <Game2048 />
            </GameProvider>
          </CarouselItem>
          <CarouselItem className='flex items-center justify-center'>
            <CarShow />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className='max-w-max absolute top-[calc(100%-32px)] left-[calc(50%-48px)] 2xl:top-1/2 2xl:left-1.5' />
        <CarouselNext className='max-w-max absolute top-[calc(100%-32px)] right-[calc(50%-48px)] 2xl:top-1/2 2xl:right-1.5' />
      </Carousel>
    </Section>
  );
}
